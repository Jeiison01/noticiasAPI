import { useContext} from 'react'
import NoticiasContext from '../context/NoticasProvider'

const useNoticas = () => {
    return useContext(NoticiasContext)
}

export default useNoticas;