import { Container } from "react-bootstrap";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
