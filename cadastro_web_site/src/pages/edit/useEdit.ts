import { useHistory } from 'react-router-dom'

export default function useEdit(){
    const { replace,push } = useHistory();
    return {
        replace,push
    }
}