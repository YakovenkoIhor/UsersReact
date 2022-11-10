import User from './User';

import data from './mockData';

import './styles.css'

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <ul className='User-list'>
                {data.map((user) => (
                    <User key ={user.id}
                        {...user}
                />
            ))}
            </ul>
        </div>
    )
}

export default Users;