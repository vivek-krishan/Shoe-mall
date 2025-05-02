// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useRef, useState } from "react";
// import { alertError, alertInfo } from "../../utility/Alert";
// // import { addUser, clearUser } from "../../Utils/Slices/UserInfoSlice";
// import { FetchData } from "../../utility/fetchFromAPI";
// import PopUp from "../../components/ui/PopUpWrapper";
// import ButtonWrapper from "../../components/ui/Buttons";
// // import LoadingUI from "../../Genral purpose/Loading";
// // import { parseErrorMessage } from "../../Utils/ErrorMessageParser";
// import { Eye, EyeOff } from "lucide-react";

// const Register = ({ startLoading, stopLoading }) => {
//   // All Variables declaration for this components
//   const formRef = useRef();
//   // const user = useSelector((store) => store.UserInfo.user);
//   const user = null;
//   const [showPassword, setShowPassword] = useState(false);
//   const toggleShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };
//   // console.log(user);

//   // All function definition for this components
//   const handleRegister = async () => {
//     const formData = new FormData(formRef.current);

//     alertInfo("Server is not active...");
//     return;

//     // try {
//     //   startLoading();
//     //   const response = await FetchData("user/register", "post", formData);
//     //   console.log(response.data);
//     //   // Storing the tokens into browser's local storage
//     //   localStorage.setItem("AccessToken", response.data.data.AccessToken);
//     //   localStorage.setItem("RefreshToken", response.data.data.RefreshToken);

//     //   // Storing data inside redux store
//     //   Dispatch(clearUser());
//     //   Dispatch(addUser(response.data.data.User));

//     //   alertInfo(response.data.message);
//     //   navigate("/");
//     // } catch (error) {
//     //   console.log(error);
//     //   alertError(parseErrorMessage(error.response.data));
//     // } finally {
//     //   stopLoading();
//     // }
//   };

//   return (
//     <div className="text-black flex justify-center w-full h-fit  ">
//       {user ? (
//         <div className="font-Caveat lg:w-3/4 w-4/5 lg:my-20 h-full flex flex-col gap-10 py-5">
//           <h1 className=" text-4xl text-center">
//             Hello{" "}
//             <span className="text-[#EB5A2A] font-bold">
//               {user[0]?.fullName}
//             </span>
//           </h1>
//           <h1 className="lg:text-3xl text-xl">
//             Tap on the change password button to change your registered password
//           </h1>
//         </div>
//       ) : (
//         // <div>
//         //   <section className="Form_side  w-full ">
//         //     <h1 className="text-4xl text-center font-Caveat font-bold my-5">
//         //       Register Here
//         //     </h1>

//         //     <form
//         //       ref={formRef}
//         //       className="Form flex flex-wrap justify-center m-5 bg-black/30 rounded-xl py-10 "
//         //     >
//         //       <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 gap-4 w-full lg:mx-10   ">
//         //         <input
//         //           type="text"
//         //           className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //           placeholder="Enter Your full name"
//         //           name="fullName"
//         //           required
//         //         />

//         //         <input
//         //           type="email"
//         //           className="lg:col-span-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //           placeholder="Your Email"
//         //           name="email"
//         //           required
//         //         />

//         //         <input
//         //           type="number"
//         //           className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //           placeholder="Contact Number"
//         //           name="phone"
//         //           required
//         //         />

//         //         <input
//         //           type="number"
//         //           className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //           placeholder="Age"
//         //           name="age"
//         //           required
//         //         />

