import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';
import { BlogsProvider } from './context/blogsContext.jsx';
import { UserProvider } from './context/userContext.jsx';
import { CommentProvider } from './context/commentContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <SidebarProvider>
        <UserProvider>
    <BlogsProvider>
        <CommentProvider>
    <App />
    </CommentProvider>
    </BlogsProvider>
    </UserProvider>
    </SidebarProvider>
);
