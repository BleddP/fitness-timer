import { View, Text, TouchableOpacity } from "react-native"

// Styles
import styles from './styles'

const Button = ({children, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.container}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button