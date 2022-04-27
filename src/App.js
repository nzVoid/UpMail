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
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/inbox" element={<Inbox/>}/>
              <Route path="/mail" element={<Mail></Mail>}></Route>
          </Routes>
      </BrowserRouter>
);
}

export default App;
