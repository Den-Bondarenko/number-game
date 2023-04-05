import { StyleSheet, View, SafeAreaView} from 'react-native';
import { useState} from 'react';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
 
  const pickedNumberHandler = (confirmedNumber) => {
    setPickedNumber(confirmedNumber);
    setGameIsOver(false);
  };

  function gameOverHandler() {
    setGameIsOver(true);
  };

  function startNewGameHandler() {
    setPickedNumber(null);
    setGuessRounds(0);
  };

  let activeScreen = <GameStartScreen onPickedNumber = {pickedNumberHandler}/>

  if(pickedNumber) activeScreen = <GameScreen userNumber = {pickedNumber} onGameOver = {gameOverHandler}/>;
  if(gameIsOver && pickedNumber) {
    activeScreen = <GameOverScreen 
      userNumber={pickedNumber} 
      roundsNum={guessRounds} 
      onStartNewGame={startNewGameHandler}
    />
  };

  return (
    <View style = {styles.rootScreen}>
      <SafeAreaView style = {styles.rootScreen}>
        {activeScreen}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#e6f5ee',
    flex: 1,
  }
});
