import React, { Component } from 'react';
import Button from './button';
import ExchangeRate from './exchangeRate';
import { fetchExchangeRate } from '../actions/api/privat';

export default class CurrencyButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: []
    };
    this.renderButtons = this.renderButtons.bind(this);
  }

  componentWillMount() {
    fetchExchangeRate()
      .then(res => {
        this.setState({ rates: res.data })
      });
  }

  renderButtons() {
    return this.state.rates.map((curr) => {
      return <Button
        onClick={(event) => alert(event.target.textContent)}
        label={curr.ccy}
        key={curr.ccy}
        secondary={true}
      />
    })
  }

  render() {
    return (
      <div className="currency-section">
        <div className="currency-buttons">
          {this.renderButtons()}
        </div>
        <ExchangeRate rates={this.state.rates}/>
      </div>
    )
  }
}
