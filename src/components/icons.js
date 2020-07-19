import React from "react";
import {Link} from "gatsby";

import './components.scss'

export const Close = ({onClick, color, style}) =>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" onClick={onClick} style={{cursor: 'pointer', ...style}}>
        <path d="M13.6587 1.76758L1.65869 13.7676" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.65869 1.76758L13.6587 13.7676" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

export const Back = ({onClick, color, style}) =>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M5.65989 11.6213C5.93919 11.9006 6.39203 11.9006 6.67133 11.6213C6.95062 11.342 6.95062 10.8891 6.67133 10.6098L2.88588 6.82438L11.1724 6.82439C11.5674 6.82439 11.8876 6.50418 11.8876 6.1092C11.8876 5.71421 11.5674 5.39401 11.1724 5.39401L2.88592 5.394L6.67133 1.6086C6.95063 1.3293 6.95063 0.876469 6.67133 0.59717C6.39203 0.31787 5.93919 0.31787 5.6599 0.59717L0.653566 5.6035C0.374267 5.8828 0.374267 6.33563 0.653566 6.61493L5.65989 11.6213Z"/>
    </svg>

export const CloseWithLabel = ({onClick, color, style}) =>
    <div style={{cursor: 'pointer', fontSize: 18, fontWeight: 'normal', fontFamily: 'PT Sans', color, ...style}} onClick={onClick}>закрыть <Close color={color}/></div>



export const CloseWithLabelLink = ({to, color, style, className}) =>
    <Link to={to} style={{color, textDecoration: 'none', ...style}} className={className}>
        <div className="button__close">закрыть <Close color={color}/></div>
    </Link>
