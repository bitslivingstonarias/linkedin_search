import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import image from '../media/linkedin.png';
import { cardStyle, imageStyle } from '../helpers/ComponentStyles';
import { UserContext } from "../context/ContextPage";
import { useContext } from "react";


export const InfoCard = () => {

    const { Vals } = useContext( UserContext );
    if (Vals.data){
        const { data } = Vals;        
        return (
          <>
              <Card style={cardStyle}>
                  <CardActionArea>
                      <CardMedia
                          style={imageStyle}
                          component="img"
                          src={image}
                          alt={'Image Person'}
                      />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid Grid item xs={6}>
                                <Typography
                                    style={{color:'#1717e2'}}
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    >
                                    <p>{data.fullname}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography
                            // variant="h7"
                            gutterBottom
                            component="div"
                            >
                            <p>{data.description}</p>
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Grid container spacing={2}>
                          <Grid item xs={6} md={10} />
                          <Button
                              onClick={() =>{ Vals.data.url}}
                              style={{fontFamily: 'Arial'}}
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

}
