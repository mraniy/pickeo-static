import {StyleSheet, TextInput} from "react-native";
import React from "react";

const NumericTextInput = ({placeholder, value, onChangeText}) => {

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType='numeric'
            style={styles.numeric}
        />

    )
}
export default NumericTextInput

const styles = StyleSheet.create({
    numeric: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '20%',
    }
})
