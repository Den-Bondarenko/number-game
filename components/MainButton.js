import { View, Text, Touchable } from "react-native";

export default MainButton = (props) => {
    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    );
}