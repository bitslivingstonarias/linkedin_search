import { CardActions, Grid } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../context/ContextPage";
import { FormButton, SendButton } from "../buttons";

export const ActionCardButton = () => {

  const { Vals = "" } = useContext( UserContext );

  return (
    <>
        <CardActions>
        {/* <Button size="small" color="primary">
                Share
              </Button> */}
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <SendButton
                message={'Guardar'}>
              </SendButton>
            </Grid>
            <Grid item xs={4}>
            <FormButton
                message={'Validar'}
              />
            </Grid>
        </Grid>
      </CardActions>
    </>
  )
}


