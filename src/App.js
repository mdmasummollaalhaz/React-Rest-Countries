import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Country/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

// *********** Component ***********
/* function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return(
    <div>
      <h1>Visiting everty countries of the world!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        // countries.map(country=> console.log(country))
        // countries.map(country => <p>{country.name.common}</p>)
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)

      }
    </div>
  )
};

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
    </div>
  )
} */
export default App;
