import Stack from '@mui/material/Stack';
import { ColorStyleButton } from "../ui";
import SaveIcon from '@mui/icons-material/Save';
import { UserContext } from '../context/ContextPage';
import { useContext } from 'react';
import SendUser from '../hooks/PostApi';

export const SendButton = ({message = ''}) => {

  const { Vals = ''} = useContext( UserContext );
  const { isFormValid, FullName, Description, URL } = Vals;

  const SendData = () => {
    SendUser({fullname: FullName, description: Description, url: URL})
  }

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