import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from "./../actions";
import LocationList from "./../Components/LocationList/LocationList";



class LocationListContainer extends Component {
    
    onSelectedLocation = city => {
        this.props.setCity(city);
      };

    render() {
        return (
            <LocationList
              cities={this.props.cities}
              onSelectedLocation={this.onSelectedLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity : PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};
const mapDispatchToProps = dispatch => ({
    //action creator mantioene 
    setCity: value => dispatch(setCity(value))
  });
  //Es una funcion que ejecuta dos funciones comoparametros q retorna otra funcion con otro parametro 

export default connect(null, mapDispatchToProps)(LocationListContainer); 