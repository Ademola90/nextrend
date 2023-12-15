import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/navbar-footer/NavBar';
import Appliance from "./pages/Appliance";
import SignUp from "./pages/SignUp";
import Layout from "./components/routes/Layout";
import SignIn from "./pages/SignIn";
import ConfirmationSuccess from "./components/ConfirmationSuccess/ConfirmationSuccess";





// FOR REACT QUERY TANSTACK
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})







function App() {

  const [token, setToken] = useState(() => {
    // Initialize state with the token from sessionStorage (if available)
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      try {
        return JSON.parse(storedToken);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    // Save the token to sessionStorage when it changes
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);




  // // SUPABASE SIGNIN TOKEN
  // const [token, setToken] = useState(false)
  // if (token) {
  //   sessionStorage.setItem('token', token, JSON.stringify(token))
  // }

  // // we use useEffect for users not to be able to loose there data
  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem('token');
  //   console.log('Stored Token:', storedToken);

  //   if (storedToken) {
  //     try {
  //       let data = JSON.parse(storedToken);
  //       setToken(data);
  //     } catch (error) {
  //       console.error('Error parsing JSON:', error);
  //     }
  //   }
  // }, []);


  return (
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>

        <Routes>

          {/* Only if the token is true */}
          <Route path="/" element={token ? <Layout><Home token={token} /></Layout> : <Layout><Home /></Layout>} />

          <Route path="/signup" element={<><SignUp /></>} />
          <Route path="/signin" element={<><SignIn setToken={setToken} /></>} />
          <Route path="/confirmation-success" element={<ConfirmationSuccess />} />
          <Route path="/appliance" element={<Layout><Appliance /></Layout>} />

          {/* <Route path='/' exact Component={Home} />
          <Route path='/appliance' exact Component={Appliance} />
          <Route path='/signup' exact Component={SignUp} /> */}

        </Routes>
      </BrowserRouter>
    </QueryClientProvider >
  );
}

export default App;
