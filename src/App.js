import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import country from "./Components/CountryOptions";
import Footer from "./Components/Footer";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // };

  const [progress, setProgress] = useState(0);

  const [selectedCountry, setSelectedCountry] = useState("India");

  return (
    <div>
      <Router>
        <Navbar
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <LoadingBar height={5} color="#f11946" progress={progress} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={12}
                country={country[selectedCountry]}
                category={"general"}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={12}
                country={country[selectedCountry]}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={12}
                country={country[selectedCountry]}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={12}
                country={country[selectedCountry]}
                category={"health"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={12}
                country={country[selectedCountry]}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={12}
                country={country[selectedCountry]}
                category={"sports"}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={12}
                country={country[selectedCountry]}
                category={"technology"}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
