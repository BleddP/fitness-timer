import { View } from "react-native"

// Styles
import theme from "../../../theme"
import styles from "./styles"

const Background = ({children}) => {

    return (
        <View style={{...styles.container, backgroundColor: theme.background}}>
            {children}
        </View>
    )
}

export default Background