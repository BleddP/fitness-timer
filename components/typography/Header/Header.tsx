import { Text } from "react-native"

// Styling
import styles from './styles'

const Header = ({children}) => {
    return <Text style={styles.header}>{children}</Text>
}

export default Header