import Swal from 'sweetalert2';
import { postuserApi } from "../api";


const SendUser = async({fullname, description, url}) => {

    try {
        const { data } = await postuserApi.post('/auth/new',{fullname, description, url});
        console.log(data)
        Swal.fire('Usuario Registrado', 'sucess'); 
    } catch (error) {
        setTimeout(() => {
            console.log(error);
            Swal.fire('Error en registro', error.response.data.msg, 'error');
                return;
        }, 10)
        
    }
};

export default SendUser;
