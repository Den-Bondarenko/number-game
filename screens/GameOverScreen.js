import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import MainButton from "../components/ui/MainButton";

function GameOverScreen({roundsNum, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    const marginTopDistance = height < 400 ? 30 : 100;
    return (
        <View style = {[styles.screen, {marginTop: marginTopDistance}]}>
            <Title>Game is over!</Title>
            <Text style={styles.SummaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNum}</Text> {''}
                rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <MainButton pressHandler={onStartNewGame}>Start New Game</MainButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    SummaryText: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 25,
    },

    highlight: {
    }
     
});