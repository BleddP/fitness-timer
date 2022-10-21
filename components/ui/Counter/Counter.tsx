import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"

// Styles
import styles from './styles'

const Counter = ({ count }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current
    const scale = useRef(new Animated.Value(0)).current


    const fadeIn = Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }
    )

    const scaleIn = Animated.timing(
        scale,
        {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.elastic(2)
        }
    )


    useEffect(() => {
        fadeIn.reset()
        scaleIn.reset()

        fadeIn.start()
        scaleIn.start()
    }, [count])

    return <Animated.Text style={{
        ...styles.counter,
        opacity: fadeAnim,
        transform: [{ scale: scale }]

    }}>{count}</Animated.Text>
}

export default Counter