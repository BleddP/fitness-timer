import { View, Text } from "react-native"
import { Picker } from '@react-native-picker/picker'

// Styles
import styles from './styles'

const Settings = ({settings, setSettings}) => {

    const createArray = (number: number) => Array.from(Array(number),(x,i)=>i)

    const sets = createArray(10)
    const duration = createArray(60)
    const rest = createArray(60)

    return (
        <View>
            <Text>Sets</Text>
            <Picker
                style={styles.picker}
                selectedValue={settings.sets}
                onValueChange={(itemValue, itemIndex) =>
                    setSettings('sets', itemValue)
                }>
                {sets.map((item) => <Picker.Item key={item} label={item.toString()} value={item} />)}
            </Picker>
            
            <Text>Duration</Text>
            <Picker
                style={styles.picker}
                selectedValue={settings.duration}
                onValueChange={(itemValue, itemIndex) =>
                    setSettings('duration', itemValue)
                }>
                {duration.map((item) => <Picker.Item key={item} label={item.toString()} value={item} />)}
            </Picker>
            
            <Text>Rest</Text>
            <Picker
                style={styles.picker}
                selectedValue={settings.rest}
                onValueChange={(itemValue, itemIndex) =>
                    setSettings('rest', itemValue)
                }>
                {rest.map((item) => <Picker.Item key={item} label={item.toString()} value={item} />)}
            </Picker>
        </View>
    )
}

export default Settings