import React, { Component } from 'react';
import styles from './index.module.scss';

class App extends Component {
  state = { data: [], flag: true };

  componentDidMount () {
    const url = 'https://restcountries.eu/rest/v2/all';
    try {
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ data });
        });
    } catch (err) {
      return null;
    }
  }

  // methods = () => {
  //   const { data, flag } = this.state;
  //   if (flag) {
  //     this.setState({
  //       data: data.sort((a, b) => {
  //         a - b;
  //       }),
  //     });
  //     return;
  //   } else {
  //     this.setState({
  //       data: data.sort((a, b) => {
  //         b - a;
  //       }),
  //     });
  //     return;
  //   }
  //   this.setState({ flag: !flag });
  // };

  sort = () => {
    let { data, flag } = this.state;
    // const qwert = (a, b) => {
    //   if (a.population < b.population) {
    //     return a.population - b.population;
    //   }
    //   return b.population - a.population;
    // };
    // // data.sort(qwert);
    // const predicates = {
    //   asc: function (a, b) {
    //     return (a > b) - (b > a);
    //   },
    //   desc: function (a, b) {
    //     return (a < b) - (b < a);
    //   },

    // let flag = false;

    // data.sort(predicates[flag ? 'asc' : 'desc']);

    this.setState({ flag: !flag });
  };

  filter = () => {
    let { data } = this.state;

    // const filterCountry = ({ value }) => {
    //   return value.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    // };

    this.setState({ data });
  };

  render () {
    return (
      <>
        <input />
        <table className={styles.container}>
          <thead>
            <tr>
              <th className={styles.colTh}>Country</th>
              <th className={styles.colTh}>Capital</th>
              <th className={styles.colTh} onClick={this.methods}>
                Population
              </th>
              <th className={styles.colTh}>Phone code</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((country, index) => {
              return (
                <tr key={index}>
                  <td className={styles.colTb}>{country.name}</td>
                  <td className={styles.colTb}>{country.capital}</td>
                  <td className={styles.colTb}>{country.population}</td>
                  <td className={styles.colTb}>{country.callingCodes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
