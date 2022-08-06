import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/ContextPage';
import { ColorButton } from "../ui";


export const FormButton = ({message = ''}) => {

  const { setVals } = useContext( UserContext );
  const navigate = useNavigate();

  const ChangePage = () => {
    setVals({
      maxWidth: 345,
      title: '',
      content: '',
      isForm: false,
    })
    navigate('/cards');
  }

    return (
      <Stack spacing={2} direction="row">
        <ColorButton 
          onClick={ChangePage}
          variant="contained">
            {message}
        </ColorButton>
      </Stack>
    );
  }