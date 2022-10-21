import { View, Text, TouchableOpacity } from "react-native"

// Styles
import styles from './styles'

const Button = ({children, onClick, variant = 'primary'}) => {

    if (variant === 'secondary') {
        return (
            <TouchableOpacity onPress={onClick}>
                <View style={{...styles.button, ...styles.secondary}}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={{...styles.button, ...styles.primary}}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button