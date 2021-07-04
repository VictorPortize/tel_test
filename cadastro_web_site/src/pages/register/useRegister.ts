import { useHistory } from 'react-router-dom'

export default function useRegister(){
    const { replace,push } = useHistory();
    return {
        replace,push
    }
}