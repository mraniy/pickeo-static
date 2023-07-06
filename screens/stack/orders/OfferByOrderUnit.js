import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";

const OfferByOrderUnit = ({fee, date,traveler}) => {
    return (
        <View style={styles.window}>

            <Text style={styles.boldElement}>{fee}</Text>
            <Text style={styles.element}>{date}</Text>
            <Text style={styles.element}>{traveler.firstName}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
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
    },
    linkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 6,
        marginTop: 4,
        width: '40%',
        alignItems: 'center'
    }
});


export default OfferByOrderUnit
