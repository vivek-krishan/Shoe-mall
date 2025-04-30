import { useRouteError } from "react-router-dom";
import { errorPuppy } from "../constants/Images";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <div className="error-text">
        <h1>Oops.....</h1>
        <h2>Something went wrong!!!</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
      </div>
      <img src={errorPuppy} alt="Sad" id="sad-emojee" />
    </div>
  );
};

export default Error;
