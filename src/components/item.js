import {Link} from "gatsby";
import React from "react";
import Img from "gatsby-image"

import "./item.scss"
import {Carousel} from "./carousel";
import nodeToSlug from "../utils/url-slug";

const Item = ({item, addToCart}) => (
    <Link to={nodeToSlug(item)}
          state={{
              modal: true
          }} key={item.id} className='itemBlock'>
            <Carousel small images={item.images}/>
            <div className="itemData">
                <p className='itemName'>
                {item.name}
                </p>
                <p className='itemPrice'>{item.price}.-</p>
                <button onClick={(ev) => {
                    addToCart(item.id, 1) // TODO: Size selector
                    ev.preventDefault()
                }} className='itemCart'/>
            </div>
    </Link>
)

export default Item;
