import { Route } from "react-router-dom";

// Emotion Theme
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

// Components
import PageLayout from "./components/page-layout";

// Pages
import About from "./containers/about";
import Construction from "./containers/construction";

// Routing
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageLayout>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route>
              <Construction />
            </Route>
          </Switch>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
