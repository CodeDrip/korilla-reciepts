import React, { Component } from 'react';
import './App.css';
import Receipts from './Receipts'

let receipts = [

{
  person: 'Karolin',
  order: {
    main: 'Burrito',
    protein: 'Organic Tofu',
    rice: 'Purple Rice',
    sauce: 'Green Crack',
    toppings: [
      'Baby Bok Choy', 'Cucumber Kimchi'
    ],
    drink: 'Korchata',
    cost: 22
  },
  paid: false
},
{
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
},
{
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: false
}
];

//make a receipts arr = rec1, 2, + 3
// const receipts = [receipt1, receipt2, receipt3]
// console.log(receipts)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {receipts}
  }
  render() {

    let paidFor = this.state.receipts.filter(function (facts) {
      return facts.paid !== true
    });
    console.log(paidFor)


    return (
      <div>
      <h1 className="truck-name">Korilla Receipts</h1>
      <div className="container">
        <Receipts receipt={this.state.receipts[0]} />
        <Receipts receipt={this.state.receipts[1]} />
        <Receipts receipt={this.state.receipts[2]} />
      </div>
      </div>
    )
  }
}
export default App;


    // console.log(this.state)
    // console.log(this.state.receipt1)
    // console.log(this.state.receipt1.paid)
    // console.log(receipts)
    // console.log(this.state.receipts[0])
    // console.log(this.state.receipts)
    // console.log(receipts)
    // console.log(receipts)
    // console.log(receipts)
    // console.log(receipts)