//         //         {/* <input
//         //           type="password"
//         //           className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //           placeholder="Password"
//         //           name="passkey"
//         //           required
//         //         /> */}
//         //         <div className="relative">
//         //           <input
//         //             type={showPassword ? "text" : "password"}
//         //             className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black"
//         //             placeholder="Password"
//         //             name="passkey"
//         //             // value={passkey}
//         //             // onChange={HandelInputChange}
//         //             required
//         //           />
//         //           <button
//         //             type="button"
//         //             onClick={toggleShowPassword}
//         //             className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black focus:outline-none"
//         //           >
//         //             {showPassword ? <Eye /> : <EyeOff />}
//         //           </button>
//         //         </div>
//         //       </div>
//         //       <div className="Address w-full  lg:mx-10">
//         //         <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
//         //           Address
//         //         </label>
//         //         <div className=" grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 gap-4 w-full  ">
//         //           <input
//         //             type="text"
//         //             className="lg:col-span-4 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //             name="street"
//         //             placeholder="Street"
//         //             required
//         //           />
//         //           <input
//         //             type="text"
//         //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //             name="city"
//         //             placeholder="city"
//         //             required
//         //           />
//         //           <input
//         //             type="text"
//         //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //             name="state"
//         //             placeholder="state"
//         //             required
//         //           />
//         //           <input
//         //             type="text"
//         //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
//         //             name="country"
//         //             placeholder="country"
//         //             required
//         //           />
//         //           <input
//         //             type="number"
//         //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black"
//         //             name="pinCode"
//         //             placeholder="Pin Code"
//         //             required
//         //           />
//         //         </div>
//         //       </div>
//         //     </form>

//         //     <div className="Register-btn flex justify-center m-10">
//         //       <button
//         //         className="text-white p-2 px-4 h-fit rounded-xl drop-shadow-lg flex bg-[#000080] hover:bg-[#2f2fd3] hover:scale-105 hover:drop-shadow-2xl transition duration-100 ease-in-out"
//         //         onClick={handleRegister}
//         //       >
//         //        Register
//         //       </button>
//         //     </div>
//         //   </section>
//         // </div>

//       )}
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <Form
        className="w-[70vw] grid lg:grid-cols-3 lg:grid-rows-5  grid-cols-1 gap-4   "
        // validationBehavior="aria"
        onSubmit={onSubmit}
      >
        <Input
          isRequired
          name="fullName"
          label="Full Name"
          labelPlacement="outside"
          className=" "
          variant="underlined"
          validate={(value) => {
            if (value.length < 3) {
              return "Username must be at least 3 characters long";
            }

            return value === "admin" ? "Nice try!" : null;
          }}
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          className="lg:col-span-2"
          name="email"
          variant="underlined"
          type="email"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid Phone Number"
          label="Phone Number"
          labelPlacement="outside"
          className=" lg:row-start-2"
          name="number"
          variant="underlined"
          type="number"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid age"
          label="Age"
          labelPlacement="outside"
          className="lg:row-start-2"
          name="number"
          variant="underlined"
          type="number"
        />
        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          className=" lg:row-start-2"
          name="password"
          variant="underlined"
          type={showPassword ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "password must be at least 8 characters long";
            }

            return value === "password" ? "Nice try!" : null;
          }}
          endContent={
            <Button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          }
        />
        <Input
          isRequired
          errorMessage="Please enter a valid street"
          label="Street"
          labelPlacement="outside"
          className="lg:col-span-2 "
          name="street"
          variant="underlined"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid city"
          label="city"
          labelPlacement="outside"
          className="lg:col-start-3 lg:row-start-3"
          name="city"
          variant="underlined"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid state"
          label="state"
          labelPlacement="outside"
          className="lg:row-start-4"
          name="state"
          variant="underlined"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid country"
          label="country"
          labelPlacement="outside"
          className="lg:row-start-4"
          name="country"
          variant="underlined"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid pin code"
          label="pin code"
          labelPlacement="outside"
          className="lg:row-start-4"
          name="pinCode"
          variant="underlined"
          type="number"
        />

        <Button
          type="submit"
          variant="shadow"
          className="lg:col-start-2 lg:row-start-5"
        >
          Submit
        </Button>
        {/* {submitted && (
          <div className="text-small text-default-500">
            You submitted: <code>{JSON.stringify(submitted)}</code>
          </div>
        )} */}
      </Form>
    </div>
  );
}
