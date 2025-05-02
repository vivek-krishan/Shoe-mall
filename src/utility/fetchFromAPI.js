import axios from "axios";
import { parseErrorMessage } from "./ErrorMessageParser";
import { productData } from "../assets/JSON/Damo_Data_Set_updated";


// export const FetchData = async (url, method, data) => {
//   const Base_URL = `${DomainUrl}/api/v1`;
//   const AccessToken = localStorage.getItem("AccessToken");

//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${AccessToken}`,
//     },
//     withCredentials: true,
//   };

//   if (method === "get") {
//     const response = await axios.get(`${Base_URL}/${url}`, options);
//     return response;
//   } else if (method === "post") {
//     const response = await axios.post(`${Base_URL}/${url}`, data, options);
//     return response;
//   } else if (method === "delete") {
//     const response = await axios.delete(`${Base_URL}/${url}`, options);
//     return response;
//   } else {
//     console.log(method);
//     return "Please enter the valid method";
//   }
// };

export const FetchData = async () => {
  try {
    // const response = await axios.get(process.env.SERVER);
    // return response;
    return productData;
  } catch (error) {
    console.log("Fuck you, error");
    console.error(error);
    // alert(parseErrorMessage(error));
  }
};
