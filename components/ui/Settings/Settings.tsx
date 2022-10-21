import { View, ScrollView } from "react-native"
import { Picker } from '@react-native-picker/picker'

// Components
import Header from "../../typography/Header/Header"

// Styles
import styles from './styles'
import theme from "../../../theme"

const Settings = ({ settings, setSettings }) => {

    const createArray = (number: number) => Array.from(Array(number), (x, i) => i)

    const sets = createArray(10)
    const duration = createArray(60)
    const rest = createArray(60)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header color={theme.background}>Sets</Header>
                <Picker
                    style={styles.picker}
                    selectedValue={settings.sets}
                    onValueChange={(itemValue, itemIndex) =>
                        setSettings('sets', itemValue)
                    }>
                    {sets.map((item) => <Picker.Item key={item} label={item.toString()} value={item} />)}
                </Picker>

                <Header color={theme.background}>Duration</Header>
                <Picker
                    style={styles.picker}
                    selectedValue={settings.duration}
                    onValueChange={(itemValue, itemIndex) =>
                        setSettings('duration', itemValue)
                    }>
                    {duration.map((item) => <Picker.Item key={item} label={item.toString()} value={item} />)}
                </Picker>

                <Header color={theme.background}>Rest</Header>
                <Picker
                    style={styles.picker}
                    selectedValue={settings.rest}
                    onValueChange={(itemValue, itemIndex) =>
                        setSettings('rest', itemValue)
                    }>
                    {rest.map((item) => <Picker.Item key={item} label={item.toString()} value={item} />)}
                </Picker>

            </View>
        </ScrollView>
    )
}

export default Settings