import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween( min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver})  {

    const initialGuess = generateRandomBetween( 1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    console.log(currentGuess);
    console.log(userNumber);


    useEffect(() =>{
        if (currentGuess == userNumber) { //diferent type!!!
            onGameOver();
        }
    }, [currentGuess]);

    function comparisonHandler(direction) { 
        // direction => "lower" , "greater"

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(
                "Don't lie", 
                "You know that this is wrong...",
                [{text: 'Sory!', style: 'cancel'}]
            )
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary)
        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
    };

    return (
        <View style = {styles.gameScreen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <MainButton pressHandler = {comparisonHandler.bind(this, 'lower')}>-</MainButton> 
                    <MainButton pressHandler = {comparisonHandler.bind(this, 'greater')}>+</MainButton>
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
    }
})