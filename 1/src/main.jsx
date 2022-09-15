import React, { Component } from "react";

class Main extends Component{
    render (){
        return (
            <div>
                <h4>
                    {this.props.firstname}  
                    {this.props.job}  
                </h4>
            </div>
        )
    }
}

export default Main