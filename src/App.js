import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LocationSet from "./Pages/locationSetPage/locationSetPage.page"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentLocationselector } from './redux/location/location.selector';
import WeatherPage from './Pages/weatherPage/waether.page';

function App({ location }) {




  return (

    <div style={{
      backgroundImage: "linear-gradient(126deg, #b6dac9 0%, #8bdbb6 58%, #69e7ac 85%)",
      overflow: "hidden",
      height: "100vh",
      width: "100vw"
    }}>
      <Switch>
        <Route exact path="/" component={LocationSet} ></Route>
        <Route exact path="/weather" render={() => location ? <WeatherPage></WeatherPage> : <Redirect to="/"></Redirect>}></Route>
        <Route path="/weather/r" render={() => <p>hello</p>}></Route>
      </Switch>
    </div >
  );
}


const mapStateToProps = createStructuredSelector({
  location: currentLocationselector
})
export default connect(mapStateToProps)(App)