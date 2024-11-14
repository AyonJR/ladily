import Header from "../navbar/Header";
import Navbar from "../navbar/Navbar";

const Details = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      {/* details content */}
      <div className="lg:mx-[118px] mx-6  2xl:mx-[40px] mt-9">

         <p>Home</p>
      </div>
    </div>
  );
};

export default Details;
