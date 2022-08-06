import { useState } from "react";
import { UserContext } from "./ContextPage";


export const ProviderContext = ({children}) => {

  const [Vals, setVals] = useState();

  return (
    <UserContext.Provider value={{ Vals, setVals }}>
        { children }
    </UserContext.Provider>
  )
}
