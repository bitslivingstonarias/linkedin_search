

export const vals = ['Nombre completo','Descripción personal', 'URL linkedIn']

export const formData = {
    FullName: '',
    Description: '',
    URL: ''
  }
  
export const formValidations = {
    URL: [ (value) => value.includes('https://'), 'La url debe de tener una https://'],
    Description: [ (value) => value.length >= 6, 'El Description debe de tener más de 6 letras.'],
    FullName: [ (value) => value.length >= 4, 'El nombre es obligatorio.'],
  }