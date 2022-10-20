import React from 'react';

const Button = ({ customClass = 'btn btn-sm btn-success text-xs text-white', buttonTitle = 'Button Name' }) => {
    return (
        <button className={customClass}>{buttonTitle}</button>
    );
};

export default Button;