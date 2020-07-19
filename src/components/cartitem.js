import {Link} from "gatsby";
import React, {useState} from "react";
import Img from "gatsby-image"
import './cartitem.css'
import nodeToSlug from "../utils/url-slug";

function CountDropdown({item, count, changeCartItem}) {
    const [dropdownState, toggleDropdown] = useState(false);
    const toggleDropdownClick = (e) => { toggleDropdown(!dropdownState);};

    return (
        <div className={'dropdown '+(dropdownState === true ? 'active' : '')} onClick={toggleDropdownClick}>
            <ul>
                {[...(count > 5 ? [count] : []),1,2,3,4,5].map(num =>
                    <li key={num} className={num === count ? 'active' : ''} onClick={()=> changeCartItem({id: item.id, count: num})}>
                        <span>{num}</span>
                    </li>
                )}
                <li onClick={()=> changeCartItem({id: item.id, count: 0})}><span>Удалить</span></li>
            </ul>
        </div>
    );
}

function SizeDropdown({item, sizeId, changeCartItem}) {
    const [dropdownState, toggleDropdown] = useState(false);
    const toggleDropdownClick = (e) => { toggleDropdown(!dropdownState);};
    sizeId = sizeId === 1 ? item.sizetable[0].id : sizeId 

    return (
    <div className={'dropdown '+(dropdownState === true ? 'active' : '')} onClick={toggleDropdownClick}>
        <ul>
            {item.sizetable.map(({id, size}) => <li key={id} className={(id === sizeId ? 'active' : '')} onClick={()=> changeCartItem({id: item.id, sizeId: id})}><span>{size}</span></li>) }
        </ul>
    </div>
    )
}

const CartItem = ({item, count, sizeId, changeCartItem}) => (
    <div className="item" key={item.id}>
        <div className="photo">
            <Img fixed={item.images[0].localFile.childImageSharp.fluid} style={{width: 82, height: 82}}/>
        </div>
        <div className="info">
            <div className="top">
                <div className="title">
                    <Link to={nodeToSlug(item)}>{item.name}</Link>
                </div>
            </div>
            <div className="bottom">
                <div className="num">
                    <CountDropdown 
                        item = {item}
                        count = {count}
                        changeCartItem={changeCartItem}
                    />
                </div>
                <div className="size">
                    <span>Размер:</span>
                    <SizeDropdown 
                        item = {item}
                        sizeId = {sizeId}
                        changeCartItem={changeCartItem}
                    />
                </div>
                <div className="price">
                    <div className="single"><span>{item.price}.-</span></div>
                </div>
            </div>
        </div>
        <div className="total">
            <span>{item.price * count}.-</span>
        </div>
    </div>
)

export default CartItem;
