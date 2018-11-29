import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

var mainCurrency = 'USD';
// var responseFromApi;

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "PKR") {
//           currency
//           rate
//           name
//         }
//       }
//     `
//   })
//   .then(result => {this.state.value
//     responseFromApi = result.data.rates;
//     console.log(responseFromApi);
//   });

const ExchangeRates = props => (
  <Query
    query={gql`
      {
        rates(currency: "${props.msg}") {
          currency
          rate
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div>
            <p>Loading...</p>
          </div>
        );
      if (error) return <p>Error :(</p>;

      if (data.rates) {
        console.log(data);
        return data.rates.map(({ currency, rate, name }) => (
          <div key={currency}>
            {currency !== props.msg && (
              <div>
                <p>
                  <b>{`${name}`}</b>
                </p>
                <p>{`${currency}: ${rate}`}</p>
                <br />
              </div>
            )}
          </div>
        ));
      }

      return <div>Currency not Found !</div>;
    }}
  </Query>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'USD', value2: 'USD' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value2: this.state.value });
    mainCurrency = this.state.value;
    event.preventDefault();
    // this.ExchangeRates(mainCurrency);
    // alert('Get Rates For: ' + this.state.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ApolloProvider client={client}>
            <div>
              <h2>
                currency convertor - <b>{this.state.value}</b>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <button type="submit"> Get Rates </button>
                </form>
                <span role="img" className="logo-app">
                  🚀
                </span>
              </h2>
              <hr />
              <ExchangeRates msg={this.state.value2} />
            </div>
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;
