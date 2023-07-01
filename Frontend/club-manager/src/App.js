import "./App.css";

import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/footer.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
