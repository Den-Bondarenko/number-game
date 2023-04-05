import { View, StyleSheet } from "react-native";

export default Card = ({children}) => {
    return (
        <View style = {styles.card}>{children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        margin: 25,
        padding: 16,
        backgroundColor: '#ccd2eb',
        borderRadius: 10,
        elevation: 9, //Android
        shadowColor: 'black', //IOS
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 9,
        shadowOpacity: 0.25,
    },
});
