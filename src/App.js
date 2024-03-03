import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

const App = (props) => {
  return (

    <div className='app-wrapper'>
    <HeaderContainer />
      <Navbar store={props.store} />
      <div className='app-wrapper-content'>
        <Routes>
        <Route path = '/profile/:userId?' element ={<ProfileContainer />} />
          <Route path="/dialogs" element={
            <DialogsContainer />}
          />
          <Route path="/users" element={
            <UsersContainer />}
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
