import { StyleSheet } from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        minWidth: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 6
    },
    primary: {
        backgroundColor: theme.success,
    },
    secondary: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: theme.primary,
        borderWidth: 3,

    },
    success: {
        backgroundColor: theme.success,
    },
    text: {
        color: theme.contrastText,
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 18
    }
})

export default styles