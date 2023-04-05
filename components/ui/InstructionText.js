import { Text, StyleSheet } from "react-native";

export default instructionText = ({children, style}) => {
    return (
        <Text style = {[styles.instructionText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 20,
    },
});