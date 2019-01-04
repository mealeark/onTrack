const { 
  hashPassword,
  createToken,
  createUser,
  findUser,
  checkPassword,
  updateUserToken,
  authenticate
} = require('../helpers/auth.js');

module.exports = {
  signup: function(req, res, next) {
    // get user from request body
    // encrypt plain text password with bcrypt
    // set user's password_digest to encrypted pw
    // create token to be sent back to client to create "session"
    // set user's token to created token
    // save user with password_digest and session token to database
    // respond with 201 and json of created user info
    const user = req.body;
    let userExist = false;
    
    authenticate(user)
      .then(data => { userExist = data; } )
      .then(() => {
        if (userExist) {
          console.log('user exists: ', userExist);
          res.json({success: false, username: null});
        } else {
          hashPassword(user.password)
            .then((hashedPassword) => {
              delete user.password;
              user.password_digest = hashedPassword;
            })
            .then(() => createToken())
            .then(token => { user.token = token; })
            .then(() => createUser(user))
            .then(() => {
              delete user.password_digest;
              res.status(201).json(user);
            })
            .catch((err) => console.error(err));
        }
      });
  },
  login: function(req, res, next) {
    // get user creds from request body
    // find user based on username in request
    // check user's password_digest against pw from request
    // if match, create and save a new token for user
    // send back json to client with token and user info
    const userReq = req.body;
    let user;

    findUser(userReq)
      .then(foundUser => {
        user = foundUser;
        return checkPassword(userReq.password, foundUser);
      })
      .then((response) => createToken())
      .then(token => updateUserToken(token, user))
      .then(() => {
        delete user.password_digest;
        res.status(200).json(user);
      })
      .catch((err) => console.error(err));
    } 
};