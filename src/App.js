import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainWindow from "./components/MainWindow/MainWindow";
import LoginForm from "./components/Login/LoginForm";
import Inbox from "./pages/Inbox";
import Mail from "./pages/Mail";


function App() {

  return (
      <BrowserRouter>
          <MainWindow/>
          <Routes>
              <Route path="/" element={<MainWindow/>}/>
          </Routes>
          <Routes>
              <Route path="/login" element={<LoginForm/>}/>
          </Routes>
          <Routes>
              <Route path="/inbox" element={<Inbox/>}/>
          </Routes>
          <Routes>
              <Route path="/mail" element={<MainWindow/>}></Route>
          </Routes>
      </BrowserRouter>
);
}

export default App;
