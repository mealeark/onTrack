import React from 'react';
import cn from 'classnames';

class Form extends React.Component {
  render() {
    return (
      <div className='form-group row justify-content-md-center'>
        <div className='col-sm-4'>
          <input
            type={this.props.value}
            className={cn('form-control form-control-lg', 'input__style')}
            placeholder={this.props.placeholder}
            onChange={(e) => this.props.onChange(e, this.props.value)}
          />
        </div>
      </div>
    );
  }
}

export default Form;