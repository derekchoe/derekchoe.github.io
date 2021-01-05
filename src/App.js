import { Route } from "react-router-dom";

// Emotion Theme
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

// Components
import PageLayout from "./components/page-layout";

// Pages
import About from "./containers/about";
import Work from "./containers/work";
import Projects from "./containers/projects";

// Routing
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageLayout>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route>404 Page</Route>
          </Switch>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
