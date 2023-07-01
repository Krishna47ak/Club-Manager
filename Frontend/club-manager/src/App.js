import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./screens/Home";
import Seacrh from './screens/Search'
import SignIn from "./screens/SignIn.js";
import SignUp from "./screens/Signup.js";
import Studentprofile from './screens/Studentprofile';
import ClubProfile from './screens/Clubprofile'
import Footer from "./components/Footer/footer.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchUser } from "./store/actions/auth";

function App() {
  useEffect(() => {
    store.dispatch(fetchUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Seacrh />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/profile" element={<Studentprofile/>} />
          <Route exact path="/clubprofile" element={<ClubProfile/>} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
