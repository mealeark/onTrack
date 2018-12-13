const environment = process.env.NODE_ENV || 'development'; // set environment
const configuration = require('../../knexfile.js')[environment]; // pull in correct db with env configs
const database = require('knex')(configuration); // define database based on above
const bcrypt = require('bcrypt'); // bcrypt will encrypt passwords to be saved in db
const crypto = require('crypto');  // built-in encryption node module

module.exports = {
  hashPassword: (password) => {
    return new Promise((resolve, reject) =>
      bcrypt.hash(password, 10, (err, hash) => {
        return err ? reject(err) : resolve(hash);
      })
    );
  },
  
  // user will be saved to db 
  // - we're explicitly asking postgres to return 
  // back helpful info from the row created
  createUser: (user) => {
    return database.raw(
      "INSERT INTO users (username, password_digest, token, created_at) VALUES (?, ?, ?, ?) RETURNING id, username, created_at, token",
      [user.username, user.password_digest, user.token, new Date()]
    )
    .then((data) => data.rows[0]);
  },
  
  // crypto ships with node - we're leveraging 
  // it to create a random, secure token
  createToken: () => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, data) => {
        return err ? reject(err) : resolve(data.toString('base64'));
      });
    });
  },

  findUser: (userReq) => {
    return database.raw("SELECT * FROM users WHERE username = ?", [userReq.username])
      .then((data) => data.rows[0]);
  },
  
  checkPassword: (reqPassword, foundUser) => {
    return new Promise((resolve, reject) =>
      bcrypt.compare(reqPassword, foundUser.password_digest, (err, res) => {
          if (err) {
            reject(err);
          }
          else if (res) {
            resolve(res);
          } else {
            reject(new Error('Passwords do not match.'));
          }
      })
    );
  },
  
  updateUserToken: (token, user) => {
    return database.raw("UPDATE users SET token = ? WHERE id = ? RETURNING id, username, token", [token, user.id])
      .then((data) => data.rows[0]);
  },
  
  findByToken: (token) => {
    return database.raw("SELECT * FROM users WHERE token = ?", [token])
      .then((data) => data.rows[0]);
  },

  authenticate: (userReq) => {
    return new Promise((resolve, reject) => {
        module.exports.findUser(userReq)
          .then((user) => {
            if (user && user.username === userReq.username) {
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch(err => reject(err));
      }
    );
  }
};
