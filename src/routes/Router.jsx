import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Explore_gardener from "../pages/Explore_gardener";
import Browse_tips from "../pages/Browse_tips";
import Login_signIn from "../pages/Login_signIn";
import My_tips from "../pages/My_tips";
import Share_garden_tip from "../pages/Share_garden_tip";
import NotFoundPage from "../components/NotFoundPage";
import Forget_password from "../components/Forget_password";
import Auth_middleware from "../middlewares/Auth_middleware";
import UnAuth_middleware from "../middlewares/UnAuth_middleware";
import Tips_details from "../pages/Tips_details";
import Update_tips from "../pages/Update_tips";
import Gardener_profile from "../components/Gardener_profile";
import Events_page from "../pages/Events_page";
import AboutPage from "../pages/AboutPage";
import Manage_events from "../components/manage_events/Manage_events";
import Profile from "../components/profile/Profile";
import Saved_tips from "../pages/Saved_tips";
import Update_event from "../components/manage_events/Update_events";
import Create_event from "../components/manage_events/Create_event";
import Event_details from "../components/manage_events/Event_details";
import Profile_Update from "../components/profile/Profile_Update";

const Router =createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Home,
            },
            { 
                path : 'gardeners',
                element :  <Explore_gardener /> 
            },
            { 
                path : 'gardener/:id',
                element : <Auth_middleware><Gardener_profile /></Auth_middleware>,
                errorElement : <NotFoundPage /> 
            },
            { 
                path : 'browse-tips',
                element : <Browse_tips /> 
            },
            { 
                path : 'tip-details/:id',
                element : <Auth_middleware> <Tips_details /></Auth_middleware> ,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'share-garden-tip',
                element : <Auth_middleware><Share_garden_tip /></Auth_middleware> 
            },
            { 
                path : 'update-tips/:id',
                element : <Auth_middleware><Update_tips /></Auth_middleware>,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'about',
                element : <AboutPage />
            },
            { 
                path : 'events',
                element : <Events_page />
            },
            { 
                path : 'manage-events',
                element : <Auth_middleware><Manage_events /></Auth_middleware>
            },
            { 
                path : 'create-event',
                element : <Auth_middleware><Create_event /></Auth_middleware>
            },
            { 
                path : 'update-event/:id',
                element : <Auth_middleware><Update_event /></Auth_middleware>,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'event-details/:id',
                element : <Auth_middleware><Event_details /></Auth_middleware>,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'manage-tips',
                element : <Auth_middleware><My_tips /> </Auth_middleware>
            },
            { 
                path : 'profile',
                element : <Auth_middleware><Profile /> </Auth_middleware>
            },
            { 
                path : 'update-profile',
                element : <Auth_middleware><Profile_Update /> </Auth_middleware>
            },
            { 
                path : 'saved-tips',
                element : <Auth_middleware> <Saved_tips /> </Auth_middleware>
            },
            { 
                path : 'login-signin',
                element : <UnAuth_middleware><Login_signIn />  </UnAuth_middleware> 
            },
            { 
                path : 'forget-password',
                element : <UnAuth_middleware><Forget_password />  </UnAuth_middleware> 
            }
        ]
    },
    {
        path: '/*',
        Component : NotFoundPage
    }
]) 
export default Router;