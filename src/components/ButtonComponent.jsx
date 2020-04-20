import React from 'react';

function ButtonComponent({ handleClick, className, children }) {
  // render
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default ButtonComponent;
