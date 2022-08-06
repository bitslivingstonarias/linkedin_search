import { Typography } from "@mui/material"
import { useContext } from "react";
import { UserContext } from "../context/ContextPage";


export const CardLinkedinContent = () => {

  const { Vals = "" } = useContext( UserContext );

  return (
    <>
        <Typography gutterBottom variant="h5" component="div">
            {Vals.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {Vals.content}
        </Typography>
    </>
  )
}
