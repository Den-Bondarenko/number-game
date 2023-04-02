import { View, TextInput, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";

export default GameStartScreen = () => {
    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.numberInput}
                maxLength = {2}
                keyboardType = "number-pad"
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <View>
                <MainButton>Reset</MainButton>
                <MainButton>Confirm</MainButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 25,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#ccd2eb',
        borderRadius: 10,
        elevation: 9, //Android
        shadowColor: 'black', //IOS
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 9,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomColor: '#4e326e',
        borderBottomWidth: 2,
        color: '#4e326e',
        marginVertical: 8,
        textAlign: 'center',
    }
});