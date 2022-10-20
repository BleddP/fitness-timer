import { View } from "react-native"

// Components
import Counter from "../Counter"

import styles from './styles'

const Ring = ({count, color}) => {
    return (
        <View style={{...styles.circle, backgroundColor: color}}>
            <View style={styles.inner}>
                <Counter count={count}/>
            </View>
        </View>
    )
}

export default Ring