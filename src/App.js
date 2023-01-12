import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import './Mobile.css'
import Container from "react-bootstrap/Container";
import Jsondata from "./Jsondata";
function App() {
  return <Container fluid>
<Jsondata />
  </Container>;
}

export default App;
