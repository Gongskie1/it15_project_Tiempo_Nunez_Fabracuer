import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthPage from './AuthPage.jsx';
import ChatPage from './ChatPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <AuthPage/>
  },
  {
    path: "/chat-page",
    element: <ChatPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
