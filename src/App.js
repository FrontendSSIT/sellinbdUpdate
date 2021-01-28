import React, { createContext, useEffect, useState } from 'react';
import { Home } from './Components/Home/Home/Home';
import { Login } from './Components/Authentication/Login/Login';
import { ProductDetails } from './Components/AllCategory/ProductDetails/ProductDetails';
import { CategoryNav } from './Components/Home/CategoryNav/CategoryNav';
import { PostYourAdd } from './Components/PostYourAdd/PostYourAdd';
import {  SignleCategorys } from './Components/AllCategory/SignleProductCategory/SignleCategory/SignleCategory';
import { Contact } from './Components/Contact/Contact';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgriculturalTools } from './Components/SearchProduct/Category/Agricultural/AgriculturalTools/AgriculturalTools';
import { Location } from './Components/Home/Location/Location';
import {  SellAgricultural, SellDaily, SellMedicine, SellPets, SellProduct, SellService } from './Components/PostYourAdd/PostCategory/SelectCategory/SelectCategory';
import { BusinessIndustrialPost, MobileTabletsPost, SportsHobbiesPost,FashionsPost, FurniturePost, VehiclesPost, ElectronicsPost,ComputerLaptopsPost } from './Components/PostYourAdd/SellProduct/ItemSelect/ItemSelect';
import { PostForm } from './Components/PostYourAdd/PostCategory/PostForm/PostForm';
import { UserProfile } from './Components/UserProfile/UserProfile';
import  PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import { Dhaka } from './Components/SearchProduct/LocationProduct/DhakaDivision/Dhaka/Dhaka';
import { AllChat} from './Components/AllChat/AllChat';
import { Loaders } from './Components/Loader/Loaders';
import { PostEdit } from './Components/PostEdit/PostEdit';
import { PromotePost } from './Components/PromotePost/PromotePost';
import { ChatView } from './Components/AllChat/ChatProductView/ChatProductView';
import ForgatePassword from './Components/Authentication/ForgatePassWord/ForgatePassword';
import SignUp from './Components/Authentication/SignUp/SignUp';



export const userContext=createContext()
function App() {
  const [loginUser,setLoginUser]=useState()
  const [userName,setUserName]=useState({})
  const [productD,setProductD]=useState()
  const [loader,setLoader]=useState(false)
  console.log(userName,'hi')
  // const match=useRouteMatch({
  //   path: "/produtcDetails/:category/:postId",
  //   strict: true,
  //   sensitive: true
  //  })
 
  return (
  <userContext.Provider value={[loginUser,setLoginUser,userName,setUserName]}>
  
     <Router>
      <Switch>
        <Route exact path='/' >
        <Home/>
        </Route>
        <Route  path='/home' >
        <Home/>
        </Route>
        <Route  path='/login'>
        <Login/>
        </Route>
        <Route  path='/signup'>
        <SignUp/>
        </Route>
        <Route  path='/forgate'>
        <ForgatePassword />
        </Route>
        <Route path='/produtcDetails/:category/*$@/:postId/10$2*$@90'>
        <ProductDetails/>
        </Route>
        <Route path='/produtcDetails/:category/:postId'>
        <ProductDetails/>
        </Route>
        {/* categoryNavbar &  */}
        <Route path='/LocNav'>
        <Location/>
        </Route>
        <Route path='/catNav'>
        <CategoryNav/>
        </Route>
        <PrivateRoute path='/postAdd'>
        <PostYourAdd/>
        </PrivateRoute>
        <Route path='/PostEdit/:postId'>
         <PostEdit/>
        </Route>
        <Route  path='/signleCategory'>
        <SignleCategorys/>
        </Route>
      {/*category Start &  */}
    
        <Route  path='/category'>
        <AgriculturalTools/>
        </Route>
         {/*category end &  */}
                               {/* Search  By Place category start*/}
                                    <Route path='/location'>
                                    <Dhaka/>
                                    </Route>           
                                  {/* Search  By Place category End*/}
                                  {/* Post  category Start*/}
                                  <Route path='/sellProductPost'>
                                  <SellProduct/>
                                  </Route>
                                  <Route path='/sellPetsPost'>
                                  <SellPets/>
                                  </Route>
                                  <Route path='/sellAgriculturalPost'>
                                  <SellAgricultural/>
                                  </Route>
                                  <Route path='/sellDailyPost'>
                                  <SellDaily/>
                                  </Route>
                                  <Route path='/sellMedicinePost'>
                                  <SellMedicine/>
                                  </Route>
                                  <Route path='/sellServicePost'>
                                  <SellService/>
                                  </Route>
                                  <Route path="/mobilePost">
                                  <MobileTabletsPost/>
                                  </Route>
                                  <Route path='/computerLaptopsPost'>
                                  <ComputerLaptopsPost/>
                                  </Route>
                                  <Route path='/electronicsPost'>
                                  <ElectronicsPost/>
                                  </Route>
                                  <Route path='/vehiclesPost'>
                                  <VehiclesPost/>
                                  </Route>
                                  <Route path='/propertyPost'>
                                  <VehiclesPost/>
                                  </Route>
                                  <Route path='/furniturePost'>
                                  <FurniturePost/>
                                  </Route>
                                  <Route path='/fashionsPost'>
                                  <FashionsPost/>
                                  </Route>
                                  <Route path='/sportsHobbiesPost'>
                                  <SportsHobbiesPost/>
                                  </Route>
                                  <Route path='/businessIndustrialPost'>
                                  <BusinessIndustrialPost/>
                                  </Route>
                                  <Route path='/posForm'>
                                  <PostForm/>
                                  </Route>
                                  {/*Post category End*/}
                                   {/*user PRofile  start*/}
                                   <Route path='/user'>
                                   <UserProfile/>
                                   </Route>
                                    {/*user Profile End*/}
                                     <Route path='/contact'>
        <Contact/>
        </Route>
         <Route path='/promotePost'>
         <PromotePost/>
         </Route>
        <PrivateRoute path='/chat'>
        <AllChat/>
        </PrivateRoute>
        <PrivateRoute path='/chatView/:number/:postId'>
        <ChatView/>
        </PrivateRoute>  
        <Redirect  to='/'/>
      </Switch>
      
    </Router>:<Loaders/>
  

  </userContext.Provider>
  );
}

export default App;