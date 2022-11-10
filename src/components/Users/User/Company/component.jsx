import './styles.css'

import Bs from './Bs';
import CatchPhrase from './CatchPhrase';
import Name from './Name';

const Company = ({bs, catchPhrase, name}) => {
    return (
         <ul>
            <span>Company: </span>  
            <Bs bs = {bs}/>
            <CatchPhrase catchPhrase = {catchPhrase}/>
            <Name name = {name}/>
         </ul>           
    )
}

export default Company;