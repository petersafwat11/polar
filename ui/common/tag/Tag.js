import React from 'react';
import classes from './tag.module.css';

const Tag = ({ children, className }) => {
  return (
    <div className={`${classes.tag} ${className}`}>
      {children}
    </div>
  );
};

export default Tag;








