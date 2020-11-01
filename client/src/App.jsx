import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePost from "./posts/pages/create-post/Page";
import PostList from "./posts/pages/list-post/Page.jsx";
import CreateComment from "./posts/pages/comments/create-comment/Page";

import styled from "styled-components";

const MainLayout = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 9fr;
  gap: 0px 0px;
  height: 100vh;
  width: 100vw;
`;
const NavMenu = styled.nav`
  background-color: #ccc;
`;
const ListMenu = styled.ul`
  margin: 0;
  padding: 0.5em;
  & > li:not(:last-child) {
    margin-bottom: 1em;
  }

  & > li {
    background-color: #505050;
    list-style: none;
    color: #fff;
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
            <Route exact path="/" />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/create" component={CreatePost} />
            <Route exact path="/posts/:id/comments" component={CreateComment} />
          </Switch>
        </BrowserRouter>
      </MainLayout>
    </>
  );
};
export default App;
