import React from 'react';
import PropTypes from 'prop-types';

const Button = ({page, setPage}) => {
  return (
    <button className={'Button'} onClick={() => setPage(page+1)}>LoadMore</button>
  );
};

Button.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number,
};

export default Button;
