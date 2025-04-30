import { Link } from "react-router-dom";
import { Logo } from "../constants/Images";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5 mt-10 w-[99vw] flex justify-evenly ">
      <section className="logo flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="w-28 filter invert" />
        <h3>@ 2023 Bundle Technologies Pvt. Ltd</h3>
        <div className="SocialMedia w-full flex justify-evenly m-3">
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            <Facebook />
          </Link>
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            <Twitter />
          </Link>
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            <Instagram />
          </Link>
        </div>
      </section>
      <section className="Company flex flex-col">
        <h2 className="text-lg font-semibold cursor-default">Company</h2>
        <Link to="#" className="m-2">
          About
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Team
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Careers
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Mall One
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Mall Instamart
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Mall Genie
        </Link>
      </section>
      <section className="contact us flex flex-col">
        <h2 className="text-lg font-semibold cursor-default">Contact us</h2>
        <Link to="#" className="m-2 text-sm font-extralight">
          Help & Support{" "}
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Partner with us
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Ride with us
        </Link>
      </section>
      <section className="Delivery flex flex-col">
        <h2 className="text-lg font-semibold cursor-default">We deliver to</h2>
        <Link to="#" className="m-2 text-sm font-extralight">
          Bangalore
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Gurgaon
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Hyderabad
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Delhi
        </Link>
        <Link to="#" className="m-2 text-sm font-extralight">
          Mumbai
        </Link>
        <h3 className="m-2 text-xs font-base">and many more cities</h3>
      </section>
    </div>
  );
};

export default Footer;
