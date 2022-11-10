import Email from './Email';
import Name from './Name';
import Phone from './Phone';
import UserName from './UserName';
import Website from './Website';
import Address from './Address/';
import Company from './Company';

import './styles.css'

const User = ({id, email, name, phone, username, website, address, company}) => {
    return (
        <li className='User-item' key={id}>   
            <Name name={name}/>
            <UserName username={username}/>
            <Email email={email}/>
            <Website website={website}/>
            <Address {...address}/>
            <Company {...company}/>
            <Phone phone={phone}/>
        </li>
    )
}

export default User;