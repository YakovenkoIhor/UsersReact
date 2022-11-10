import './styles.css'

import Lat from './Lat';
import Lng from './lng/';

const Geo = ({lat, lng}) => {
    return (
        <ul>
            <span>Geo: </span>  
            <Lat lat={lat}/>
            <Lng lng={lng}/>
        </ul>      
    )
}

export default Geo;