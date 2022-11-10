import './styles.css'

const Name = ({id, name}) => {
    return (
            <h2 key={id}>
                {name}
            </h2>    
    )
}

export default Name;