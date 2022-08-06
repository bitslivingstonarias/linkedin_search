import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';


  
export const ColorStyleButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor: blue[200],
    '&:hover': {
      backgroundColor: blue[100],
    },
  }));