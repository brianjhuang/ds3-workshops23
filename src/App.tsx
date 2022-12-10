import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import { Sidebar } from "./components/Sidebar";
import Members from "./components/Members";
import Calendar from "./components/Calendar";
import isMobile from "./CheckMobile";

function App() {
  if (isMobile()) {
    return (
      <BrowserRouter>
        <div className="App" id="outer-container">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <div id="page-wrap">
            <div className="parent-div">
              <div className="float-container">
                <Routes>
                  <Route
                    path="ds3-workshops23/"
                    element={
                      <div className="float-child-right">
                        <Home />
                      </div>
                    }
                  ></Route>
                  <Route
                    path="ds3-workshops23/calendar"
                    element={
                      <div className="float-child-right">
                        <Calendar />
                      </div>
                    }
                  ></Route>
                  <Route
                    path="ds3-workshops23/members"
                    element={
                      <div className="float-child-right">
                        <Members />
                      </div>
                    }
                  ></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="App" id="outer-container">
          <div id="page-wrap">
            <div className="parent-div">
              <div className="float-container">
                <NavMenu></NavMenu>
                <Routes>
                  <Route
                    path="ds3-workshops23/"
                    element={
                      <div className="float-child-right">
                        <Home />
                      </div>
                    }
                  ></Route>
                  <Route
                    path="ds3-workshops23/calendar"
                    element={
                      <div className="float-child-right">
                        <Calendar />
                      </div>
                    }
                  ></Route>
                  <Route
                    path="ds3-workshops23/members"
                    element={
                      <div className="float-child-right">
                        <Members />
                      </div>
                    }
                  ></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
