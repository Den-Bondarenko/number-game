import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import MainButton from "../components/MainButton";

export default GameStartScreen = ({onPickedNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (number) => setEnteredNumber(number);

    const resetNumberHandler = () => setEnteredNumber('');

    console.log(enteredNumber);

    const confirmNumberHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99.',
                [{text: 'Ok', style: 'destructive', pressHandler: resetNumberHandler}]
            );
            return;
        }

        onPickedNumber(enteredNumber);
    };


    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.numberInput}
                maxLength = {2}
                keyboardType = "number-pad"
                autoCapitalize = "none"
                autoCorrect = {false}
                onChangeText = {numberInputHandler}
                value = {enteredNumber}
            />
            <View style = {styles.buttonsContainer}>
                <View style = {styles.buttonCintainer}>
                    <MainButton pressHandler = {resetNumberHandler}>Reset</MainButton>
                </View>
                <View style = {styles.buttonCintainer}>
                    <MainButton pressHandler = {confirmNumberHandler}>Confirm</MainButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
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
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    buttonCintainer: {
        flex: 1,
    }
});