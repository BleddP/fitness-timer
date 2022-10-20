import { StyleSheet } from "react-native";
import theme from "../../../theme";

const circleSize = 300
const innerCircleSize = 250
const translate = (circleSize - innerCircleSize) / 2

const styles = StyleSheet.create({
    circle: {
        position: 'relative',
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: theme.success,
        marginVertical: 24
     },
     inner: {
        position: 'absolute',
        width: innerCircleSize,
        height: innerCircleSize,
        borderRadius: circleSize / 2,
        backgroundColor: theme.background,
        transform: [{translateX: translate }, {translateY: translate}],
        justifyContent: 'center',
        alignItems: 'center'
     }
})

export default styles