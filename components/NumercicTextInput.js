import {StyleSheet, TextInput} from "react-native";
import React from "react";

const NumericTextInput = ({placeholder, value, onChangeText, style2, editable}) => {

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType='numeric'
            editable={editable}
            style={  [styles.numeric, style2  ] }
        />

    )
};
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
});
