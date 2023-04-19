import { Header } from "./Header";
import { Content } from "./Content";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Login />
      <Content />
      <Footer />
    </div>
  );
};

export default App;