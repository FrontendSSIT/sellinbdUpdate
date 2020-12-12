import React, { createContext, useState } from 'react';
import { Home } from './Components/Home/Home/Home';
import { Login } from './Components/Authentication/Login/Login';
import { ProductDetails } from './Components/AllCategory/ProductDetails/ProductDetails';
import { CategoryNav } from './Components/Home/CategoryNav/CategoryNav';
import { PostYourAdd } from './Components/PostYourAdd/PostYourAdd';
import {  SignleCategorys } from './Components/AllCategory/SignleProductCategory/SignleCategory/SignleCategory';
import { Contact } from './Components/Contact/Contact';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { MensClothing } from './Components/SearchProduct/Category/Fashions/MensClothing/MensClothing';
import { Jewelrys } from './Components/SearchProduct/Category/Fashions/Jewelry/Jewelry';
import { Opticals } from './Components/SearchProduct/Category/Fashions/Optical/Optical';
import { OtherFashions } from './Components/SearchProduct/Category/Fashions/OthersFashions/OtherFashions';
import { Cosmertics } from './Components/SearchProduct/Category/Fashions/Cosmertics/Cosmertics';
import { Wholesales } from './Components/SearchProduct/Category/Fashions/Wholesale/Wholesale';
import { Bags } from './Components/SearchProduct/Category/Fashions/Bags/Bags';
import { Watchess } from './Components/SearchProduct/Category/Fashions/Watches/Watches';
import { AgriculturalTools } from './Components/SearchProduct/Category/Agricultural/AgriculturalTools/AgriculturalTools';
import { Crops } from './Components/SearchProduct/Category/Agricultural/Crops/Crops';
import { OtherAgriculturals } from './Components/SearchProduct/Category/Agricultural/OthersAgricultural/OtherAgricultural';
import { Brics } from './Components/SearchProduct/Category/Business/Brics/Brics';
import {  Industrials } from './Components/SearchProduct/Category/Business/Industrial/Industrial';
import { IndustryMachinerys } from './Components/SearchProduct/Category/Business/IndustryMachinery/IndustryMachinery';
import { Licenses } from './Components/SearchProduct/Category/Business/Licenses/Licenses';
import { OtherBusiness } from './Components/SearchProduct/Category/Business/OtherBusiness/OtherBusiness';
import { Safetys } from './Components/SearchProduct/Category/Business/Safety/Safety';
import { Stationarys } from './Components/SearchProduct/Category/Business/Stationary/Stationary';
import { Sanitarys } from './Components/SearchProduct/Category/Business/Sanitary/Sanitary';
import { Desktops } from './Components/SearchProduct/Category/Computer/Desktops/Desktops';
import { LaptopDesktopAccessories } from './Components/SearchProduct/Category/Computer/LaptopDesktopAccessories/LaptopDesktopAccessories';
import { Laptops } from './Components/SearchProduct/Category/Computer/Laptops/Laptops';
import { NetWorkingAccessories } from './Components/SearchProduct/Category/Computer/NetWorkingAccessories/NetWorkingAccessories';
import { PhotocopiersPrinters } from './Components/SearchProduct/Category/Computer/PhotocopiersPrinter/PhotocopiersPrinter';
import { BabyProducts } from './Components/SearchProduct/Category/DailyNeeds/BabyProducts/BabyProducts';
import { FrutisAndVegetables } from './Components/SearchProduct/Category/DailyNeeds/FrutisAndVegetables/FrutisAndVegetables';
import { Grocerys } from './Components/SearchProduct/Category/DailyNeeds/Grocery/Grocery';
import { HealthAndCares } from './Components/SearchProduct/Category/DailyNeeds/HealthAndCare/HealthAndCare';
import { HouseHolds } from './Components/SearchProduct/Category/DailyNeeds/HouseHold/HouseHold';
import { KitchenAccessories } from './Components/SearchProduct/Category/DailyNeeds/KitchenAccessories/KitchenAccessories';
import { ReadyFoods } from './Components/SearchProduct/Category/DailyNeeds/ReadyFood/ReadyFood';
import { MeatSeaFoods } from './Components/SearchProduct/Category/DailyNeeds/MeatSeaFood/MeatSeaFood';
import { ACs } from './Components/SearchProduct/Category/Electronics/Ac/Ac';
import { AudioSoundSytems } from './Components/SearchProduct/Category/Electronics/AudioSoundSytem/AudioSoundSytem';
import { CameraAccessories } from './Components/SearchProduct/Category/Electronics/CameraAccessories/CameraAccessories';
import { Cameras } from './Components/SearchProduct/Category/Electronics/Cameras/Cameras';
import { FanAndHeaters } from './Components/SearchProduct/Category/Electronics/FanAndHeaters/FanAndHeaters';
import { KitchenElectronics } from './Components/SearchProduct/Category/Electronics/KitchenElectronics/KitchenElectronics';
import { OtherElectronics } from './Components/SearchProduct/Category/Electronics/OtherElectronics/OtherElectronics';
import { Refrigerators } from './Components/SearchProduct/Category/Electronics/Refrigerators/Refrigerators';
import { Toys } from './Components/SearchProduct/Category/Electronics/Toys/Toys';
import { Televisions } from './Components/SearchProduct/Category/Electronics/Televisions/Televisions';
import { ToysAccessories } from './Components/SearchProduct/Category/Electronics/ToysAccessories/ToysAccessories';
import { WaterPurifierAndAccessories } from './Components/SearchProduct/Category/Electronics/WaterPurifierAndAccessories/WaterPurifierAndAccessories';
import { ChildrensFurnitures } from './Components/SearchProduct/Category/Furniture/ChildrensFurniture/ChildrensFurniture';
import { KitchenAndDinigRooms } from './Components/SearchProduct/Category/Furniture/KitchenAndDinigRoom/KitchenAndDinigRoom';
import { LivingRoomFunitures } from './Components/SearchProduct/Category/Furniture/LivingRoomFuniture/LivingRoomFuniture';
import { OfficeAndShops } from './Components/SearchProduct/Category/Furniture/officeAndShop/OfficeAndShop';
import { OthersFurnitures } from './Components/SearchProduct/Category/Furniture/OthersFurniture/OthersFurniture';
import { GeneralMedicines } from './Components/SearchProduct/Category/Medicine/GeneralMedicine/GeneralMedicine';
import { HomeioMedicines } from './Components/SearchProduct/Category/Medicine/HomeioMedicine/HomeioMedicine';
import { HerbalMedicines } from './Components/SearchProduct/Category/Medicine/HerbalMedicine/HerbalMedicine';
import { MobileAndTabletsAccessories } from './Components/SearchProduct/Category/MobileTablets/MobileAndTabletsAccessories/MobileAndTabletsAccessories';
import { MobilePhones } from './Components/SearchProduct/Category/MobileTablets/MobilePhone/MobilePhone';
import { Tablets } from './Components/SearchProduct/Category/MobileTablets/Tablets/Tablets';
import { FarmAnimals } from './Components/SearchProduct/Category/PetsAndAnimal/FarmAnimals/FarmAnimals';
import { OtherPetAnimals } from './Components/SearchProduct/Category/PetsAndAnimal/OtherPetAnimal/OtherPetAnimal';
import { PetAndAnimals } from './Components/SearchProduct/Category/PetsAndAnimal/PetAndAnimals/PetAndAnimals';
import { PetAnimalFoods } from './Components/SearchProduct/Category/PetsAndAnimal/PetAnimalFood/PetAnimalFood';
import { Pets } from './Components/SearchProduct/Category/PetsAndAnimal/Pets/Pets';
import { ApartmnetAndFlats } from './Components/SearchProduct/Category/Property/ApartmnetAndFlats/ApartmnetAndFlats';
import { CommercialPropertys } from './Components/SearchProduct/Category/Property/CommercialProperty/CommercialProperty';
import { OthersPropertys } from './Components/SearchProduct/Category/Property/othersProperty/OthersProperty';
import { PlotsAndLands } from './Components/SearchProduct/Category/Property/PlotsAndLand/PlotsAndLand';
import { ToLets } from './Components/SearchProduct/Category/Property/ToLet/ToLet';
import { Houses } from './Components/SearchProduct/Category/Property/Houses/Houses';
import { BuySomethings } from './Components/SearchProduct/Category/SearchFor/BuySomething/BuySomething';
import { JobPosts } from './Components/SearchProduct/Category/SearchJob/JobPost/JobPost';
import { BusinessAndTechnicals } from './Components/SearchProduct/Category/Service/BusinessAndTechnical/BusinessAndTechnical';
import { CarBusAndTrucks } from './Components/SearchProduct/Category/Service/CarBusAndTruck/CarBusAndTruck';
import { CoursesAndCoachingCenters } from './Components/SearchProduct/Category/Service/CoursesAndCoachingCenter/CoursesAndCoachingCenter';
import { EventsandHospitallys } from './Components/SearchProduct/Category/Service/EventsandHospitally/EventsandHospitally';
import { HouseHoldServices } from './Components/SearchProduct/Category/Service/HouseHoldService/HouseHoldService';
import { InteriorDesigns } from './Components/SearchProduct/Category/Service/InteriorDesign/InteriorDesign';
import { LaptopsAndDesktopServicings } from './Components/SearchProduct/Category/Service/LaptopsAndDesktopServicing/LaptopsAndDesktopServicing';
import { MobilePhoneServiceings } from './Components/SearchProduct/Category/Service/MobilePhoneServiceing/MobilePhoneServiceing';
import { ReadyFoodSupplies } from './Components/SearchProduct/Category/Service/ReadyFoodSupplies/ReadyFoodSupplies';
import { Tuitions } from './Components/SearchProduct/Category/Service/Tuition/Tuition';
import { VehiclesServicings } from './Components/SearchProduct/Category/Service/VehiclesServicing/VehiclesServicing';
import { VisaTravels } from './Components/SearchProduct/Category/Service/VisaTravel/VisaTravel';
import { FitnessAndGyms } from './Components/SearchProduct/Category/Sports/FitnessAndGym/FitnessAndGym';
import { MusicalInstruments } from './Components/SearchProduct/Category/Sports/MusicalInstruments/MusicalInstruments';
import { MusicBookAndMovies } from './Components/SearchProduct/Category/Sports/MusicBookAndMovies/MusicBookAndMovies';
import { OthersSportsAndHobbies } from './Components/SearchProduct/Category/Sports/OthersSportsAndHobbies/OthersSportsAndHobbies';
import { Sport } from './Components/SearchProduct/Category/Sports/Sport/Sport';
import { AutoOilsAndFluids } from './Components/SearchProduct/Category/Vehicles/AutoOilsAndFluids/AutoOilsAndFluids';
import { AutoParts } from './Components/SearchProduct/Category/Vehicles/AutoParts/AutoParts';
import { Bicycles } from './Components/SearchProduct/Category/Vehicles/Bicycles/Bicycles';
import { BusTruckAndPickup } from './Components/SearchProduct/Category/Vehicles/BusTruckAndPickup/BusTruckAndPickup';
import { CarAndJeepAccessories } from './Components/SearchProduct/Category/Vehicles/CarAndJeepAccessories/CarAndJeepAccessories';
import { CarAndJepps } from './Components/SearchProduct/Category/Vehicles/CarAndJepps/CarAndJepps';
import { MotorbikesAndScooterAccessories } from './Components/SearchProduct/Category/Vehicles/MotorbikesAndScooterAccessories/MotorbikesAndScooterAccessories';
import { MotorBikesAndScoters } from './Components/SearchProduct/Category/Vehicles/MotorBikesAndScoters/MotorBikesAndScoters';
import { OhersVehicles } from './Components/SearchProduct/Category/Vehicles/OhersVehicles/OhersVehicles';
import { ThreeWheelers } from './Components/SearchProduct/Category/Vehicles/ThreeWheelers/ThreeWheelers';
import { TractorsAndHeavyDuty } from './Components/SearchProduct/Category/Vehicles/TractorsAndHeavyDuty/TractorsAndHeavyDuty';
import { WaterTransports } from './Components/SearchProduct/Category/Vehicles/WaterTransports/WaterTransports';
import { Location } from './Components/Home/Location/Location';
import { Barishal } from './Components/SearchProduct/LocationProduct/BarishalDivision/Barishal/Barishal';
import { Bhola } from './Components/SearchProduct/LocationProduct/BarishalDivision/Bhola/Bhola';
import { Burguna } from './Components/SearchProduct/LocationProduct/BarishalDivision/Burguna/Burguna';
import { Jhalokati } from './Components/SearchProduct/LocationProduct/BarishalDivision/Jhalokati/Jhalokati';
import { Patuakhali } from './Components/SearchProduct/LocationProduct/BarishalDivision/Patuakhali/Patuakhali';
import { Pirojpur } from './Components/SearchProduct/LocationProduct/BarishalDivision/Pirojpur/Pirojpur';
import { Bandarban } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Bandarban/Bandarban';
import { Brahmanbaria } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Brahmanbaria/Brahmanbaria';
import { Chandpur } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Chandpur/Chandpur';
import { Chattogram } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Chattogram/Chattogram';
import { CoxBazar } from './Components/SearchProduct/LocationProduct/ChattogramDivision/CoxBazar/CoxBazar';
import { Cumilla } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Cumilla/Cumilla';
import { Feni } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Feni/Feni';
import { Khangrachari } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Khangrachari/Khangrachari';
import { Lakshmipur } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Lakshmipur/Lakshmipur';
import { Rangamati } from './Components/SearchProduct/LocationProduct/ChattogramDivision/Rangamati/Rangamati';
import { Dhaka } from './Components/SearchProduct/LocationProduct/DhakaDivision/Dhaka/Dhaka';
import { Faridpur } from './Components/SearchProduct/LocationProduct/DhakaDivision/Faridpur/Faridpur';
import { Gazipur } from './Components/SearchProduct/LocationProduct/DhakaDivision/Gazipur/Gazipur';
import { KishorGanj } from './Components/SearchProduct/LocationProduct/DhakaDivision/Kishorganj/KishorGanj';
import { Madaripur } from './Components/SearchProduct/LocationProduct/DhakaDivision/Madaripur/Madaripur';
import { Manikganj } from './Components/SearchProduct/LocationProduct/DhakaDivision/Manikganj/Manikganj';
import { Munshiganj } from './Components/SearchProduct/LocationProduct/DhakaDivision/Munshiganj/Munshiganj';
import { Narasingdi } from './Components/SearchProduct/LocationProduct/DhakaDivision/Narasingdi/Narasingdi';
import { Naryanganj } from './Components/SearchProduct/LocationProduct/DhakaDivision/Naryanganj/Naryanganj';
import { Rajbari } from './Components/SearchProduct/LocationProduct/DhakaDivision/Rajbari/Rajbari';
import { Shariatpur } from './Components/SearchProduct/LocationProduct/DhakaDivision/Shariatpur/Shariatpur';
import { Tangail } from './Components/SearchProduct/LocationProduct/DhakaDivision/Tangail/Tangail';
import { Bagerhat } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Bagerhat/Bagerhat';
import { Chuadanga } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Chuadanga/Chuadanga';
import { Jessore } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Jessore/Jessore';
import { Khulna } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Khulna/Khulna';
import { Magura } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Magura/Magura';
import { Meherpur } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Meherpur/Meherpur';
import { Narail } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Narail/Narail';
import { Satkhira } from './Components/SearchProduct/LocationProduct/KhulnaDivision/Satkhira/Satkhira';
import { Jamalpur } from './Components/SearchProduct/LocationProduct/MymensighDivision/Jamalpur/Jamalpur';
import { Mymensingh } from './Components/SearchProduct/LocationProduct/MymensighDivision/Mymensingh/Mymensigh';
import { Netrokona } from './Components/SearchProduct/LocationProduct/MymensighDivision/Netrokona/Netrokona';
import { Sherpur } from './Components/SearchProduct/LocationProduct/MymensighDivision/Sherpur/Sherpur';
import { Bogura } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Bogura/Bogura';
import { Chapainawabganj } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Chapainawabganj/Chapainawabganj';
import { Joypurhat } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Joypurhat/Joypurhat';
import { Naogaon } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Naogaon/Naogaon';
import { Natore } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Natore/Natore';
import { Pabna } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Pabna/Pabna';
import { Rajshahi } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Rajshahi/Rajshahi';
import { Sirajganj } from './Components/SearchProduct/LocationProduct/RajshahiDivision/Sirajganj/Sirajganj';
import { Dinajpur } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Dinajpur/Dinajpur';
import { Gaibandha } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Gaibandha/Gaibandha';
import { Kurigram } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Kurigram/Kurigram';
import { Lalmonirhat } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Lalmonirhat/Lalmonirhat';
import { Nilphamari } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Nilphamari/Nilphamari';
import { Panchagarh } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Panchagarh/Panchagarh';
import { Rangpur } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Rangpur/Rangpur';
import { Thakurgaon } from './Components/SearchProduct/LocationProduct/RangpurDiviSion/Thakurgaon/Thakurgaon';
import { Habiganj } from './Components/SearchProduct/LocationProduct/SylhetDivision/Habiganj/Habiganj';
import { MaulviBazar } from './Components/SearchProduct/LocationProduct/SylhetDivision/MaulviBazar/MaulviBazar';
import { Sunamganj } from './Components/SearchProduct/LocationProduct/SylhetDivision/Sunamganj/Sunamganj';
import { Sylhet } from './Components/SearchProduct/LocationProduct/SylhetDivision/Sylhet/Sylhet';
import { AllChat } from './Components/AllChat/AllChat';
import { BuyPost, PostJob, SellAgricultural, SellDaily, SellMedicine, SellPets, SellProduct, SellService } from './Components/PostYourAdd/PostCategory/SelectCategory/SelectCategory';
import { BusinessIndustrialPost, MobileTabletsPost, SportsHobbiesPost,FashionsPost, FurniturePost, VehiclesPost, ElectronicsPost,ComputerLaptopsPost } from './Components/PostYourAdd/SellProduct/ItemSelect/ItemSelect';
import { PostForm } from './Components/PostYourAdd/PostCategory/PostForm/PostForm';
import { UserProfile } from './Components/UserProfile/UserProfile';
import { PrivateRoute } from './Components/Authentication/PrivateRoute/PrivateRoute';
import { KindsClothings } from './Components/SearchProduct/Category/Fashions/KidsClothing/KidsClothing';
import { WomensClothings } from './Components/SearchProduct/Category/Fashions/WomensClothing/WomensClothing';



