import React from "react";
import './primary-button.scss'
import {Link} from "gatsby";
export const PrimaryButton = ({to, disabled, className, ...props}) => {
    const buttonDiv = <div className={`primary-button${disabled ? ' disabled' : ''} ${className && !to ? className : ''}`} {...props}/>

    if(to) {
        return <Link className={className} to={to} style={{textDecoration: 'none'}}>{buttonDiv}</Link>
    }

    return buttonDiv
}
