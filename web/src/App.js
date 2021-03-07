import Layout from "./pages/Layout.js";
import { BrowserRouter} from "react-router-dom";
import Routes from "./routes.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
