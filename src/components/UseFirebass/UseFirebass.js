import { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebass/Firebass.init";
const auth = getAuth(app);
const useFirebass = () => {
  const [user, setUser] = useState({});
};
export default useFirebass;
