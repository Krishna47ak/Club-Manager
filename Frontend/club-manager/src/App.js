import "./App.css";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn.js";
import SignUp from "./screens/Signup.js"
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
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
