import './styles.css'

const Website = ({id, website}) => {
    return (
            <p key={id}>
                <span>Website:</span>  {website}
            </p>
    )
}

export default Website;