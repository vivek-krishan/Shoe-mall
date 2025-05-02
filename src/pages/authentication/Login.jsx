import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { alertError, alertInfo } from "../../utility/Alert";
// import { addUser, clearUser } from "../../Utils/Slices/UserInfoSlice";
// import { FetchData } from "../../Utils/fetchFromAPI";
import PopUp from "../../components/ui/PopUpWrapper";
// import LoadingUI from "../../Genral purpose/Loading";
// import { parseErrorMessage } from "../../Utils/ErrorMessageParser";
import { Eye, EyeOff } from "lucide-react";
import { Form, Input, Button } from "@heroui/react";

const LogIn = ({ startLoading, stopLoading }) => {
  // Utility variables
  const [popup, setPopup] = useState(false);
  const changePasswordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // utility Functions
  const LogInFn = async () => {
    alertInfo("Server is not active...");
    return;

    // try {
    //   startLoading();
    //   const response = await FetchData("user/login", "post", user);
    //   console.log(response);
    //   // Storing the tokens into browser's local storage
    //   localStorage.setItem("AccessToken", response.data.data.AccessToken);
    //   localStorage.setItem("RefreshToken", response.data.data.RefreshToken);

    //   // Storing data inside redux store
    //   Dispatch(clearUser());
    //   Dispatch(addUser(response.data.data.User));

    //   // console.log(response);
    //   alertInfo(response.data.message);
    //   navigate("/");
    // } catch (error) {
    //   console.error(error);
    //   alertError(parseErrorMessage(error.response.data));
    // } finally {
    //   stopLoading();
    // }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(changePasswordRef.current);

    alertInfo("Server is not active...");
    return;

    // try {
    //   startLoading();
    //   const response = await FetchData(
    //     "user/change-password",
    //     "post",
    //     formData
    //   );
    //   console.log(response);
    //   alertInfo(response.data.message);
    //   setPopup(false);
    // } catch (error) {
    //   console.log(error);
    //   alertError(parseErrorMessage(error.response.data));
    // } finally {
    //   stopLoading();
    // }
  };

  return (
    <div>
      {/* <div className="text-black flex  w-full h-full justify-center items-center mt-10 ">
        <section className="Form_side   ">
          <h1 className="text-center text-black mt-2 mb-5 text-3xl font-bold font-serif">
            Login
          </h1>

          <form className="Form  flex flex-col justify-center items-center bg-black/30 rounded-xl">
            <div className="UserName w-72 m-5">
              <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
                Email
              </label>
              <input
                type="text"
                className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="password w-72 m-5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg w-fit font-serif txt-Gray"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black"
                  placeholder="Password"
                  name="passkey"
                  value={user.passkey}
                  onChange={HandelInputChange}
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
          </form>

          <div className="Login-btn flex justify-evenly my-10 ">
            <button
              className="text-black p-2 px-4 h-fit rounded-xl drop-shadow-lg flex bg-[#000080] hover:bg-[#2f2fd3] hover:scale-105 hover:drop-shadow-2xl transition duration-100 ease-in-out"
              onClick={LogInFn}
            >
              Login
            </button>
           
          </div>
        </section>

        {popup && (
          <PopUp onClose={() => setPopup(false)}>
            <h2>Change Password</h2>
            <form
              ref={changePasswordRef}
              onSubmit={handleChangePassword}
              className="Form w-[40vw] p-2  flex flex-col justify-center items-center bg-white rounded-xl"
            >
              <div className="UserName w-72 m-5">
                <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="Old-password w-72 m-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg w-fit font-serif txt-Gray"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
                  placeholder="Old Password"
                  name="oldPassword"
                  required
                />
              </div>
              <div className="password w-72 m-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg w-fit font-serif txt-Gray"
                >
                  New Password
                </label>
                <input
                  type="password"
                  className="bg-white border-l-2 border-b-2 backdrop-blur-xl border-gray-300/30 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-700 dark:text-black focus:outline-none focus:border-b-2 focus:border-black "
                  placeholder="New Password"
                  name="newPassword"
                  required
                />
              </div>

              <ButtonWrapper
                type="submit"
                className="bg-green text-black p-3 px-7 rounded-3xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-L"
              >
                Submit
              </ButtonWrapper>
            </form>
          </PopUp>
        )}
      </div> */}

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
                  <Form
                    className=" grid lg:grid-rows-3  grid-cols-1 gap-4   "
                    // validationBehavior="aria"
                    onSubmit={LogInFn}
                  >
                    <Input
                      isRequired
                      errorMessage="Please enter a valid email"
                      label="Email"
                      labelPlacement="outside"
                     
                      name="email"
                      variant="underlined"
                      type="email"
                    />

                    <Input
                      isRequired
                      label="Password"
                      labelPlacement="outside"
                      
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

                    <Button
                      type="submit"
                      variant="shadow"
                     
                    >
                      Submit
                    </Button>
                    {/* {submitted && (
          <div className="text-small text-default-500">
            You submitted: <code>{JSON.stringify(submitted)}</code>
          </div>
        )} */}
                  </Form>
                  <p>
                    <button
                      className="font-medium text-black text-sm"
                      onClick={() => setPopup(true)}
                      type="button"
                    >
                      Forgot your password?
                    </button>
                  </p>
                  <p>
                    <Link
                      to={"/register"}
                      className="font-medium text-black text-sm"
                    >
                      Don't have an account? Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </section>
    </div>
  );
};

export default LogIn;
