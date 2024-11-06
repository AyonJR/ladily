
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
import BestProducts from './bestProducts/BestProducts'
import Footer from './footer/Footer'


function App() {

  return (
    <div>
     <div className=''>
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
     <div className='lg:mt-20 mt-12 lg:mx-[108px] '>
     <Advertise></Advertise>
     </div>
     <div className='lg:mt-20 mt-12 lg:mx-[108px] mx-6 '>
     <NewArrivals></NewArrivals>
     </div>
     <div>
      <OurBrands></OurBrands>
     </div>
     <div>
     <div className='lg:mt-20 mt-12 lg:mx-[108px] '>
     <Appoinment></Appoinment>
     </div>
     <div className='lg:mt-20 mt-12 lg:mx-[108px] '>
     <BestSelling></BestSelling>
     </div>
     <div className='lg:mt-20 mt-12 lg:mx-[108px] mx-6 '>
     <BestProducts></BestProducts>
     </div>
     <div className='lg:mt-20 mt-12  '>
     <Footer></Footer>
     </div>
     </div>
    </div>
  )
}

export default App
