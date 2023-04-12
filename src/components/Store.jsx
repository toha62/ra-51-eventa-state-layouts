import React from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {icon: 'view_list'};
    console.log(this.state.selected);
    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
  }

  render() {   
    console.log(this.state.icon); 
    return (
      <div className="container">
        <IconSwitch
          icon={this.state.icon}
          onSwitch={() => this.state.icon === 'view_list' ?
            this.setState({icon: 'view_module'}) : this.setState({icon: 'view_list'})
          }
        />
        {this.state.icon === 'view_module' ?
          <CardsView cards={this.products} /> : <ListView items={this.products} />}        
      </div>
    );
  }
}