import { Card, CardActionArea, CardContent } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../context/ContextPage';
import { ActionCardButton } from './ActionCardButton';
import { CardLinkedinContent } from './CardLinkedinContent';
import { FormComponent } from './FormComponent';


export const MultiCard = () => {

  const { Vals = "" } = useContext( UserContext );

  return (
    //345 la card normal
    <Card sx={{ maxWidth: Vals.maxWidth}}>  
      <CardActionArea>
        <CardContent>
          <CardLinkedinContent />
          <FormComponent />
        </CardContent>
      </CardActionArea>
      <ActionCardButton />
    </Card>
  );
}