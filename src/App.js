import React from 'react';
import { Home } from './Components/Home/Home/Home';
import { Login } from './Components/Authentication/Login/Login';
import { ProductDetails } from './Components/AllCategory/ProductDetails/ProductDetails';
import { CategoryNav } from './Components/Home/CategoryNav/CategoryNav';
import { PostYourAdd } from './Components/PostYourAdd/PostYourAdd';
import {  SignleCategorys } from './Components/AllCategory/SignleProductCategory/SignleCategory/SignleCategory';
import { Contact } from './Components/Contact/Contact';
import { AllChat } from './Components/Authentication/ForgatePassWord/AllChat/AllChat';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MensClothing } from './Components/SearchProduct/Category/Fashions/MensClothing/MensClothing';
import {  WomensClothings } from './Components/SearchProduct/Category/Fashions/WomensClothing/WomensClothing';
import { KindsClothing } from './Components/SearchProduct/Category/Fashions/KidsClothing/KidsClothing';
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


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route  path="/login">
        <Login/>
        </Route>
        <Route path="/produtcDetails">
        <ProductDetails/>
        </Route>
        {/* categoryNavbar &  */}
        <Route path="/catNav">
        <CategoryNav/>
        </Route>
        <Route path="/postAdd">
        <PostYourAdd/>
        </Route>
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
        <KindsClothing/>
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
        <Route path="/contact">
        <Contact/>
        </Route>
        <Route path="/chat">
        <AllChat/>
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
