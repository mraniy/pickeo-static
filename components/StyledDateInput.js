import {StyleSheet, TextInput} from "react-native";
import React from "react";

const StyledDateInput = ({placeholder, value, onChangeText}) => {

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={styles.dateInput}
            editable={false}
        />

    )
}
export default StyledDateInput

const styles = StyleSheet.create({
    dateInput: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '50%',
        color: '#808080'

    }
})
