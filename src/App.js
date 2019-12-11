import React, { Component } from 'react';
import './App.css';
import Receipts from './Receipts'
const receipt1 =
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
}
const receipt2 = {
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
}
const receipt3 = {
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

//make a receipts arr = rec1, 2, + 3
// const receipts = [receipt1, receipt2, receipt3]
// console.log(receipts)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt1: receipt1,
      receipt2: receipt2,
      receipt3: receipt3
    }
  }
  render() {
    // console.log(this.state)
    // console.log(this.state.receipt1)
    console.log(this.state.receipt1.paid)

    return (
      <div>
      <h1 className="truck-name">Korilla Receipts</h1>
      <div className="container">
        <Receipts receipt={this.state.receipt1} />
        <Receipts receipt={this.state.receipt2} />
        <Receipts receipt={this.state.receipt3} />
      </div>
      </div>
    )
  }
}
export default App;