import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween( min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween( min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber})  {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style = {styles.gameScreen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>                
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