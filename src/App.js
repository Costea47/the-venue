import React from "react";
import "./resources/styles.css";
import { Link } from "react-scroll";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Link name="featured">
        <Featured />
      </Link>
      <Link name="venuenfo">
        <VenueNfo />
      </Link>
      <Link name="highlights">
        <Highlights />
      </Link>
      <Link name="pricin">
        <Pricing />
      </Link>
      <Link name="location">
        <Location />
      </Link>

      <Footer />
    </div>
  );
};

export default App;
