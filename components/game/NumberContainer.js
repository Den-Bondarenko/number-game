import { View, Text, StyleSheet } from "react-native";

export default NumberContainer = ({children}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.number}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 24,
        margin: 24,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 35,
        fontWeight: 'bold',
    }
})