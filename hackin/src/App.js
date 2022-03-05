import Home from './views/Home'
import SignUp from './views/SignUp'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Platform from './views/Platform';

function App() {
  
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>
    </Router>
  );
}

export default App;
