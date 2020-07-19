import React, {useCallback, useEffect, useState} from "react"

import './layout-info.scss'
import Layout from "./layout";
import {Back, CloseWithLabel, CloseWithLabelLink} from "./icons";
import {Link} from "gatsby";
import {getStoredNavigation} from "../utils/stored-nav";

const LayoutInfo = ({children, className}) => <Layout className="fullscreen-info">
        <div className="fullscreen-info__nav">
                <Link to={getStoredNavigation()} style={{cursor: 'pointer', fontSize: 18, fontWeight: 'normal', fontFamily: 'PT Sans'}}>
                        <div><Back color="white"/> Вернуться к покупкам</div>
                </Link>
                <CloseWithLabelLink style={{marginLeft: 'auto'}} to="boys/fall-spring" color="white" className="fullscreen-info__nav-back"/>
        </div>
        <div className={`fullscreen-info__children ${className}`}>
        {children}
        </div>
</Layout>

export default LayoutInfo;
