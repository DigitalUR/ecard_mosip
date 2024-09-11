import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './scenes/auth';
import Navbar from './scenes/navbar';
import StudentCard from './scenes/studentCard';
// import { useParams } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Routes>
      {/* <Route path='navbar' component={<Navbar/>}/> */}
      <Route path="/" element={<HelloWorld/>}/>
      <Route path="/one" element={<One/>}/>
      <Route path="/studentPortal/:data" element={<StudentCard/>}/>
    </Routes>
    {/* <Login/> */}
    </>
  );
}

export default App;

const HelloWorld = ()=>{
  return (  <>
    Hello world ...
  </>)
}
const One = ()=>{
  return (  <>
    number one
  </>)
}