import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore_gardener from "../pages/Explore_gardener";
import Browse_tips from "../pages/Browse_tips";
import Login_signIn from "../pages/Login_signIn";
import My_tips from "../pages/My_tips";
import Share_garden_tip from "../pages/Share_garden_tip";
import NotFoundPage from "../components/NotFoundPage";

const Router =createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Home,
            //    loader :async () => {
            //     const res = await fetch('/store.json');
            //     const data = await res.json();
            //     if (!data.length) {
            //       throw new Response('Store data is not found!', { status: 404 });
            //     }
            //     return data;
            //   }
            },
            { 
                path : 'explore-gardeners',
                element :  <Explore_gardener /> 
            },
            { 
                path : 'browse-tips',
                element : <Browse_tips /> 
            },
            { 
                path : 'share-garden-tip',
                element :  <Share_garden_tip />
            },
            { 
                path : 'my-tips',
                element :  <My_tips />  
            },
            { 
                path : 'login-signin',
                element :  <Login_signIn />  
            }
        ]
    },
    {
        path: '/*',
        Component : NotFoundPage
    }
    
]) 
export default Router;