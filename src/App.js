import React, { Component } from "react";
import { Grid, Col, Row } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LocationListContainer from "./conteiners/LocationListContainer";
import ForecastExtended from "./Components/ForecastExtended/ForecastExtended";
import "./styles.css";


const cities = [
  "Buenos aires, ar",
  "Caracas, ve",
  "Bogota, co",
  "Santiago, cl",
  "Washington",
  "Barcelona"
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="static" color="default" title="hola mundo">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Title
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer
              cities={cities}
            />
          </Col>
          <Col xs={12} md={6}>  
            <ForecastExtended city={city} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;