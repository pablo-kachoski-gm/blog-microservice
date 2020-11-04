import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "./posts/pages/posts/Page";
import WelcomePage from "./posts/pages/welcome/Page.jsx";
import CreateComment from "./posts/pages/comments/create-comment/Page";

import styled from "styled-components";
import {
  LIGHT_FONT,
  NAV_BACKGROUND,
  NAV_LI_BACKGROUND,
  PAGE_BACKGROUND,
} from "./posts/constants/colors";
import { useState } from "react";
import { LoadingContext } from "commons/context/loadingContext";
import LoadingScreen from "commons/components/loading/LoadingScreen";

const MainLayout = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 15fr 85fr;
  gap: 0px 0px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${PAGE_BACKGROUND};
  padding: 2em;
  min-height: 100vh;
  width: 100%;
`;
const NavMenu = styled.nav`
  background-color: ${NAV_BACKGROUND};
  padding: 0 0.5em;
`;
const ListMenu = styled.ul`
  margin: 3em 0 0 0;
  padding: 0.5em;
  & > li:not(:last-child) {
    margin-bottom: 1em;
  }

  & > li {
    background-color: ${NAV_LI_BACKGROUND};
    list-style: none;
    color: ${LIGHT_FONT};
    text-transform: uppercase;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
      background-color: rgba(63, 63, 63, 0.5);
    }
    & > a {
      display: block;
      padding: 1em 2em;
    }
  }
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <MainLayout>
        <LoadingContext.Provider value={setLoading}>
          <NavMenu>
            <ListMenu>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/posts">Posts</a>
              </li>
            </ListMenu>
          </NavMenu>
          {loading && <LoadingScreen />}
          <Content>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/posts" component={PostPage} />
                <Route
                  exact
                  path="/posts/:id/comments"
                  component={CreateComment}
                />
              </Switch>
            </BrowserRouter>
          </Content>
        </LoadingContext.Provider>
      </MainLayout>
    </>
  );
};
export default App;
