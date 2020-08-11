import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cards, CountryPicker, Charts } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import MyNavbar from './components/Navbar/MyNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CoivdNews from './components/CovidNews/CoivdNews'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {

    const data = await fetchData();
    this.setState({ data });

  }

  handleCountryChange = async (country) => {
    console.log("handle change")
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    
    const { data, country } = this.state;
    if ( !data ) {
      return "loading"
  }
    const Home = () => (
      <div className={styles.container}>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Charts data={data} country={country}/> 
      </div>
    )
    return (
      <div>
        <Router>
          <MyNavbar />
          <div className={styles.container}>
            <img className={styles.image} src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2-833x321.jpg" alt="covid'19"/>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/Home" exact component={Home}></Route>
              <Route path="/CovidNews" exact component={CoivdNews}></Route>
            </Switch>  
          </div>
        </Router>
      </div>
    );
  }
}
export default App;