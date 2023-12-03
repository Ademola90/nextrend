import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/navbar-footer/NavBar';
import Appliance from "./pages/Appliance";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})



function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/appliance' exact Component={Appliance} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider >
  );
}

export default App;
