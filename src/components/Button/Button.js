import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  state = {
    perPage: 2,
  };
  load = () => {
    this.setState(state => {
      return { perPage: state.perPage + 1 };
    });
    this.props.onLoadMore(this.state.perPage);
  };

  render() {
    return (
      <button className={'Button'} onClick={this.load}>LoadMore</button>
    );
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
