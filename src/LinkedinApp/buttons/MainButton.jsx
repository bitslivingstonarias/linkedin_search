import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/ContextPage';
import { ColorButton } from "../ui";


export const CustomizedButtons = ({message = ''}) => {

  const { Vals, setVals } = useContext( UserContext );
  const navigate = useNavigate();

  const ChangePage = () => {
    setVals({
      ...Vals,
      maxWidth: 500,
      title: 'Formulario de Registro',
      content: '',
    })
    navigate('/form');
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