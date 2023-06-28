import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";

const UnitPastTravel = ({fromCity, toCity, travelDate}) => {
    return (
        <View style={styles.window}>
            <Text style={styles.element}>{fromCity}</Text>
            <Text style={styles.element}>{toCity}</Text>
            <Text style={styles.element}>{travelDate}</Text>
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
    element: {
        color: "#708090",
        backgroundColor: 'white',
        padding: 4,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 4
    }
});

export default UnitPastTravel
