import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import {Queryclient, QueryClientProvider} from "@tanstack/react-query"
const queryClient = new QueryClient({});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client = {queryClient}>
    
    <App />

  </QueryClientProvider>
  </React.StrictMode>
  
 
);


const child = React.memo(({onClick})=>{
  console.log(clickked)
  return <button onClick = {onClick}>chilf comkmd </button>
})


