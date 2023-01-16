import logo from './logo.svg';
import './App.css';

//components 
import NavBar from './components/NavBar';
import Allusers from './components/Allusers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/all" element={<Allusers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
   </BrowserRouter>
 );
}

export default App;
 