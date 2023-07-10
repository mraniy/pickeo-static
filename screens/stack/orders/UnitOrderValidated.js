import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons, FontAwesome5, Fontisto, MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons";

const UnitOrderValidated = ({message, price, fee, status, expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <View style={{marginTop: 5, marginBottom:10}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={ [GlobalStyles.viewRowContainer] }>

                {
                    status === "DELIVERED" ?
                        <View style={ [GlobalStyles.viewRowContainer, {marginTop:4, marginBottom:10}] }>
                            <FontAwesome name="shopping-bag" style={GlobalStyles.iconStyle}/>
                            <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>{status}</Text>
                            <View style = {  {marginLeft:65}  }></View>

                        </View>
                        : ""
                }


                {
                    status === "WAITING_FOR_DELIVERY" ?
                        <View style={ [GlobalStyles.viewRowContainer, {marginTop:6, marginBottom:10}]  }>
                            <FontAwesome5 name="box-open" style={[GlobalStyles.iconStyle, {paddingTop:8}]}/>
                            <View style={ [GlobalStyles.viewColumnContainer] }>
                                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>WAITING DELIVERY</Text>

                                <View style={ [GlobalStyles.viewRowContainer] }>
                                    <Text style={[GlobalStyles.textDate, {marginHorizontal:10, marginVertical: 0, paddingVertical:0}]}>{">> "+expectedDeliveryDate+""}</Text>
                                </View>

                            </View>

                        </View>
                        : ""
                }

                <Ionicons name="ellipsis-vertical" style={[GlobalStyles.iconStyle, {marginLeft:0, paddingTop:16, color:"grey", fontSize:20}]}/>

                <View style={ [GlobalStyles.viewRowContainer, {marginTop:6, marginLeft:10}]  }>
                    <Fontisto name="wallet" style={GlobalStyles.iconStyle}/>
                    <View style={ [GlobalStyles.viewColumnContainer] }>
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Total</Text>
                        <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{price+fee}E</Text>
                    </View>

                </View>


            </View>

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderValidated
