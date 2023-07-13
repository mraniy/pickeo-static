import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import StyledLink from "../../../components/StyledLink";
import GlobalStyles from "../../styles/GlobalStyles";
import {Foundation, Fontisto, MaterialCommunityIcons, FontAwesome5, FontAwesome} from "@expo/vector-icons";

const UnitOrderWaiting = ({message, price, fee, status, offersCount}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <View style={{marginTop: 5, marginBottom:10}}>
                <HorizontalLineSeparator/>
            </View>

            {status ==="WAITING_FOR_VALIDATION" && (
                <View style={ [GlobalStyles.viewRowContainer] }>
                    <Foundation name="magnifying-glass" style={  [GlobalStyles.iconStyle, {color:"#C520CB"}]  }/>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 9}]}>{status}</Text>
                </View>
            )}


            <View style={ [GlobalStyles.viewRowContainer, {marginBottom:10}] }>
                <FontAwesome name="shopping-bag" style={GlobalStyles.iconStyle}/>
                <View style={ [GlobalStyles.viewColumnContainer, {marginRight:90}] }>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Price</Text>
                    <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{price}E</Text>
                </View>

                <MaterialCommunityIcons name="hand-coin"  style={GlobalStyles.iconStyle}/>
                <View style={ [GlobalStyles.viewColumnContainer] }>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Traveller tip</Text>
                    <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{fee}E</Text>
                </View>

            </View>



            {status ==="WAITING_FOR_TRAVELER" && (
                <View style={ [GlobalStyles.viewRowContainer] }>
                    <Fontisto name="suitcase" style={  [GlobalStyles.iconStyle, {paddingBottom:10, color:'#B43C6C'}]  }/>
                    {offersCount !==0 && (
                        <StyledLink link={"OffersByOrder"} linkLabel={"-> " + offersCount + " offers"} style={GlobalStyles.linkContainer} smallFont={true}/>
                    )}
                    {offersCount ===0 && status === 'WAITING_FOR_TRAVELER' && (
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 8, paddingLeft:0}]}>No offers yet</Text>
                    )}

                </View>
            )}

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderWaiting
