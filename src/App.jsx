import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./utilty/context/AuthContext";
import AuthRouter from "./routes/AuthRouter";

const App = () => {
  return (
    <Router>

    <AuthProvider>
        <AuthRouter />
    </AuthProvider>
    </Router>

  );
};

export default App;
