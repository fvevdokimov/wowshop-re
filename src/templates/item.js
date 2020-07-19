import React, {useCallback, useLayoutEffect, useState} from 'react'
import { Link, graphql, navigate } from 'gatsby'
import {Carousel} from "../components/carousel";
import Img from "gatsby-image";
import './item.scss';
import {PrimaryButton} from "../components/primary-button";
import {Back, Close, CloseWithLabel, CloseWithLabelLink} from "../components/icons";
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import {getStoredNavigation} from "../utils/stored-nav";
import { CurrentItemContext } from '../utils/addCart';

const SizeTable = ({sizes}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen])
    const rows = {
        armlength: false,
        Handlength: false,
        ziplength: false,
        seamlength: false,
        footlength: false,
        Overallslength: false,
    }
    sizes.forEach(size => {
        Object.entries(rows).forEach(([key, value]) => {
            rows[key] = value || !!size[key];
        })
    })
    return <>
            <div className={`itemSizeTable__layout${isOpen ? " open" : ""}`}>
                <h3 className="itemSizeTable__header">Таблица размеров
                    <Close color="#F2F2F2" onClick={toggle} style={{marginLeft: 'auto'}}/></h3>
                <div className="itemSizeTable__columns">
                    <div className="itemSizeTable__labels">
                        <span>Размер</span>
                        {rows.armlength && <span>Длина рукава от ворота</span>}
                        {rows.Handlength && <span>Длина рукава от плеча</span>}
                        {rows.ziplength && <span>Длина куртки по замку (от ворота)</span>}
                        {rows.seamlength && <span>Шаговый шов</span>}
                        {rows.footlength && <span>Длина стельки</span>}
                        {rows.Overallslength && <span>Длина комбинезона от ворота</span>}
                    </div>
                    {sizes.map(size => <div className="itemSizeTable__column">
                        <div>{size.size || '-'}</div>
                        {rows.armlength && <div>{size.armlength || '-'}</div>}
                        {rows.Handlength && <div>{size.Handlength || '-'}</div>}
                        {rows.ziplength && <div>{size.ziplength || '-'}</div>}
                        {rows.seamlength && <div>{size.seamlength || '-'}</div>}
                        {rows.footlength && <div>{size.footlength || '-'}</div>}
                        {rows.Overallslength && <div>{size.Overallslength || '-'}</div>}
                    </div>)}
                </div>
            </div>
            <a className="itemSizeTable" onClick={toggle}>Таблица размеров</a>
        </>
}
const item ={};
export const cartContext = React.createContext(
    item.id, item.selectedSize
);

const SizePicker = ({sizes, selectedSize, setSize}) => <>
    <span className="itemSelectSize">Выберите размер</span>
    <div className="itemModalSizes">
        {sizes.map(({id, size}) =>
            <div
                className={`itemModalSize${selectedSize === id ? ' sizeSelected' : ''}`}
                onClick={() => setSize(id)}
            >{size}</div>)}
    </div>
    <SizeTable sizes={sizes}/>
</>

const ModalStyleHook = ({modal, path}) => {
    useLayoutEffect(() => {
        if(!modal) {
            navigate(getStoredNavigation(), {state: {open: path}})
            return
        }

        if(window) {
            window.document.documentElement.dataset.isItemOpen = 'true';

            return () => {
                window.document.documentElement.dataset.isItemOpen = 'false';
            }
        }
    }, [])
    return null
}

// TODO: Proper closing
const ArticleTemplate = ({ data, path }) => {
    const item = data.strapiItem;
    
    const [selectedSize, setSize] = useState(item.sizetable[0] ? item.sizetable[0].id : -1); // Берем значение item.sizetable[0] и присваиваем один из вариантов selectedSize
    
    const addToCart = useCallback(() => {
        window && window.addToCart && window.addToCart(item.id, selectedSize);
    }, [item.id, selectedSize]);
    
    const cartContext = React.createContext(
        item.id, item.selectedSize
    );

    return <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => ( <>
        <CurrentItemContext.Consumer>
            {({setCurrentItem}) => {
                setCurrentItem(item);
                return <>
                <Link to={getStoredNavigation()} className="itemPageBack"><Back color="#87338B"/></Link>
                <h2 className="itemModalHeader">
                    {item.name}
                    <CloseWithLabelLink to={closeTo} className="itemModalClose" color="#87338B99"/>
                </h2>
                <div className="itemModalLayout">
                    <Carousel images={item.images}/>
                    <div className="itemModalData">
                        <SizePicker sizes={item.sizetable} selectedSize={selectedSize} setSize={setSize}/>
                        <PrimaryButton onClick={addToCart}>Добавить в корзину<div className="cartIcon"/></PrimaryButton>
                        <div className="itemModalText">
                            <p className="itemModalDescription">{item.description}</p>
                            {item.usageicons.map(({icon}) => <img src={icon.publicURL} height={56}/>)}
                        </div>
                    </div>
                </div>
                <div className="itemModalRight">
                    <p className="itemModalPrice">{item.price}.–</p>
                </div>
                

                <ModalStyleHook modal={modal} path={path}/>
                </>
            }}
        </CurrentItemContext.Consumer>
        
        
        </>)}
    </ModalRoutingContext.Consumer>
}

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
        strapiItem(id: {eq: $id}) {
            id
            name
            price
            description
            images {
                localFile {
                   publicURL
                   childImageSharp {
                       fluid(maxWidth: 400, maxHeight: 400) {
                           ...GatsbyImageSharpFluid
                       }
                   }
                }
            }
            usageicons {
                usage
                icon {
                   publicURL
                }
            }
            sizetable {
                id
                size
                armlength
                ziplength
                seamlength
                Overallslength
            }
        }
    }
`
