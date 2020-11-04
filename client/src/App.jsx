import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "./posts/pages/posts/Page";
import WelcomePage from "./posts/pages/welcome/Page.jsx";
import CreateComment from "./posts/pages/comments/create-comment/Page";

import styled from "styled-components";
import { PAGE_BACKGROUND } from "./posts/constants/colors";
import { NAV_BACKGROUND, NAV_LI_BACKGROUND } from "commons/constants/colors";
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
`;

const ListMenuItem = styled.li`
  background-color: ${NAV_LI_BACKGROUND};

  margin: 20px auto;
  border: none;
  font-size: 22px;
  position: relative;
  color: white;

  &:before {
    transition: all 0.35s cubic-bezier(0.68, 0, 0.265, 1);
    content: "";
    width: 10%;
    height: 100%;
    background: #6d6d6d;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
  }

  & > a {
    color: white;
    mix-blend-mode: luminosity;
    display: flex;
    padding: 10px 44px;
  }
  &:hover {
    &::before {
      background: #6d6d6d;
      width: 100%;
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
              <ListMenuItem>
                <a href="/">Inicio</a>
              </ListMenuItem>
              <ListMenuItem>
                <a href="/posts">Posts</a>
              </ListMenuItem>
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
