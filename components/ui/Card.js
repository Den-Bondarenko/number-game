import { View, StyleSheet, Dimensions} from "react-native";

export default Card = ({children}) => {

    return (
        <View style = {styles.card}>{children}</View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        width: '80%',
        alignItems: 'center',
        margin: deviceWidth > 400 ? 18 : 36,
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
