import './styles.css'

const UserName = ({id, username}) => {
    return (
            <p key={id}>
                <span>UserName:</span>  {username}
            </p>
    )
}

export default UserName;