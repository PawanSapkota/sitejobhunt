import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout";
import Home from "./components/pages/Home";
import Form from "./components/pagecomponents/form/Form";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
