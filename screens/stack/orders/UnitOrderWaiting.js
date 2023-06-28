import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";

const UnitOrderWaiting = ({message, totalPrice, status}) => {
    return (
        <View style={styles.window}>
            <Text style={styles.message}>{message}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
            <Text style={styles.boldElement}>{totalPrice}</Text>
            <Text style={styles.element}>{status}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    window: {
        marginTop: 15,
        marginBottom: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: "97%"

    },
    message: {
        color: "#3D3C3A",
        backgroundColor: 'white',
        padding: 20,
        fontSize: 15,
        marginHorizontal: 5,
        marginVertical: 0
    },
    element: {
        color: "#708090",
        backgroundColor: 'white',
        padding: 4,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 4
    },
    boldElement: {
        color: "#357b9c",
        fontWeight: "700",
        backgroundColor: 'white',
        padding: 5,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 0
    }
});


export default UnitOrderWaiting
