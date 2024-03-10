import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Header from "./routes/header/header.component";
import Home from "./routes/home/home.component";
import Workshops from "./routes/workshops/workshops.component";
import Handouts from "./routes/handouts/handouts.component";
import Mekatro from "./routes/mekatro/makatro.component";
import Record from "./routes/record/record.component";
import Projects from "./routes/projects/projects.component";
import About from "./routes/about/about.component";
import Competitions from "./routes/competitions/competitions.component";
import SignUp from "./routes/auth/signup/signup.component";
import Login from "./routes/auth/login/login.component";
import store from "./store/configure_store";
import TestComponent from "./test/test";

// require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it is working

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Header />}> */}
          <Route path='/' element={<Home />} />
          {/* <Route path='/workshops' element={<Workshops />} />
            <Route
              path='/workshops/workshop_handouts/:id'
              element={<Handouts />}
            />
            <Route path='/mekatro' element={<Mekatro />} />
            <Route path='/mekatro/record/:id' element={<Record />} />
            <Route path='/competitions' element={<Competitions />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<Login />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

// function App() {
//   return (
//     <ReduxProvider store={store}>
//       <TestComponent></TestComponent>;
//     </ReduxProvider>
//   );
// }

export default App;
