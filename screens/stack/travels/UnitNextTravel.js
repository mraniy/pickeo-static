import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import StyledLink from "../../../components/StyledLink";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons} from "@expo/vector-icons";

const UnitNextTravel = ({fromCity, toCity, travelDate, matchingOrdersCount}) => {
    return (
        <View style={  [GlobalStyles.window, {backgroundColor:"#FDFDFC"}]  }>
            <View style={GlobalStyles.viewRowContainer}>
                <Text style={  [styles.route]  }>{fromCity}</Text>
                <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"10%", color:"#0897B4"}]}/>
                <Text style={styles.route}>{toCity}</Text>
            </View>

            <View style={{marginVertical: 10}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={ {backgroundColor: "white"} }>
                <View style={GlobalStyles.viewRowContainer}>
                    <Ionicons name="calendar" style={GlobalStyles.iconStyle}/>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 10}]}>On</Text>
                    <Text style={styles.routeDate}>{'' +travelDate}</Text>
                </View>

                <View style={GlobalStyles.viewRowContainer}>
                    <Ionicons name="cart" style={GlobalStyles.iconStyle}/>
                    {matchingOrdersCount !==0 && (
                        <StyledLink link={"MatchingOrdersByTravel"} linkLabel={"-> " + matchingOrdersCount + " orders"} style={GlobalStyles.linkContainer}/>
                    )}
                    {matchingOrdersCount ===0 && (
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 8}]}>No matching orders yet</Text>
                    )}
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({

    //16161D
    route: {
        color: "#16161D",
        fontSize: 15,
        fontWeight: "600",
        marginHorizontal: 20,
        marginTop: 10,
        width: 85
    },
    //357b9c 0047AB 00008B 357b9c
    routeDate: {
        color: "#357b9c",
        fontWeight: "400",
        paddingVertical: 12,
        fontSize: 14,
        marginHorizontal: 48,
        marginVertical: 0
    }
});

export default UnitNextTravel
