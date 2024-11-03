
import './App.css'
import Navbar from "./navbar/Navbar"
import Header from "./navbar/Header"
import Banner from './banner/Banner'
import Featured from './featured/Featured'
import Advertise from './advertise/Advertise'
import NewArrivals from './newArrivals/NewArrivals'
import OurBrands from './ourBrands/OurBrands'
import Appoinment from './appoinment/Appoinment'
import BestSelling from './bestSelling/BestSelling'


function App() {

  return (
    <div>
     <div className='lg:mx-24'>
      <Navbar></Navbar>
     </div>
     <div className=''>
      <Header></Header>
     </div>
     <div className=''>
      <Banner></Banner>
     </div>
     <div className='lg:mt-20 mt-12'>
      <Featured></Featured>
     </div>
     <div className='lg:mt-20 mt-12 lg:mx-24 '>
     <Advertise></Advertise>
     </div>
     <div className='lg:mt-20 mt-12 lg:mx-24 mx-4 '>
     <NewArrivals></NewArrivals>
     </div>
     <div>
      <OurBrands></OurBrands>
     </div>
     <div>
     <div className='lg:mt-20 mt-12 lg:mx-24 '>
     <Appoinment></Appoinment>
     </div>
     <div className='lg:mt-20 mt-12 lg:mx-24 '>
     <BestSelling></BestSelling>
     </div>
     </div>
    </div>
  )
}

export default App
