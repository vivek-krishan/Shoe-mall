import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../constants/Images";
import { useState, useRef } from "react";
import { NavigationList } from "../constants/NavigationList";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import { motion } from "framer-motion";

{
  // #f4f4f5 #f0f0f1 => bg
  // #35383f         => text
}

const Header = () => {
  // variables
  const [searchText, setSearchText] = useState("");
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate();
  const user = null;
  const buttonDesign = useRef("");

  // functions
  const HandelSubmit = (e) => {
    if (searchText) {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  const HandelRegister = () => {
    navigate(`/authentication`);
  };

  const HandelLogOut = async () => {
    alert("Logged Out");
  };

  return (
    <div key={"1111"}>
      {/* Logo and Login btn */}
      <div className="Logo flex justify-between px-20 items-center" key={1113}>
        <Link to={"/"} className="LOGO " key={1112}>
          <img src={Logo} alt="Logo" className="w-28" key={1114} />
        </Link>

        {/* Search bar */}
        <div className="SearchBar relative flex items-center ">
          <motion.input
            initial={{ width: "10vw" }}
            animate={{ width: "20vw" }}
            onHover={{ width: "22vw" }}
            transition={{ duration: 0.5 }}
            className=" bg-white txt-light-brown text-sm rounded-lg w-80  px-4 py-2 dark:placeholder-gray-900 dark:text-black drop-shadow-xl hover:w-96 transition duration-1000 ease-in-out  focus:outline-none focus:w-96 focus:py-3 flex justify-center items-center  "
            placeholder="Search"
            value={searchText}
            name={"searchBar"}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onSubmit={HandelSubmit}
          />
          <button
            onClick={() => {
              HandelSubmit();
            }}
            className="absolute right-2"
          >
            <Search />
          </button>
        </div>

        {user != null ? (
          <div className="flex flex-col">
            <h1 className="font-thin text-lg">
              Hello {user[0]?.user?.username}{" "}
            </h1>
            <button
              className="bg-gray-200 px-3 rounded-lg hover:bg-gray-500 hover:text-white transition duration-200 ease-in-out"
              onClick={HandelLogOut}
            >
              LogOut
            </button>
          </div>
        ) : (
          <button
            className="text-white p-2 h-fit rounded-xl drop-shadow-lg flex bg-[#000080] hover:bg-[#2f2fd3] hover:scale-105 hover:drop-shadow-2xl transition duration-100 ease-in-out"
            onClick={HandelRegister}
          >
            Sign Up/ Sign In
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className=" w-full flex ">
        <nav className="w-1/2 flex justify-evenly items-center ">
          {NavigationList.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`font-light font-serif hover:font-bold hover:scale-110 transition duration-100 ease-in-out ${
                window.location.pathname === item.path
                  ? " text-xl font-serif underline "
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
