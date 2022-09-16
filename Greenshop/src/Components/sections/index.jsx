import React, { Component } from "react";
import Products from "../../Mock/data";
import './style.css'
import trashicon from '../../Assets/img/trash.png'

class ShopSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let quantity = 0
        let pr = this.props
        return (
            <div className="ShopCard">
                <div className="name">
                    <div className="img">
                        <img src={this.props.img} alt="" />
                    </div>
                    <div className="title">
                        <p className='tit'>{pr.title}</p>
                        <p className="SKU"> <span>SKU:</span> {pr.SKU}</p>
                    </div>
                </div>
                <p className="price">
                    {pr.price} $
                </p>
                <p className="quantity">
                    {quantity}
                </p>
                <p className="total">
                    {pr.price * quantity}
                </p>
                <button className='trash'>
                <img src={trashicon} alt="" />
                </button>
            </div>
        )
    }
}

export default ShopSection;