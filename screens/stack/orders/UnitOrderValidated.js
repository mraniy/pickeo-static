import {Image, StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons, FontAwesome5, Fontisto, MaterialCommunityIcons, FontAwesome, Entypo} from "@expo/vector-icons";
import {Rating} from "react-native-ratings";
import StyledLink from "../../../components/StyledLink";

const UnitOrderValidated = ({message, price, fee, status, expectedDeliveryDate, deliveryDate, traveler}) => {
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
                            <View style = {  {marginLeft:85}  }></View>
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
                            <View style = {  {marginLeft:25}  }></View>
                        </View>
                        : ""
                }
                <View style={ [GlobalStyles.viewRowContainer, {marginTop:6, marginLeft:10}]  }>
                    <Fontisto name="wallet" style={GlobalStyles.iconStyle}/>
                    <View style={ [GlobalStyles.viewColumnContainer] }>
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Total</Text>
                        <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{price+fee}E</Text>
                    </View>
                </View>
            </View>

            <View style={{marginBottom:4}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={[GlobalStyles.viewRowContainer,{marginLeft:0,marginTop:0, marginBottom:10}]}>
                <View style={ [GlobalStyles.viewRowContainer] }>
                    <Image
                        style={  {width:50, height:50, margin:10, marginLeft:10}  }
                        source={require('../../../assets/images/Profiles/profile1.png')}
                    />
                    <View style={ [GlobalStyles.viewColumnContainer] }>
                        <Text style={[GlobalStyles.textBold,{fontSize: 15, color:"#b63ca9", marginHorizontal:0, marginTop:10}]}>{traveler.firstName}</Text>
                        <Rating
                            showRoating={false}
                            imageSize={18}
                            ratingCount={5}
                            readonly={true}
                            startingValue={traveler.rating}
                            onFinishRating={this.ratingCompleted}
                            style={{width:90}}

                        />
                    </View>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:0, padding:0, marginTop:40}]}> ({traveler.ratingCount})</Text>
                </View>
                <View style={ [GlobalStyles.viewRowContainer, {marginTop:20, marginBottom:10, marginLeft:20}]  }>
                    <Entypo name="message"  style={[GlobalStyles.iconStyle,{marginLeft:0, paddingTop:0}]}/>
                    <StyledLink linkLabel={"Send message"} link={"Home"} smallFont={true} style={{marginLeft:5, marginTop:2}}/>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderValidated
