import { useHistory } from 'react-router-dom'

export default function useLogin(){
    const { replace } = useHistory();
    return {
        replace
    }
}