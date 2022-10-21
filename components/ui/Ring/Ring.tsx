import { useEffect, useRef } from "react"
import { View, Animated } from "react-native"

// Components
import Counter from "../Counter"

// Styles
import styles from './styles'
import theme from "../../../theme"

const Ring = ({ count, isResting }) => {

    const color = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            color,
            {
                toValue: isResting ? 100 : 0,
                duration: 1000,
                useNativeDriver: false
            }
        ).start()
    }, [isResting])

    return (
        <Animated.View style={{
            ...styles.circle,
            backgroundColor: color.interpolate({
                inputRange: [0, 100],
                outputRange: [theme.success, theme.warning]
            })
        }}>
            <View style={styles.inner}>
                <Counter count={count} />
            </View>
        </Animated.View>
    )
}

export default Ring