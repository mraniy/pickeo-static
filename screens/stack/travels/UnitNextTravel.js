import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";

const UnitNextTravel = ({fromCity, toCity, travelDate}) => {
    return (
        <View style={styles.window}>
            <Text style={styles.route}>{fromCity + '  -->  ' +toCity}</Text>
            <Text style={styles.routeDate}>{'' +travelDate}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    window: {
        marginTop: 12,
        marginBottom: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: "97%"

    },
    //16161D
    route: {
        color: "#16161D",
        backgroundColor: 'white',
        fontSize: 15,
        fontWeight: "600",
        marginHorizontal: 20,
        marginTop: 10
    },
    //357b9c 0047AB 00008B 357b9c
    routeDate: {
        color: "#357b9c",
        fontWeight: "400",
        backgroundColor: 'white',
        padding: 10,
        fontSize: 14,
        marginHorizontal: 15,
        marginVertical: 0
    }
});

export default UnitNextTravel
