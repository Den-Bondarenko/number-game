import { StyleSheet, View, SafeAreaView} from 'react-native';
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
