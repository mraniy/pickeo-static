import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import StyledLinkSmall from "../../../components/StyledLinkSmall";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitNextTravel = ({fromCity, toCity, travelDate, matchingOrdersCount}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={styles.route}>{fromCity + '  -->  ' +toCity}</Text>
            <Text style={styles.routeDate}>{'' +travelDate}</Text>
            {matchingOrdersCount !==0 && (
                <StyledLinkSmall link={"MatchingOrdersByTravel"} linkLabel={"-> " + matchingOrdersCount + " orders"} style={GlobalStyles.linkContainer}/>
            )}
            {matchingOrdersCount ===0 && (
                <Text style={GlobalStyles.textGreyed}>No matching orders yet</Text>
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
    }

});

export default UnitNextTravel
