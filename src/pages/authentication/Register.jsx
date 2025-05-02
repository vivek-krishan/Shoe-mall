import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { alertError, alertInfo } from "../../utility/Alert";
// import { addUser, clearUser } from "../../Utils/Slices/UserInfoSlice";
import { FetchData } from "../../utility/fetchFromAPI";
import PopUp from "../../components/ui/PopUpWrapper";
import ButtonWrapper from "../../components/ui/Buttons";
// import LoadingUI from "../../Genral purpose/Loading";
// import { parseErrorMessage } from "../../Utils/ErrorMessageParser";
import { Eye, EyeOff } from "lucide-react";

const Register = ({ startLoading, stopLoading }) => {
  // All Variables declaration for this components
  const formRef = useRef();
  // const user = useSelector((store) => store.UserInfo.user);
  const user = null;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  // console.log(user);

  // All function definition for this components
  const handleRegister = async () => {
    const formData = new FormData(formRef.current);

    alertInfo("Server is not active...");
    return;

    // try {
    //   startLoading();
    //   const response = await FetchData("user/register", "post", formData);
    //   console.log(response.data);
    //   // Storing the tokens into browser's local storage
    //   localStorage.setItem("AccessToken", response.data.data.AccessToken);
    //   localStorage.setItem("RefreshToken", response.data.data.RefreshToken);

    //   // Storing data inside redux store
    //   Dispatch(clearUser());
    //   Dispatch(addUser(response.data.data.User));

    //   alertInfo(response.data.message);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    //   alertError(parseErrorMessage(error.response.data));
    // } finally {
    //   stopLoading();
    // }
  };

  const inputField = ({ label, type, id, placeholder }) => {
    return (
      <div>
        <label className="text-black" for={id}>
          {label}
        </label>
        <input
          className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-black border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-black dark:placeholder:text-zinc-400"
          id={id}
          placeholder={placeholder}
          type={type}
          name={id}
        />
      </div>
    );
  };

  return (
    <div className="text-black flex justify-center w-full h-fit  ">
      {user ? (
        <div className="font-Caveat lg:w-3/4 w-4/5 lg:my-20 h-full flex flex-col gap-10 py-5">
          <h1 className=" text-4xl text-center">
            Hello{" "}
            <span className="text-[#EB5A2A] font-bold">
              {user[0]?.fullName}
            </span>
          </h1>
          <h1 className="lg:text-3xl text-xl">
            Tap on the change password button to change your registered password
          </h1>
        </div>
      ) : (
        // <div>
        //   <section className="Form_side  w-full ">
        //     <h1 className="text-4xl text-center font-Caveat font-bold my-5">
        //       Register Here
        //     </h1>

        //     <form
        //       ref={formRef}
        //       className="Form flex flex-wrap justify-center m-5 bg-black/30 rounded-xl py-10 "
        //     >
        //       <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 gap-4 w-full lg:mx-10   ">
        //         <input
        //           type="text"
        //           className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //           placeholder="Enter Your full name"
        //           name="fullName"
        //           required
        //         />

        //         <input
        //           type="email"
        //           className="lg:col-span-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //           placeholder="Your Email"
        //           name="email"
        //           required
        //         />

        //         <input
        //           type="number"
        //           className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //           placeholder="Contact Number"
        //           name="phone"
        //           required
        //         />

        //         <input
        //           type="number"
        //           className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //           placeholder="Age"
        //           name="age"
        //           required
        //         />

        //         {/* <input
        //           type="password"
        //           className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //           placeholder="Password"
        //           name="passkey"
        //           required
        //         /> */}
        //         <div className="relative">
        //           <input
        //             type={showPassword ? "text" : "password"}
        //             className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black"
        //             placeholder="Password"
        //             name="passkey"
        //             // value={passkey}
        //             // onChange={HandelInputChange}
        //             required
        //           />
        //           <button
        //             type="button"
        //             onClick={toggleShowPassword}
        //             className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black focus:outline-none"
        //           >
        //             {showPassword ? <Eye /> : <EyeOff />}
        //           </button>
        //         </div>
        //       </div>
        //       <div className="Address w-full  lg:mx-10">
        //         <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
        //           Address
        //         </label>
        //         <div className=" grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 gap-4 w-full  ">
        //           <input
        //             type="text"
        //             className="lg:col-span-4 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //             name="street"
        //             placeholder="Street"
        //             required
        //           />
        //           <input
        //             type="text"
        //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //             name="city"
        //             placeholder="city"
        //             required
        //           />
        //           <input
        //             type="text"
        //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //             name="state"
        //             placeholder="state"
        //             required
        //           />
        //           <input
        //             type="text"
        //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
        //             name="country"
        //             placeholder="country"
        //             required
        //           />
        //           <input
        //             type="number"
        //             className="lg:row-start-2 bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black"
        //             name="pinCode"
        //             placeholder="Pin Code"
        //             required
        //           />
        //         </div>
        //       </div>
        //     </form>

        //     <div className="Register-btn flex justify-center m-10">
        //       <button
        //         className="text-white p-2 px-4 h-fit rounded-xl drop-shadow-lg flex bg-[#000080] hover:bg-[#2f2fd3] hover:scale-105 hover:drop-shadow-2xl transition duration-100 ease-in-out"
        //         onClick={handleRegister}
        //       >
        //        Register
        //       </button>
        //     </div>
        //   </section>
        // </div>
        <section>
          <body className="">
            <div className="flex flex-col justify-center items-center h-max min-h-[100vh] pb-5">
              <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
                <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-20 lg:max-w-[450px]">
                  <p className="text-[32px] font-bold text-black">Sign In</p>
                  <p className="mb-2.5 mt-2.5 font-normal text-zinc-400">
                    Enter your email and password to sign in!
                  </p>
                  <div className="mt-8">
                    <form className="pb-2">
                      <input type="hidden" name="provider" value="google" />
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-gray-100 drop-shadow-lg hover:drop-shadow-2xl bg-gray-400-foreground h-10 px-4 w-full text-black py-6"
                        type="submit"
                      >
                        <span className="mr-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48"
                            className="h-5 w-5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                          </svg>
                        </span>
                        <span>Google</span>
                      </button>
                    </form>
                  </div>
                  <div className="relative my-4">
                    <div className="relative flex items-center py-1">
                      <div className="grow border-t border-zinc-800"></div>
                      <div className="grow border-t border-zinc-800"></div>
                    </div>
                  </div>
                  <div>
                    <form novalidate="" className="mb-4">
                      <div className="grid gap-2">
                        <div className="grid gap-1">
                          {/* <label className="text-black" for="email">
                            Email
                          </label>
                          <input
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-black border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-black dark:placeholder:text-zinc-400"
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autocapitalize="none"
                            autocomplete="email"
                            autocorrect="off"
                            name="email"
                          /> */}
                          <inputField
                            label="Email"
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                          />
                          <inputField
                            label="Full Name"
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                          />
                          <inputField
                            label="Phone Number"
                            type="number"
                            id="phone"
                            placeholder="Enter your phone number"
                          />
                          <inputField
                            label="Age"
                            type="number"
                            id="age"
                            placeholder="Enter your age"
                          />
                          <inputField
                            label="Street"
                            type="text"
                            id="street"
                            placeholder="Enter your street name"
                          />
                          <inputField
                            label="City"
                            type="text"
                            id="city"
                            placeholder="Enter your city name"
                          />
                          <inputField
                            label="State"
                            type="text"
                            id="state"
                            placeholder="Enter your state name"
                          />
                          <inputField
                            label="Country"
                            type="text"
                            id="country"
                            placeholder="Enter your country name"
                          />
                          <inputField
                            label="Pin Code"
                            type="number"
                            id="pinCode"
                            placeholder="Enter your pin code"
                          />
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black"
                              placeholder="Password"
                              name="passkey"
                              required
                            />
                            <button
                              type="button"
                              onClick={toggleShowPassword}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black focus:outline-none"
                            >
                              {showPassword ? <Eye /> : <EyeOff />}
                            </button>
                          </div>
                        </div>
                        <button
                          className="whitespace-nowrap ring-offset-background transition-colors drop-shadow-md hover:drop-shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-gray-100 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                          type="submit"
                          onClick={handleRegister}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </section>
      )}
    </div>
  );
};

export default Register;
