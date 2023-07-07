import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOrderValidated = ({message, totalPrice, status, expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.annonce}>{message}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
            <Text style={styles.boldElement}>{totalPrice}E</Text>
            <Text style={styles.element}>{status}</Text>
            {expectedDeliveryDate && !deliveryDate && (
                <Text style={styles.element}>Expected delivery date&nbsp;&nbsp;
                    <Text style={styles.dateElement}>{expectedDeliveryDate}</Text>
                </Text>
            )}
            {deliveryDate && (
                <Text style={styles.element}>Delivered on&nbsp;&nbsp;
                    <Text style={styles.dateElement}>{deliveryDate}</Text>
                </Text>
            )}

        </View>
    )
};

const styles = StyleSheet.create({

    element: {
        color: "#708090",
        backgroundColor: 'white',
        padding: 4,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 4
    },
    dateElement: {
        color: "#141e83",
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

export default UnitOrderValidated
