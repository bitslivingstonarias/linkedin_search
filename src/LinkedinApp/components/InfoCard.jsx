import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@mui/material"
import { useContext } from "react";
import { UserContext } from "../context/ContextPage";

export const InfoCard = () => {

    const { Vals = "" } = useContext( UserContext );

  return (
    <>
        <Card sx={{ maxWidth: Vals.maxWidth}}>  
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src="https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                    alt={'Image Person'}
                />
                <CardContent>
                    <p>Nombre Completo</p>
                    <p>Descripcion</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} />
                    <Button
                        className="link-button"
                        size="small"
                        color="primary"
                        >
                        Ir a linkedin
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    </>
  )
}
