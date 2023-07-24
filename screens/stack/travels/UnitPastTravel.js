import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons} from "@expo/vector-icons";
import StyledLink from "../../../components/StyledLink";

const UnitPastTravel = ({fromCity, toCity, travelDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <View style={GlobalStyles.viewRowContainer}>
                <Text style={  [GlobalStyles.textRoute, {marginLeft:20}]  }>{fromCity}</Text>
                <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"10%", color:"#0897B4"}]}/>
                <Text style={GlobalStyles.textRoute}>{toCity}</Text>
            </View>

            <View style={{marginTop: 10, marginBottom:6}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={GlobalStyles.viewRowContainer}>
                <Ionicons name="calendar" style={GlobalStyles.iconStyle}/>
                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>On</Text>
                <Text style={  [GlobalStyles.textDate, { marginHorizontal: 2}]  }>{'' +travelDate}</Text>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({

});

export default UnitPastTravel
