
import './styles.scss'

const Link = ({href, text, className = '', isTargetBlank = false}) => (
    <a
        className={`App-link ${className}`}
        href={href}
        target={isTargetBlank ? "_blank":''}
        rel="noopener noreferrer"
    >
        {text}
    </a>
)

export default Link;