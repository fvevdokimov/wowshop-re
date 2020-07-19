import Img from "gatsby-image";
import React, {createRef, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";

import './carousel.css'

// TODO: Fallback for browsers that don't support scroll-snap
// TODO: Detect or block user scrolling
export const Carousel = ({images, small}) => {
    const [focusFuncs, setFocusFuncs] = useState(images.map(_ => null))
    const wrapperRef = useRef(null);
    useLayoutEffect(() => {
        if(wrapperRef.current) {
            setFocusFuncs(images.map((_, i) => () => {
                wrapperRef.current.scrollTo({
                    behavior: "smooth", left: i * 400
                })
            }))
        }
    }, [wrapperRef, images])

    const [current, setCurrent] = useState(0)
    const scrollLeft = useCallback((ev) => {
        let newCurrent = current - 1;
        if(newCurrent === -1) {
            newCurrent = focusFuncs.length - 1;
        }
        setCurrent(newCurrent)
        ev.preventDefault()
    },[current, setCurrent, focusFuncs])
    const scrollRight = useCallback((ev) => {
        let newCurrent = current + 1;
        if(newCurrent === focusFuncs.length) {
            newCurrent = 0;
        }
        setCurrent(newCurrent)
        ev.preventDefault()
    },[current, setCurrent, focusFuncs])

    useEffect(() => {
        const func = focusFuncs[current];
        func && func()
    }, [current, focusFuncs])
    return <div className={!small ? 'carouselContainer' : ''}>
        <div className={`carousel${small ? ' carousel-small' : ''}`} ref={wrapperRef}>
            {images.map((image, i) =>
                <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    className='carousel-slide'/>)}
            <div className='carouselButtonContainer'>
                <div className='carouselLeft' onClick={scrollLeft}/>
                <div className="carouselSpacer"/>
                <div className='carouselRight' onClick={scrollRight}/>
            </div>
        </div>
        {!small && <div className='carousel-thumbnails'>
            {images.map((image, i) =>
                <div onClick={() => setCurrent(i)}>
                    <Img fluid={image.localFile.childImageSharp.fluid}
                         className='carousel-thumbnail'/>
                </div>)}
        </div>}
    </div>
}
