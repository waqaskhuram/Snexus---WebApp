import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import THEMES from "./constants/theme";
import { getTheme } from "./getTheme";
//pages imports
import Home from "./pages/Home";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Methodology from "./pages/Methodology";
import CaseStudies from "./pages/CaseStudies";
import GetInTouch from "./pages/GetInTouch";
import Career from './pages/Career';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(props) {
  const [themeName, setThemeName] = useState(THEMES.BASIC);
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Container>
        <BrowserRouter>
          <Navbar
            themeName={themeName}
            themeSelectorClicked={(changeCurrentTheme) =>
              changeCurrentTheme !== "dark"
                ? setThemeName(THEMES.DARK)
                : setThemeName(THEMES.LIGHT)
            }
          />

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home themeName={themeName} />}
            />
            <Route exact path="/company" component={() => <Company themeName={themeName} />} />
            <Route exact path="/technologies" component={() => <Services themeName={themeName} />} />
            <Route exact path="/methodology" component={() => <Methodology themeName={themeName} />} />
            <Route exact path="/caseStudies" component={() => <CaseStudies themeName={themeName} />} />
            <Route exact path="/getInTouch" component={() => <GetInTouch themeName={themeName} />} />
            <Route exact path="/careers" component={() => <Career themeName={themeName} />} />
            <Redirect to="/" />
          </Switch>
          <Footer themeName={themeName} />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  color: ${(props) => props.theme.color};
`;

export default App;
