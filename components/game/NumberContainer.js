import { View, Text, StyleSheet, Dimensions } from "react-native";

export default NumberContainer = ({children}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.number}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: deviceWidth < 380 ? 12 : 35,
        fontWeight: 'bold',
    }
})