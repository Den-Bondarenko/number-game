import { View, Text, Pressable, StyleSheet } from "react-native";

export default MainButton = (props) => {

    return (
        <View style = {styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={props.pressHandler}
                android_ripple={{ color: '#2a8257'}}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        marginHorizontal: 5,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 2,
    },

    buttonInnerContainer: {
        backgroundColor: '#36b376',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    buttonText: {
        textAlign: 'center',
        color: 'white'
    },

    //for IOS
    pressed: {
        opacity: 0.75,
    }
})