import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

const App = (props) => {
  debugger;
  return (
  
    <div className='app-wrapper'>
      <Header />
      <Navbar store={props.store} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile" element={
            <Profile  />}
          />
          <Route path="/dialogs" element={
            <DialogsContainer  />}
          />
          <Route path="/news" element={
            <News />}
          />
          <Route path="/music" element={
            <Music />}
          />
          <Route path="/settings" element={
            <Settings />}
          />
        </Routes>

      </div>
    </div>

  );
}
export default App;
