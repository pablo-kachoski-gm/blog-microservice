import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "./posts/pages/posts/Page";
import WelcomePage from "./posts/pages/welcome/Page.jsx";
import styled from "styled-components";
import { PAGE_BACKGROUND } from "./posts/constants/colors";
import { useState } from "react";
import LoadingScreen from "commons/components/loading/LoadingScreen";
import PostDetail from "posts/pages/posts/details/Page";
import { NavMenu } from "commons/components/nav-menu/StyledComponents";
import { ListMenu } from "commons/components/nav-menu/StyledComponents";
import { ListMenuItem } from "commons/components/nav-menu/StyledComponents";

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
  display: flex;
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const props = { loading, setLoading };
  return (
    <MainLayout>
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
            <Route exact path="/" render={() => <WelcomePage {...props} />} />
            <Route exact path="/posts" render={() => <PostPage {...props} />} />
            <Route
              exact
              path="/posts/:postId"
              render={() => <PostDetail {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </Content>
    </MainLayout>
  );
};
export default App;
