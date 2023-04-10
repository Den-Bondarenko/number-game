import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 5,
        backgroundColor: '#ccd2eb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 2
    }
});