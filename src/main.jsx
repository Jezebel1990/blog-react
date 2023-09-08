import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';
import { BlogsProvider } from './context/blogsContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <SidebarProvider>
    <BlogsProvider>
    <App />
    </BlogsProvider>
    </SidebarProvider>

);
