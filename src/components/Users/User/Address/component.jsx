import './styles.css'

import City from './City';
import Street from './Street';
import Suite from './Suite';
import Zipcode from './Zipcode';
import Geo from './Geo';

const Address = ({city, geo, street, suite, zipcode}) => {
    return (
         <ul>
            <span>Address: </span>  
            <City city = {city}/>
            <Geo {...geo}/>
            <Street street = {street}/>
            <Suite suite = {suite}/>
            <Zipcode zipcode = {zipcode}/>
         </ul>           
    )
}

export default Address;