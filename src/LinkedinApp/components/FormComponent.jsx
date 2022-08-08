
import { FilledInput, FormControl, InputLabel, TextField } from '@mui/material';
import { useForm } from "../hooks";
import { vals, formData, formValidations } from "../data/Fieldsdata";
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/ContextPage';


export const FormComponent = () => {

  const { 
    URL, FullName, Description, onInputChange,
    isFormValid, URLValid, FullNameValid, DescriptionValid, 
  } = useForm( formData, formValidations );

  const { Vals, setVals } = useContext( UserContext );

  useEffect(() => {
    setVals({
      ...Vals,
      isFormValid,
      FullName,
      Description,
      URL
    })
  }, [isFormValid]);

  return (
      <>
        <FormControl key={vals[0]} fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-FullName">{vals[0]}</InputLabel>
          <FilledInput
            id="filled-adornment-FullName"
            name="FullName"
            value={ FullName }
            onChange={ onInputChange }
            error={ !!FullNameValid }
          />
        </FormControl>
        <FormControl key={vals[1]} fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-Description">{vals[1]}</InputLabel>
          <FilledInput
            id="filled-adornment-Description"
            name="Description"
            value={ Description }
            onChange={ onInputChange }
            error={ !!DescriptionValid }
          />
        </FormControl>
        <FormControl key={vals[2]} fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-URL">{vals[2]}</InputLabel>
          <FilledInput
            id="filled-adornment-URL"
            name="URL"
            value={ URL }
            onChange={ onInputChange }
            error={ !!URLValid }
          />
        </FormControl>
      </>
  );
}