export const userContext=createContext()
function App() {
  const [loginUser,setLoginUser]=useState()
  const [userName,setUserName]=useState({})
  const [productD,setProductD]=useState()
  console.log(loginUser,userName)
  return (
  <userContext.Provider value={[productD,setProductD,userName,setUserName,loginUser,setLoginUser]}>
  <Router>
  <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route  path="/home">
    <Home/>
    </Route>
    <Route  path="/login">
    <Login/>
    </Route>
    <Route path="/produtcDetails">
    <ProductDetails/>
    </Route>
    {/* categoryNavbar &  */}
    <Route path="/LocNav">
    <Location/>
    </Route>
    <Route path="/catNav">
    <CategoryNav/>
    </Route>
    <PrivateRoute path="/postAdd">
    <PostYourAdd/>
    </PrivateRoute>
    <Route  path="/signleCategory">
    <SignleCategorys/>
    </Route>
    {/* Fashions,Health and Beauty category Start &  */}
    <Route  path="/mens">
    <MensClothing/>
    </Route>
    <Route  path="/womens">
    <WomensClothings/>
    </Route>
    <Route  path="/kinds">
    <KindsClothings/>
    </Route>
    <Route  path="/jewelry">
    <Jewelrys/>
    </Route>
    <Route  path="/optical">
    <Opticals/>
    </Route>
    <Route  path="/watches">
    <Watchess/>
    </Route>
    <Route  path="/bags">
    <Bags/>
    </Route>
    <Route  path="/wholesale">
    <Wholesales/>
    </Route>
    <Route  path="/cosmetics">
    <Cosmertics/>
    </Route>
    <Route  path="/other">
    <OtherFashions/>
    </Route>
    {/* Agricultural category start &  */}
    <Route  path="/agriculturalTools">
    <AgriculturalTools/>
    </Route>
    <Route  path="/crops">
    <Crops/>
    </Route>
    <Route  path="/othersAgricultural">
    <OtherAgriculturals/>
    </Route>
     {/* Agricultural category End &  */}

      {/* Business category start &  */}
      <Route path="/brics">
      <Brics/>
      </Route>
      <Route path="/industrial">
      <Industrials/>
      </Route>
      
      <Route path="/industry">
      <IndustryMachinerys/>
      </Route>
      <Route path="/licenses">
      <Licenses/>
      </Route>
      <Route path="/otherBusiness">
      <OtherBusiness/>
      </Route>
      <Route path="/safety">
      <Safetys/>
      </Route>
      <Route path="/Sanitary">
      <Sanitarys/>
      </Route>
      <Route path="/stationary">
      <Stationarys/>
      </Route>
       {/* Business category End &  */}

        {/* Computer category Start &  */}
        <Route path="/desktop">
          <Desktops/>
        </Route>
        <Route path="/l&da">
          <LaptopDesktopAccessories/>
        </Route>
        <Route path="/laptop">
          <Laptops/>
        </Route>
        <Route path="/networkingA">
          <NetWorkingAccessories/>
        </Route>
        <Route path="/pp">
      <PhotocopiersPrinters/>
        </Route>
         {/* Computer category End &  */}
         {/* Daily category Start &  */}
         <Route path="/babyproduct">
      <BabyProducts/>
        </Route>
        <Route path="/f&v">
      <FrutisAndVegetables/>
        </Route>
        <Route path="/grocery">
      <Grocerys/>
        </Route>
        <Route path="/healthcare">
      <HealthAndCares/>
        </Route>
        <Route path="/household">
      <HouseHolds/>
        </Route>
        <Route path="/kitchenaccessories">
      <KitchenAccessories/>
        </Route>
        <Route path="/readyFood">
      <ReadyFoods/>
        </Route>
        <Route path="/m&f">
      <MeatSeaFoods/>
        </Route>
         {/* Daily category End &  */}
         {/* Electronics category Start &  */}
         <Route path="/ac">
           <ACs/>
         </Route>
         <Route path="/audio">
           <AudioSoundSytems/>
         </Route>
         <Route path="/camerasAccessories">
           <CameraAccessories/>
         </Route>
         <Route path="/cameras">
           <Cameras/>
         </Route>
         <Route path="/fan">
           <FanAndHeaters/>
         </Route>
         <Route path="/ackitchen">
           <KitchenElectronics/>
         </Route>
         <Route path="/otherElectronics">
           <OtherElectronics/>
         </Route>
         <Route path="/refeigerators">
           <Refrigerators/>
         </Route>
         <Route path="/televisions">
           <Televisions/>
         </Route>
         <Route path="/toys">
           <Toys/>
         </Route>
         <Route path="/toysAccessories">
           <ToysAccessories/>
         </Route>
         <Route path="/water">
           <WaterPurifierAndAccessories/>
         </Route>
         {/* Electronics category End &  */}
              {/* Furniture category Start &  */}
              <Route path="/childrens">
              <ChildrensFurnitures/>
              </Route>
              <Route path="/kitchenRoom">
              <KitchenAndDinigRooms/>
              </Route>
              <Route path="/living">
              <LivingRoomFunitures/>
              </Route>
              <Route path="/officeShop">
              <OfficeAndShops/>
              </Route>
              <Route path="/othersFurniture">
              <OthersFurnitures/>
              </Route>
              
                   {/* Furniture category End &  */}
                   {/* Medicine category start &  */}
                   <Route path="/generalmedicine">
                   <GeneralMedicines/>
                   </Route>
                   <Route path="/homeiomedicine">
                   <HomeioMedicines/>
                   </Route>
                   <Route path="/harbealmedicine">
                   <HerbalMedicines/>
                   </Route>
                   {/* Medicine category End &  */}
                   {/* Mobile Tablates category start &  */}
                   <Route path="/mobilephone">
                   <MobilePhones/>
                   </Route>
                   <Route path="/tablets">
                   <Tablets/>
                   </Route>
                   <Route path="/mobiletablets">
                   <MobileAndTabletsAccessories/>
                   </Route>
                   
                   {/* Mobile Tablates category End &  */}
                    {/* Pets and aminal Tablates category start &  */}
                    <Route path="/farmanimal">
                    <FarmAnimals/>
                    </Route>
                    <Route path="/otherpetAnimal">
                    <OtherPetAnimals/>
                    </Route>
                    <Route path="/petsandanimalaccessories">
                    <PetAndAnimals/>
                    </Route>
                    <Route path="/pets">
                    <Pets/>
                    </Route>
                    <Route path="/petanimalfood">
                    <PetAnimalFoods/>
                    </Route>
                     {/* Pets and aminal Tablates category End &  */}
                      {/* Property   category Start &  */}

                      <Route path="/apartmentflats">
                      <ApartmnetAndFlats/>
                      </Route>
                      <Route path="/commercialproperty">
                      <CommercialPropertys/>
                      </Route>
                      <Route path="/houses">
                      <Houses/>
                      </Route>
                      <Route path="/othersproperty">
                      <OthersPropertys/>
                      </Route>
                      <Route path="/plotsland">
                      <PlotsAndLands/>
                      </Route>
                      <Route path="/tolet">
                      <ToLets/>
                      </Route>
                       {/* Peoperty  category End &  */}
                         {/* BuySomething category Start &  */}
                         <Route path="/buysomething">
                         <BuySomethings/>
                         </Route>
                           {/* BuySomething  category End &  */}
                              {/* Job Post category Start &  */}
                         <Route path="/jobpost">
                         <JobPosts/>
                         </Route>
                           {/* Job Post  category End &  */}
                            {/* Service Post category Start &  */}
                         <Route path="/businesstechnical">
                         <BusinessAndTechnicals/>
                         </Route>
                         <Route path="/carbusrent">
                         <CarBusAndTrucks/>
                         </Route>
                         <Route path="/coursechoacing">
                         <CoursesAndCoachingCenters/>
                         </Route>
                         <Route path="/eventshospitality">
                         <EventsandHospitallys/>
                         </Route>
                         <Route path="/householdservice">
                         <HouseHoldServices/>
                         </Route>
                         <Route path="/interiordesign">
                         <InteriorDesigns/>
                         </Route>
                         <Route path="/laptopdesktopservicing">
                         <LaptopsAndDesktopServicings/>
                         </Route>
                         <Route path="/mobilephoneservicing">
                         <MobilePhoneServiceings/>
                         </Route>
                         <Route path="/readyfoodsupllie">
                         <ReadyFoodSupplies/>
                         </Route>
                         <Route path="/tution">
                         <Tuitions/>
                         </Route>
                         <Route path="/vehiclesservicing">
                         <VehiclesServicings/>
                         </Route>
                         <Route path="/visatravel">
                         <VisaTravels/>
                         </Route>
                           {/* Service Post  category End &  */}

                           {/*  Sport  category End &  */}
                           <Route path="/fitnessgym">
                           <FitnessAndGyms/>
                           </Route>
                           <Route path="/musicalinstruments">
                           <MusicalInstruments/>
                           </Route>
                           <Route path="/musicbookmovies">
                           <MusicBookAndMovies/>
                           </Route>
                           <Route path="/othersporthobbies">
                           <OthersSportsAndHobbies/>
                           </Route>
                           <Route path="/sports">
                           <Sport/>
                           </Route>
                           {/* Sport Post  category End &  */}

                           {/* Vehicles  category End &  */}
                           <Route path="/autooilsfuilds">
                           <AutoOilsAndFluids/>
                           </Route>
                           <Route path="/autoparts">
                           <AutoParts/>
                           </Route>
                           <Route path="/bicycles">
                           <Bicycles/>
                           </Route>
                           <Route path="/bustruckpickup">
                           <BusTruckAndPickup/>
                           </Route>
                           <Route path="/carjeepaccessories">
                           <CarAndJeepAccessories/>
                           </Route>
                           <Route path="/carsjeep">
                           <CarAndJepps/>
                           </Route>
                           <Route path="/motorbikesaccessories">
                           <MotorbikesAndScooterAccessories/>
                           </Route>
                           <Route path="/motorbikescoter">
                           <MotorBikesAndScoters/>
                           </Route>
                           <Route path="/othervehicles">
                           <OhersVehicles/>
                           </Route>
                           <Route path="/threewheelers">
                           <ThreeWheelers/>
                           </Route>
                           <Route path="/tracktorheavyduty">
                           <TractorsAndHeavyDuty/>
                           </Route>
                           <Route path="/watertransports">
                           <WaterTransports/>
                           </Route>
                           {/* Vehicles   category End &  */}

                           {/* Search  By Place category start*/}

                           {/*  Barishale Division category start*/}

                           <Route path="/barishal">
                           <Barishal/>
                           </Route>
                           <Route path="/bhola">
                           <Bhola/>
                           </Route>
                           <Route path="/barguna">
                           <Burguna/>
                           </Route>
                           <Route path="/Jhalokati">
                           <Jhalokati/>
                           </Route>
                           <Route path="/patuakhali">
                           <Patuakhali/>
                           </Route>
                           <Route path="/pirojpur">
                           <Pirojpur/>
                           </Route>
                            {/*  Barishale Division category End*/}

                            {/*  Chattogram Division category Start*/}

                            <Route path="/bandarban">
                           <Bandarban/>
                           </Route>
                           <Route path="/brahmanbaria">
                           <Brahmanbaria/>
                           </Route>
                           <Route path="/chandpur">
                           <Chandpur/>
                           </Route>
                           <Route path="/chattogram">
                           <Chattogram/>
                           </Route>
                           <Route path="/coxbazar">
                           <CoxBazar/>
                           </Route>
                           <Route path="/cumilla">
                           <Cumilla/>
                           </Route>
                           <Route path="/feni">
                           <Feni/>
                           </Route>
                           <Route path="/khangrachari">
                           <Khangrachari/>
                           </Route>
                           <Route path="/lakshmipur">
                           <Lakshmipur/>
                           </Route>
                           <Route path="/rangamati">
                           <Rangamati/>
                           </Route>
                            {/*  Chattogram Division category End*/}
                              {/*  Dhaka Division category Start*/}
                                <Route path="/dhaka">
                                <Dhaka/>
                                </Route>
                                <Route path="/faridpur">
                                <Faridpur/>
                                </Route>
                                <Route path="/gazipur">
                                <Gazipur/>
                                </Route>
                                <Route path="/kishorgang">
                                <KishorGanj/>
                                </Route>
                                <Route path="/madaripur">
                                <Madaripur/>
                                </Route>
                                <Route path="/manikganj">
                                <Manikganj/>
                                </Route>
                                <Route path="/munshiganj">
                                <Munshiganj/>
                                </Route>
                                <Route path="/narasingdi">
                                <Narasingdi/>
                                </Route>
                                <Route path="/naryanganj">
                                <Naryanganj/>
                                </Route>
                                <Route path="/rajbari">
                                <Rajbari/>
                                </Route>
                                <Route path="/shariatpur">
                                <Shariatpur/>
                                </Route>
                                <Route path="/tangail">
                                <Tangail/>
                                </Route>
                              {/*Dhaka Division category End*/}
                                 {/*Khulna Division category Start*/}
                                    <Route path="/bagerhat">
                                    <Bagerhat/>
                                    </Route>
                                    <Route path="/chuadanga">
                                    <Chuadanga/>
                                    </Route>
                                    <Route path="/jessore">
                                    <Jessore/>
                                    </Route>
                                    <Route path="/khulna">
                                    <Khulna/>
                                    </Route>
                                    <Route path="/magura">
                                    <Magura/>
                                    </Route>
                                    <Route path="/meherpur">
                                    <Meherpur/>
                                    </Route>
                                    <Route path="/narail">
                                    <Narail/>
                                    </Route>
                                    <Route path="/satkhira">
                                    <Satkhira/>
                                    </Route>
                                  {/*Khulna Division category End*/}

                                   {/*Mymensigh Division category Start*/}
                                   <Route path="/jamalpur">
                                   <Jamalpur/>
                                   </Route>
                                   <Route path="/mymensingh">
                                   <Mymensingh/>
                                   </Route>
                                   <Route path="/netrokona">
                                   <Netrokona/>
                                   </Route>
                                   <Route path="/sherpur">
                                   <Sherpur/>
                                   </Route>
                                   <Route path="/bogura">
                                   <Bogura/>
                                   </Route>
                                   <Route path="/chapainawabganj">
                                   <Chapainawabganj/>
                                   </Route>
                                   <Route path="/joypurhat">
                                   <Joypurhat/>
                                   </Route>
                                   <Route path="/naogaon">
                                   <Naogaon/>
                                   </Route>
                                   <Route path="/natore">
                                   <Natore/>
                                   </Route>
                                   <Route path="/pabna">
                                   <Pabna/>
                                   </Route>
                                   <Route path="/rajshahi">
                                   <Rajshahi/>
                                   </Route>
                                   <Route path="/sirajganj">
                                   <Sirajganj/>
                                   </Route>
                                    {/*ramgpur Division category start*/}
                                    <Route path="/dinajpur">
                                    <Dinajpur/>
                                    </Route>
                                    <Route path="/gaibandha">
                                    <Gaibandha/>
                                    </Route>

                                    <Route path="/kurigram">
                                    <Kurigram/>
                                    </Route>
                                    <Route path="/lalmonirhat">
                                    <Lalmonirhat/>
                                    </Route>

                                    <Route path="/nilphamari">
                                    <Nilphamari/>
                                    </Route>
                                    
                                    <Route path="/panchagarh">
                                    <Panchagarh/>
                                    </Route>
                                    <Route path="/rangpur">
                                    <Rangpur/>
                                    </Route>
                                    <Route path="/thakurgaon">
                                    <Thakurgaon/>
                                    </Route>
                                     {/*Rangpur Division category End*/}
                                        {/*Sylhet Division category start*/}
                                        <Route path="/habiganj">
                                        <Habiganj/>
                                        </Route>
                                        <Route path="/maulvibazar">
                                        <MaulviBazar/>
                                        </Route>
                                        <Route path="/sunamganj">
                                        <Sunamganj/>
                                        </Route>
                                        <Route path="/sylhet">
                                        <Sylhet/>
                                        </Route>
                                       
                                           {/*Sylhet Division category End*/}
                                      {/*Mymensigh Division category End*/}
                              {/* Search  By Place category End*/}
                              {/* Post  category Start*/}
                              <Route path="/sellProductPost">
                              <SellProduct/>
                              </Route>
                              <Route path="/sellPetsPost">
                              <SellPets/>
                              </Route>
                              <Route path="/sellAgriculturalPost">
                              <SellAgricultural/>
                              </Route>
                              <Route path="/sellDailyPost">
                              <SellDaily/>
                              </Route>
                              <Route path="/sellMedicinePost">
                              <SellMedicine/>
                              </Route>
                              <Route path="/sellServicePost">
                              <SellService/>
                              </Route>
                              <Route path="/PostAJob">
                              <PostJob/>
                              </Route>
                              <Route path="/buyPost">
                              <BuyPost/>
                              </Route>
                              <Route path="/mobilePost">
                              <MobileTabletsPost/>
                              </Route>\
                              <Route path="/computerLaptopsPost">
                              <ComputerLaptopsPost/>
                              </Route>
                              <Route path="/electronicsPost">
                              <ElectronicsPost/>
                              </Route>
                              <Route path="/vehiclesPost">
                              <VehiclesPost/>
                              </Route>
                              <Route path="/propertyPost">
                              <VehiclesPost/>
                              </Route>
                              <Route path="/furniturePost">
                              <FurniturePost/>
                              </Route>
                              <Route path="/fashionsPost">
                              <FashionsPost/>
                              </Route>
                              <Route path="/sportsHobbiesPost">
                              <SportsHobbiesPost/>
                              </Route>
                              <Route path="/businessIndustrialPost">
                              <BusinessIndustrialPost/>
                              </Route>
                              <Route path="/posForm">
                              <PostForm/>
                              </Route>
                              {/*Post category End*/}
                               {/*user PRofile  start*/}
                               <Route path="/user">
                               <UserProfile/>
                               </Route>
                                {/*user Profile End*/}
                              
                          
                            
    <Route path="/contact">
    <Contact/>
    </Route>
    <Route path="/chat">
    <AllChat/>
    </Route>  
    <Redirect  to="/"/>
  </Switch>
  
</Router>
  </userContext.Provider>
  );
}

export default App;
