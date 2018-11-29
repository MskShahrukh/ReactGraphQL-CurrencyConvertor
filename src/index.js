import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag';
// import { ApolloProvider } from 'react-apollo';

// // state = {};
// var abc;

// const client = new ApolloClient({
//   uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
// });

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
//   .then(result => {
//     console.log(result);
//     abc = result;
//   });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
