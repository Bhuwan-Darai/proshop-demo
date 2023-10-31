import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Headers from "./components/Headers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
