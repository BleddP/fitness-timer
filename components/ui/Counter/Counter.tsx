import { useEffect, useRef } from "react"
import { Animated } from "react-native"

// Styles
import styles from './styles'

const Counter = ({ count }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current
    const height = useRef(new Animated.Value(12)).current
    const scale = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            height,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            scale,
            {
                toValue: 1.2,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }

    const removeFade = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 1,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            height,
            {
                toValue: 0,
                duration: 12,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            scale,
            {
                toValue: 1,
                duration: 0,
                useNativeDriver: true
            }
        ).start();
    }

    useEffect(() => {
        removeFade()
        setTimeout(() => {
            fadeIn()
        }, 25);
    }, [count])

    return <Animated.Text key={count} style={{ 
        ...styles.counter,
        opacity: fadeAnim,
        transform: [{translateY: height}, {scale: scale}]
    
    }}>{count}</Animated.Text>
}

export default Counter