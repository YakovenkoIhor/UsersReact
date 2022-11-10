import './styles.css'

const Email = ({id, email}) => {
    return (
            <p key={id}>
                <span>Email:</span>  {email}
            </p>
    )
}

export default Email;