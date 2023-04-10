import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from "../components/game/GuessLogItem";

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();

    const marginTopDistance = height < 400 ? 30 : 100;

    const guessRoundsListLength = guessRounds.length;

    useEffect(() =>{
        if (currentGuess == userNumber) { //diferent type!!!
            onGameOver(guessRounds.length);
        }
    }, [currentGuess]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds((currentGuessRounds) => [newRndNum, ...currentGuessRounds]);
    };

    let content = (
        <>
            <View>
                <Card>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <InstructionText style = {styles.instructionText}>Higher or lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style = {styles.buttonContainer}>
                            <MainButton pressHandler = {comparisonHandler.bind(this, 'lower')}>
                                <Ionicons name = "md-remove" size={15}/>
                            </MainButton>
                        </View>
                        <View style = {styles.buttonContainer}>
                            <MainButton pressHandler = {comparisonHandler.bind(this, 'greater')}>
                            <Ionicons name = "md-add" size={15}/>
                            </MainButton>
                        </View>
                    </View>
                </Card>
            </View>
        </>
    );

    if (width > 400) {
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                <MainButton pressHandler = {comparisonHandler.bind(this, 'lower')}>
                        <Ionicons name = "md-remove" size={15}/>
                    </MainButton>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton pressHandler = {comparisonHandler.bind(this, 'greater')}>
                        <Ionicons name = "md-add" size={15}/>
                    </MainButton>
                </View>
            </>
        );
    }

    


    return (
        <View style = {[styles.gameScreen, {marginTop: marginTopDistance}]}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                    <FlatList
                        data = {guessRounds}
                        renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                        keyExtractor={(item) => item}
                    />
                </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },

    instructionText: {
        marginBottom: 12,
    },

    buttonsContainer: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonContainer: {
        flex: 1,
    },

    listContainer: {
        flex: 1,
        padding: 15,
    }
})