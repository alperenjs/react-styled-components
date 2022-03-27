import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Navbar></Navbar>
      <Intro></Intro>
      <Features></Features>
    </Container>
  );
}

export default App;
