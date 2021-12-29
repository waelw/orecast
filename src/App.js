import { Route } from 'react-router-dom';
import LocationSet from "./Pages/locationSetPage/locationSetPage.page"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentLocationselector } from './redux/location/location.selector';
import WeatherPage from './Pages/weatherPage/waether.page';
import { Navigate, Routes } from 'react-router';
import './App.css';

function App({ location }) {




  return (

    <div style={{
      backgroundImage: "linear-gradient(126deg, #b6dac9 0%, #8bdbb6 58%, #69e7ac 85%)",
      overflow: "hidden",
      height: "100vh",
      width: "100vw"
    }}>
      <Routes>
        <Route exact path="/" element={<LocationSet></LocationSet>} ></Route>
        <Route exact path="/weather" element={location ? <WeatherPage></WeatherPage> : <Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div >
  );
}


const mapStateToProps = createStructuredSelector({
  location: currentLocationselector
})
export default connect(mapStateToProps)(App)