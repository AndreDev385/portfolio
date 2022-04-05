import type { NextPage } from "next";

import styled from "styled-components";

import Layout from "../components/layout";
import Intro from "../components/sections/intro";

const StyledMainContainer = styled.main`
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const Home: NextPage = () => {
  return (
    <div style={{ outline: "none" }} tabIndex={-1}>
      <div id="root">
        <Layout>
          <StyledMainContainer>
            <Intro />
          </StyledMainContainer>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
