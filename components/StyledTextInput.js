import {StyleSheet, TextInput} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
import React from "react";

const StyledTextInput = ({placeholder, value, onChangeText, secure, multiline}) => {

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secure}
            style={multiline ? styles.textArea : GlobalStyles.input}
        />

    )
}
export default StyledTextInput

const styles = StyleSheet.create({
    textArea: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '100%',
        height: 200,
        textAlignVertical: 'top'
    }
})
