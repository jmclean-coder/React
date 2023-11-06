import React from 'react';

import styles from './Button.module.css'; // For CSS Modules

// under the hood, this concept of CSS modules at build will take the classes imported to the component and make uniqe version of those classes for this component.
// This is another way of scoping your css styles to a specific components
// It can be the best of both world, we have our styles in css modules AND we have them scope to the component that uses those styles.

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
