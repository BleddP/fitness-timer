import { StyleSheet } from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.success,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        minWidth: 250,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: theme.contrastText,
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 18
    }
})

export default styles