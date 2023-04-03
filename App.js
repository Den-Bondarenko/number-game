import { StyleSheet, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();

  const pickedNumberHandler = (confirmedNumber) => setPickedNumber(confirmedNumber);

  let activeScreen = <GameStartScreen onPickedNumber = {pickedNumberHandler}/>

  if(pickedNumber) activeScreen = <GameScreen />;

  return (
    <View style = {styles.rootScreen}>
      <ImageBackground
        source = {require('./assets/pepe.png')}
        resizeMode = 'cover'
        style = {styles.rootScreen}
      >
        {activeScreen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#e6f5ee',
    flex: 1,
  }
});
