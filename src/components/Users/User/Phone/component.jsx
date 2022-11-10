import './styles.css'

const Phone = ({id, phone}) => {
    return (
            <p key={id}>
                <span>Phone:</span>  {phone}
            </p>
    )
}

export default Phone;