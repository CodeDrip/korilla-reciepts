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
  paid: true
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
  paid: true
}
];

//make a receipts arr = rec1, 2, + 3
// const receipts = [receipt1, receipt2, receipt3]
// console.log(receipts)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {receipts: receipts,
      search: ''}
    
      this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange(e) {
    // destructure values from objects
    // equivalent to doing this:
    // let value = e.target.value
    let { value } = e.target
    let { receipts } = this.state

  
      // loop over all receipts in state
      receipts.forEach((receipt, index) => {
        // covert to lowercase
        let person = receipt.person.toLowerCase()
        // if person contains any part of typed string
        if (person.includes(value)) {
          // update state of current receipt to show it
          this.setState((currentState) => {
            currentState.receipts[index].paid = true
          })
        }
        else {
          // otherwise hide it
          this.setState((currentState) => {
            currentState.receipts[index].paid = false
          })
        }
      })
      // update search form state
      this.setState({ search: value })  
    }





  render() {

    let paidFor = this.state.receipts.filter(function (facts) {
      return facts.paid !== true
    });
    console.log(paidFor)


    return (
      <div>
      <h1 className="truck-name">Korilla Receipts</h1>
      <nav>
      <input
          type="text"
          placeholder="search for a person"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </nav>
      <div className="container">
      {this.state.receipts.map((receipt, index) => receipt.paid ? <Receipts key={index} receipt={receipt} /> : '')}
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