import { StyleSheet, Text, View } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <GameStartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
});
