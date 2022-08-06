import Stack from '@mui/material/Stack';
import { ColorStyleButton } from "../ui";
import SaveIcon from '@mui/icons-material/Save';
import { UserContext } from '../context/ContextPage';
import { useContext } from 'react';

export const SendButton = ({message = ''}) => {

  const { Vals = '' } = useContext( UserContext );

  console.log(Vals.isFormValid)

  const SendData = () => {}

    return (
      <Stack spacing={2} direction="row">
        <ColorStyleButton
          disabled={!Vals.isFormValid} 
          onClick={SendData}
          variant="contained">
            <SaveIcon />
            {message}
        </ColorStyleButton>
      </Stack>
    );
  }