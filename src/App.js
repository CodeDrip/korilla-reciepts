import React, { Component } from 'react';
import './App.css';




const receipt1 = {
  person: "Karolin",
  order: {
    main: "Burrito",
    protein: "Organic Tofu",
    rice: "Purple Rice",
    sauce: "Green Crack",
    toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
    drink: "Korchata",
    cost: 22
  },
  paid: false
};
const receipt2 = {
  person: "Jerrica",
  order: {
    main: "Rice Bowl",
    protein: "Ginger Soy Chix",
    rice: "Sticky Rice",
    sauce: "Korilla",
    toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
    drink: "Korchata",
    cost: 19
  },
  paid: false
};
const receipt3 = {
  person: "Matt",
  order: {
    main: "Salad Bowl",
    protein: "Organic Tofu",
    rice: "none",
    sauce: "K'lla",
    toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
    drink: "Sparkling Blood Orange Soda",
    cost: 20
  },
  paid: false
};

const receipts = [receipt1, receipt2, receipt3]


console.log(receipts[0])
console.log(receipts[0].person)
// console.log(receipts[0].order)
console.log(receipts[0].order.main)
console.log(receipts[0].order.protein)
console.log(receipts[0].order.rice)
console.log(receipts[0].order.sauce)
console.log(receipts[0].order.drink)
console.log(receipts[0].order.cost)



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt1:receipt1, 
      receipt2:receipt2,
      receipt3:receipt3 
    }
  }
  render () {
    return (
      <div>
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
      </div>
      <main>
        <div>
          <h2>{receipts[0].person}</h2>
          <p>Main: {receipts[0].order.main}</p>
          <p>Protein: {receipts[0].order.protein}</p>
          <p>Rice: {receipts[0].order.rice}</p>
          <p>Sauce: {receipts[0].order.sauce}</p>
          <p>Drink: {receipts[0].order.drink}</p>
          <p>Cost: {receipts[0].order.cost}</p>
        </div>
      </main>
      </div>
    )
  }
}

export default App;
