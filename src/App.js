import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainWindow from "./components/MainWindow/MainWindow";
import Inbox from "./pages/Inbox";
import MailOpen from "./UI/FullMail/MailOpen";
import LoginForm from "./components/Login/LoginForm";

function App(){
  return(
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
              <Route path="/mail" element={<MailOpen/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
