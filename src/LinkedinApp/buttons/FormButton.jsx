import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { GetApi } from '../hooks';
import { ColorButton } from "../ui";


export const FormButton = ({message = ''}) => {

  const { userLinkedin } = GetApi();
  const navigate = useNavigate();

  const ChangePage = () => {
    userLinkedin()
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