import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import StyledLink from "../../../components/StyledLink";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons, FontAwesome, Foundation} from "@expo/vector-icons";

const UnitNextTravel = ({fromCity, toCity, travelDate, matchingOrdersCount}) => {
    return (
        <View style={  [GlobalStyles.window, {backgroundColor:"#FDFDFC"}]  }>
            <View style={ [GlobalStyles.viewRowContainer] }>
                <Text style={  [GlobalStyles.textRoute, {marginLeft:20}]  }>{fromCity}</Text>
                <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"10%", color:"#0897B4"}]}/>
                <Text style={GlobalStyles.textRoute}>{toCity}</Text>
            </View>

            <View style={{marginTop: 10, marginBottom:5}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={GlobalStyles.viewRowContainer}>
                <Ionicons name="calendar" style={GlobalStyles.iconStyle}/>
                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>On</Text>
                <Text style={  [GlobalStyles.textDate, { marginHorizontal: 2}]  }>{'' +travelDate}</Text>
            </View>

            <View style={GlobalStyles.viewRowContainer}>
                <FontAwesome name="shopping-cart" style={GlobalStyles.iconStyle}/>
                {matchingOrdersCount !==0 && (
                    <StyledLink link={"MatchingOrdersByTravel"} linkLabel={"-> " + matchingOrdersCount + " orders matched"} style={GlobalStyles.linkContainer} smallFont={true}/>
                )}
                {matchingOrdersCount ===0 && (
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 8}]}>No matching orders yet</Text>
                )}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({

    //16161D


});

export default UnitNextTravel
