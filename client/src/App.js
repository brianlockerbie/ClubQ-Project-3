import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ForgetPasswordPage from "./components/ForgetPasswordPage";
import LandingPage from "./components/LandingPage";
import LogInPage from "./components/LogIn";
import QuePage from "./components/QuePage";
import RegisterPage from "./components/RegisterPage";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AdminPage from "./components/AdminPage";
import EditQueue from "./components/EditQueue";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/QuePage" element={<QuePage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
        <Route path="/EditQueue" element={<EditQueue />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </div>
    </Router> 
    <Footer />
    </ApolloProvider>
  );
}

export default App;
