import { useContext } from "react";
import { getuserApi } from "../api";
import { UserContext } from "../context/ContextPage";


export const GetApi = () => {

    const { Vals, setVals } = useContext( UserContext );

    const userLinkedin = async() => {
        try {
            const { data } = await getuserApi.get('/auth/user');
            setVals({
                ...Vals,
                data
            })
        } catch (error) {
            setTimeout(() => {
                console.log(error);
            }, 10)
            
        }
    }

  return {
      userLinkedin

  }
}
