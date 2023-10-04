import { Container } from "react-bootstrap";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
