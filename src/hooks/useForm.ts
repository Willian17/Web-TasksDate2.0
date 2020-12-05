import {useState} from 'react'

 function useForm(initialValues: any){
    const [values, setValues] = useState(initialValues);
    
    function setValue(chave: string, valor?: any) {
        setValues({ ...values, [chave]: valor });
    }
    
    function handleChangeValues(event: any) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value,
            );
        }
        function clearForm(){
            setValue(initialValues)
        }

        return {
            values,
            handleChangeValues,
            clearForm
        }
    }

export default useForm