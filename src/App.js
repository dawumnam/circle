import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Photos from "./components/Photos/Photos";
import Footer from "./components/Footer/Footer";
import "./style.css";

export default function App() {
  const [Listings, setListings] = useState([
    {
      id: "1",
      url: "https://i.imgur.com/si0Vcyu.jpg",
      title: "Lorem, ipsum",
      date: new Date(Date.now()),
      category: "category",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab cumque labore ipsam ut obcaecati, ea deleniti nulla, voluptatum nihil omnis odit mollitia quae deserunt quibusdam vel minima! Blanditiis, rerum!",
      blog: "",
    },
    {
      id: "2",
      url: "https://i.imgur.com/El8EkHf.jpg",
      title: "Lorem, ipsum",
      date: new Date(Date.now()),
      category: "category",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab cumque labore ipsam ut obcaecati, ea deleniti nulla, voluptatum nihil omnis odit mollitia quae deserunt quibusdam vel minima! Blanditiis, rerum!",
      blog: "",
    },
    {
      id: "3",
      url: "https://i.imgur.com/s7dNc7d.jpg",
      title: "Lorem, ipsum",
      date: new Date(Date.now()),
      category: "category",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab cumque labore ipsam ut obcaecati, ea deleniti nulla, voluptatum nihil omnis odit mollitia quae deserunt quibusdam vel minima! Blanditiis, rerum!",
      blog: "",
    },
    {
      id: "4",
      url: "https://i.imgur.com/aScNi4u.jpg",
      title: "Lorem, ipsum",
      date: new Date(Date.now()),
      category: "category",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab cumque labore ipsam ut obcaecati, ea deleniti nulla, voluptatum nihil omnis odit mollitia quae deserunt quibusdam vel minima! Blanditiis, rerum!",
      blog: "",
    },
  ]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          path="/photos"
          render={(props) => <Photos {...props} Listings={Listings} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
function NotFound() {
  return <div>You are in the wrong place!</div>;
}
