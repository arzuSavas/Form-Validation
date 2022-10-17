import { useState } from 'react';
import './App.css';
import { MdLocationOn,MdEmail,MdCall } from 'react-icons/md';
import FirstPage from './component/FirstPage';
import SecondPage from'./component/SecondPage';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
function App() {
  const [data, setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    message:''
  }) 
  console.log("data",data)
  return (
    <div className='contact row'>
      <div className='contact-information header-text col-lg-6 col-md-12  col-sm-12'>Bize Ulaşın
      <div className='icons'>
        <ul >
          <li className='icon'>
            <span><MdLocationOn /></span>
            <div className='icon-text'>
              <p>Officeal Address
                 504 White St . Dawsonville, GA 30534 , New York</p>
            </div>
          </li>
          <li className='icon'>
            <span>
              <MdEmail/>
            </span>
            <div className='icon-text'><p>support@gmail.com</p></div>
          </li>
          <li className='icon'>
            <span>
              <MdCall/>
            </span>
            <div className='icon-text'><p>+87986451666</p></div>
          </li>
        </ul>
      </div>
      </div> 
    <div className="App col-lg-6 col-md-12 col-sm-12 ">
      <div className='header-text'>
      <p>Mesaj Gönder</p></div>
      <div className='wizard'>
       <BrowserRouter>
         <Routes>
               <Route index exact path="/" element={<FirstPage  data={data} setData={setData} />}/> 
               <Route exact path="/SecondPage" element={<SecondPage data ={data} setData={setData} />}/>
         </Routes>
       </BrowserRouter>
      </div>
    </div>
    </div>
  );
}export default App;