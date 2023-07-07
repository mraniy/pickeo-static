import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import StyledLink from "../../../components/StyledLink";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitNextTravel = ({fromCity, toCity, travelDate, matchingOrdersCount}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={styles.route}>{fromCity + '  -->  ' +toCity}</Text>
            <Text style={styles.routeDate}>{'' +travelDate}</Text>
            {matchingOrdersCount !==0 && (
                <StyledLink link={"MatchingOrdersByTravel"} linkLabel={"-> " + matchingOrdersCount + " matching orders"} style={styles.linkContainer}/>
            )}
            {matchingOrdersCount ===0 && status === 'WAITING_FOR_TRAVELER' && (
                <Text style={styles.element}>No matching orders yet</Text>
            )}
        </View>
    )
};

const styles = StyleSheet.create({

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
    },
    linkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 6,
        marginTop: 4,
        width: '40%',
        alignItems: 'center'
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

export default UnitNextTravel
