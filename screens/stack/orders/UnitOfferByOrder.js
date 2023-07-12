import {Image, StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledButton from "../../../components/StyledButton";
import StyledLink from "../../../components/StyledLink";
import { Rating } from 'react-native-ratings';
import {Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import VerticalLineSeparator from "../../../components/VerticalLineSeparator";

const UnitOfferByOrder = ({fee, date,traveler, fromCity, toCity}) => {

    return (
        <View style={GlobalStyles.window}>

            <View style={[GlobalStyles.viewRowContainer,{marginLeft:0}]}>

                <View style={ [GlobalStyles.viewRowContainer] }>
                    <Image
                        style={  {width:50, height:50, margin:10}  }
                        source={require('../../../assets/images/Profiles/profile1.png')}

                    />
                    <View style={ [GlobalStyles.viewColumnContainer] }>
                        <Text style={[GlobalStyles.textBold,{fontSize: 15, color:"#b63ca9", marginHorizontal:0, marginTop:10}]}>{traveler.firstName}</Text>
                        <Rating
                            showRating={false}
                            imageSize={18}
                            ratingCount={5}
                            readonly={true}
                            onFinishRating={this.ratingCompleted}
                            style={{width:90}}
                        />
                    </View>
                </View>


                <View style={ [GlobalStyles.viewRowContainer, {marginTop:6, marginBottom:10}]  }>
                    <FontAwesome name="shopping-cart"  style={GlobalStyles.iconStyle}/>
                    <View style={ [GlobalStyles.viewColumnContainer] }>
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Buys for you</Text>
                        <View style={ [GlobalStyles.viewRowContainer] }>
                            <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, paddingVertical:0}]}>{fee}E </Text>

                        </View>
                    </View>
                </View>
            </View>

            <HorizontalLineSeparator/>


            <View style={GlobalStyles.viewColumnContainer}>
                <View style={GlobalStyles.viewRowContainer}>
                    <Text style={[GlobalStyles.textRoute,{fontSize: 14, fontWeight:700, color:"#B4483C", marginHorizontal:0, marginTop:10}]}>{fromCity}</Text>
                    <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"18%", color:"#0897B4", marginLeft:10}]}/>
                    <Text style={[GlobalStyles.textRoute,{fontSize: 14, fontWeight:700, color:"#B4483C", marginHorizontal:0, marginTop:10}]}>{toCity}</Text>
                </View>
                <View style={ [GlobalStyles.viewRowContainer, {marginTop:0, marginBottom:10}]  }>
                    <Ionicons name="calendar" style={[GlobalStyles.iconStyle, {marginLeft:0, paddingTop:0}]}/>
                    <Text style={[GlobalStyles.textDate, {marginHorizontal:10, marginVertical: 4, paddingVertical:0}]}>{date} </Text>
                </View>
            </View>













            <View style={ [GlobalStyles.viewRowContainer, {marginLeft:20, marginBottom:10}]  }>
                <Entypo name="message"  style={[GlobalStyles.iconStyle,{marginLeft:0}]}/>
                <StyledLink linkLabel={"Send message"} link={"Home"} style={{marginLeft:5, marginTop:12}}/>
                <StyledButton buttonLabel={"Order and pay "} buttonLink={"Home"} small={true}/>
            </View>




        </View>
    )
};

const styles = StyleSheet.create({
});


export default UnitOfferByOrder
