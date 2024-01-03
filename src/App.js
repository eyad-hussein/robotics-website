import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./routes/header/header.component";
import Home from "./routes/home/home.component";
import Workshops from "./routes/workshops/workshops.component";
import Handouts from "./routes/handouts/handouts.component";
import Mekatro from "./routes/mekatro/makatro.component";
import Record from "./routes/record/record.component";
import Projects from "./routes/projects/projects.component";
import About from "./routes/about/about.component";
import Competitions from "./routes/competitions/competitions.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/workshops' element={<Workshops />} />
          <Route
            path='/workshops/workshop_handouts/:number'
            element={<Handouts />}
          />
          <Route path='/mekatro' element={<Mekatro />} />
          <Route path='/mekatro/record/:number' element={<Record />} />
          <Route path='/competitions' element={<Competitions />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
