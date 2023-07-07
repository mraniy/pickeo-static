import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOfferByOrder = ({fee, date,traveler}) => {
    return (
        <View style={GlobalStyles.window}>

            <Text style={styles.boldElement}>{fee}</Text>
            <Text style={styles.element}>{date}</Text>
            <Text style={styles.element}>{traveler.firstName}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
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


export default UnitOfferByOrder
