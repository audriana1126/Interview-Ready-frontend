import { Routes, Route } from "react-router-dom"
// import Chat from "../pages/Chat"
// import Career from "../pages/Career"
import Home from "../pages/Home"
// import LoginForm from "../pages/LoginForm"
import Profile from "../pages/Profile"
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"
import Update from "../pages/Update"
import React from 'react';



function Main() {


  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (<main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/user/:id" element={<Update />} />
      
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginForm />} /> 
    </Routes>
  </main>)
    
}
export default Main;



// const Main = (props) => {
//     return (<main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/update/:id" element={<Update />} />
          
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<LoginForm />} /> 
//         </Routes>
//       </main>)
//   }
  
//   export default Main
//   
//            <Route path="/career" element={<Career />} />
//           <Route path="/career/chat" element={<Chat />} />
//           {/* <Route path="/" element={<Home />} /> */}
// 