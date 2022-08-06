import { CustomizedButtons } from '../buttons';
import { StyleHook } from "../hooks/StyleHook";


export const MainPage = () => {

    return (
      <StyleHook>
          <h1 className='animate__animated animate__backInLeft'> Bienvenidos a Linkedin Search</h1>
            <CustomizedButtons
              message={'Ingresar'}
            />
      </StyleHook>
    )
  }