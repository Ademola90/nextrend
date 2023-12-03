import React from "react";
import ImageSlider from "../components/ImageSlider";
import { GiComputerFan, GiClothes } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { PiTelevisionSimple, PiDotsThreeCircleLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import { CgIcecream } from "react-icons/cg";
import HeroCard from "../components/home-page-cards/HeroCard";
import ProductsTable from "../feartures/products/ProductsTable";
import { Link } from "react-router-dom";
// import { getProducts } from "../services/apiFirstProducts";

const Home = () => {
  // useEffect(function () {
  //   getProducts().then((data) => console.log(data));
  // }, []);

  const productIdsToInclude = [1, 2, 3, 4];

  const hero = [
    {
      id: 1,
      icon: GiComputerFan,
      name: "Appliance",
      to: "/appliance",
    },
    {
      id: 2,
      icon: BsPhone,
      name: "Phone & Tablets",
    },
    {
      id: 3,
      icon: GiClothes,
      name: "Fashion",
    },
    {
      id: 4,
      icon: MdOutlineComputer,
      name: "Computing",
    },
    {
      id: 5,
      icon: PiTelevisionSimple,
      name: "Eletronics",
    },
    {
      id: 6,
      icon: AiOutlineHome,
      name: "Home & Office",
    },
    {
      id: 7,
      icon: FaBaby,
      name: "Baby Products",
    },
    {
      id: 8,
      icon: CgIcecream,
      name: "Health & Beauty",
    },
    {
      id: 9,
      icon: PiDotsThreeCircleLight,
      name: "Other categories",
    },
  ];
  const images = [
    // Black Friday
    // "https://res.cloudinary.com/dybryo15k/image/upload/v1701618843/Premium_PSD___Black_friday_sale_banner_with_3d_gold_trolley_bppbbq.jpg",
    // "https://res.cloudinary.com/dybryo15k/image/upload/v1701618843/Premium_Vector___Black_friday_super_sale__black_gifts_boxes_ywhhzr.jpg",

    "https://res.cloudinary.com/dybryo15k/image/upload/v1692797965/cld-sample-5.jpg",
    // "https://res.cloudinary.com/dybryo15k/image/upload/v1701619452/three_y1vivx.jpg",
    "https://res.cloudinary.com/dybryo15k/image/upload/v1701619243/Download_E-commerce_concept_Delivery_service_on_mobile_application_for_free_ynjdaw.jpg",
    "https://res.cloudinary.com/dybryo15k/image/upload/v1692805307/pexels-ekaterina-bolovtsova-6312277_latt3m.jpg",
    "https://res.cloudinary.com/dybryo15k/image/upload/v1701618843/Free_Vector___Neon_24_hours_open_signboard_kcrncx.jpg",
  ];
  return (
    <div className=" px-8 md:px-10 lg:px-16 mt-20 mx-auto bg-black h-full text-white">
      <div className=" lg:flex md:grid grid items-center gap-5 py-3">
        <div className=" lg:w-1/4 md:w-full w-full ">
          <HeroCard hero={hero} />
        </div>
        <div className=" lg:w-3/4 md:w-full w-full ">
          <ImageSlider images={images} />
        </div>
      </div>

      <div>
        <ProductsTable productIdsToInclude={productIdsToInclude} />
      </div>
    </div>
  );
};

export default Home;
