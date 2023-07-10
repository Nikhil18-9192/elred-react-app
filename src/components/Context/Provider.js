import { useReducer } from "react";
import Initialstates from "./Inititalstates";
import Globalcontext from "./Createcontext";
import reducer from "./Reducer";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Initialstates);
  return (
    <Globalcontext.Provider value={{ state, dispatch }}>
      {children}
    </Globalcontext.Provider>
  );
};

export default Provider;
