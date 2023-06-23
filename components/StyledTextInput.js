import {Text, TextInput, TouchableOpacity, View} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
import React from "react";
const StyledTextInput = ({placeholder, value, onChangeText, secure}) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secure}
            style={GlobalStyles.input}
        />

    )
}
export default StyledTextInput
