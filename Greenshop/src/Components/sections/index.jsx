import React, { Component } from "react";
import Products from "../../Mock/data";
import './style.css'
import trashicon from '../../Assets/img/trash.png'

class ShopSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        };
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }
    plus() {
        this.setState({ counter: this.state.counter+1})
    }
    minus() {
        this.setState({ counter: this.state.counter > 0? this.state.counter - 1 : this.state.counter })
    }
    delete(){
        
    }
    render() {
        console.log(this.desc);
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
                    <button onClick={this.plus}>+</button>
                    {this.state.counter}
                    <button onClick={this.minus}>-</button>
                </p>
                <p className="total">
                    {pr.price * this.state.counter}$
                </p>
                <button className='trash'>
                    <img src={trashicon} alt="" />
                </button>
            </div>
        )
    }
}

export default ShopSection;