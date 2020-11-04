import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "./posts/pages/posts/Page";
import WelcomePage from "./posts/pages/welcome/Page.jsx";
import CreateComment from "./posts/pages/comments/create-comment/Page";

import styled from "styled-components";
import {
  LIGHT_FONT,
  NAV_BACKGROUND,
  NAV_LI_BACKGROUND,
} from "./posts/constants/colors";

const MainLayout = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 15fr 85fr;
  gap: 0px 0px;
  min-height: 100vh;
  width: 100vw;
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
  return (
    <>
      <MainLayout>
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/posts" component={PostPage} />
            <Route exact path="/posts/:id/comments" component={CreateComment} />
          </Switch>
        </BrowserRouter>
      </MainLayout>
    </>
  );
};
export default App;
