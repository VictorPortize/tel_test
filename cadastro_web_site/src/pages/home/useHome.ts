import { useHistory } from 'react-router-dom'

export default function useHome(){
    const { replace, push } = useHistory();
    return {
        replace,
        push
    }
}