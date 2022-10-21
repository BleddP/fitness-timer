import { useEffect, useRef } from "react"
import { Animated } from "react-native"

// Styling
import styles from './styles'
import theme from "../../../theme"

const Header = ({children, color = theme.contrastText, fadeIn = false}) => {

    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (fadeIn) {
            Animated.timing(
                opacity,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start()
        }
    }, [])
    
    return <Animated.Text style={{...styles.header, color, opacity: fadeIn ? opacity : 1}}>{children}</Animated.Text>
}

export default Header