import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage";
import InvestmentFormPage from "./pages/InvestmentFormPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<CustomerPage />} />
          <Route path="/investment" element={<InvestmentFormPage />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
