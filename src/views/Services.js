import React, {useState} from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const Services = () => {
  const [computers, setcomputers] = useState([
    {   "name": "Dell",
        "price": "", 'image': "https://images-na.ssl-images-amazon.com/images/I/61JQdvlZlNL._AC_SX466_.jpg"},
    { "name": "HP",
      "price": "", 'image': "https://5.imimg.com/data5/SQ/DY/MY-14914674/hp-desktop-computer-intel-i3-2f8gb-2f1tb-500x500.jpg"},
    { "name": "Toshiba",
      "price": "", 'image': "https://5.imimg.com/data5/CL/MR/MY-38501187/lenovo-commercial-desktops-500x500.png", },
    { 'name': "",
    "price": "", 'image': "https://cdn.cnetcontent.com/syndication/mediaserverredirect/358b52bab0fb5ab95f463e400a0ea997/maxsize(400x500).jpg" },
    { 'name': "",
    "price": "", 'image': "https://betanews.com/wp-content/uploads/2020/01/windows-10-pc-laptop.jpg" },
    { 'name': "",
    "price": "", 'image': "https://5.imimg.com/data5/ZG/TY/WX/SELLER-36176114/personal-desktop-500x500.jpg" },
    { 'name': "",
    "price": "", 'image': "https://5.imimg.com/data5/LG/RP/MY-5424643/acer-desktop-computer-500x500.jpg" },
    { 'name': "",
    "price": "", 'image': "https://www.asus.com/websites/global/products/nlJbIGI1RAsaagVW/assets/images/small/2x/sec_bg2.jpg" },
    { 'name': "",
    "price": "", 'image': "https://images-na.ssl-images-amazon.com/images/I/71AyL5l2jxL._AC_SY355_.jpg" }
  ]);
  return (
    <React.Fragment>
      <div>
        <div>
          <Carousel />
          
            <div className="box2 container">
              <div className="row">
                <div className="box1 d-flex justify-content-center flex-col flex-wrap">
              {computers.map((computer,index) => {
                  return (
                      <Cards key={index} name={computer.name} price={computer.price} img={computer.image}/>
                  )   
              })}
              </div>
        </div>
        </div>
            <Footer />
          </div>
        </div>
    </React.Fragment>
      
    
  );
};

export default Services;
