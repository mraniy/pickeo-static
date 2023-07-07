import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOfferByOrder = ({fee, date,traveler}) => {
    return (
        <View style={GlobalStyles.window}>

            <Text style={GlobalStyles.textBold}>{fee}</Text>
            <Text style={GlobalStyles.textGreyed}>{date}</Text>
            <Text style={GlobalStyles.textGreyed}>{traveler.firstName}</Text>
            <HorizontalLineSeparator imageName={'grey-line.png'}/>
        </View>
    )
};

const styles = StyleSheet.create({
});


export default UnitOfferByOrder
