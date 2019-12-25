import React, { Component } from 'react';
import './Receipts.css'

class Receipts extends Component {
    render() {
        console.log(this.props.receipt.person)
        // const paidFor = this.props.receipt.paid
        console.log(this.props)
        // name = this.props.receipt.person
        // console.log(this.props.receipt.order.protein)
        // console.log(this.props.receipt.order.rice)
        // console.log(this.props.receipt.order.sauce)
        // console.log(this.props.receipt.order.drink)
        // console.log(this.props.receipt.order.cost)
        // console.log(this.props.receipt.paid)
        
        // let paidFor = this.props.receipt.filter(facts => facts.cost === false);
        

        return (
            <div className='receipt'>
                <h2>{this.props.receipt.person}</h2>
                <p><span>Main:</span> {this.props.receipt.order.main}</p>
                <p><span>Protein:</span> {this.props.receipt.order.protein}</p>
                <p><span>Rice:</span> {this.props.receipt.order.rice}</p>
                <p><span>Sauce:</span> {this.props.receipt.order.sauce}</p>
                <p><span>Drink:</span> {this.props.receipt.order.drink}</p>
                <p><span>Cost:</span> {this.props.receipt.order.cost}</p>
            </div>
        );
    }
}
export default Receipts;