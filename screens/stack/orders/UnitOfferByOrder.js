import {Image, StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledButton from "../../../components/StyledButton";
import StyledLink from "../../../components/StyledLink";
import { Rating } from 'react-native-ratings';
import {Entypo, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const UnitOfferByOrder = ({fee, date,traveler, fromCity, toCity}) => {

    return (
        <View style={  [GlobalStyles.window]  }>

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
                            startingValue={traveler.rating}
                            onFinishRating={this.ratingCompleted}
                            style={{width:90}}

                        />
                    </View>
                </View>
                <View style={ [GlobalStyles.viewRowContainer, {marginTop:10, marginBottom:10, marginLeft:20}]  }>
                    <FontAwesome name="shopping-cart"  style={GlobalStyles.iconStyle}/>
                    <View style={ [GlobalStyles.viewColumnContainer] }>
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Shops for you</Text>
                        <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, paddingVertical:0}]}>{fee}E </Text>

                    </View>
                </View>
            </View>

            <View style={ [GlobalStyles.viewRowContainer, {marginTop:0, marginBottom:10, marginLeft:20}]  }>
                <Entypo name="message"  style={[GlobalStyles.iconStyle,{marginLeft:0}]}/>
                <StyledLink linkLabel={"Send message"} link={"Home"} smallFont={true} style={{marginLeft:5, marginTop:12}}/>
            </View>

            <View style={{marginTop: 5, marginBottom:10}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={GlobalStyles.viewColumnContainer}>
                <View style={  GlobalStyles.viewRowContainer  }>
                    <Fontisto name="suitcase-alt"  style={[GlobalStyles.iconStyle, {marginLeft:20, paddingTop:0}]}/>
                    <Text style={[GlobalStyles.textRoute,{fontSize: 15, fontWeight:700, color:"#B43C6C", marginLeft:10, marginTop:5}]}>{fromCity}</Text>
                    <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"10%", color:"#0897B4", marginLeft:10, paddingTop:5}]}/>
                    <Text style={[GlobalStyles.textRoute,{fontSize: 15, fontWeight:700, color:"#B43C6C", marginHorizontal:0, marginTop:5}]}>{toCity}</Text>
                    <View style={GlobalStyles.viewColumnContainer}>
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:20, marginVertical: 0, paddingVertical:0}]}>Delivers by </Text>
                        <Text style={[GlobalStyles.textDate, {fontWeight:700, marginHorizontal:20, marginVertical: 0, paddingVertical:0}]}> >> {date} </Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop: 5, marginBottom:10}}>
                <HorizontalLineSeparator/>
            </View>



            <View style={ [GlobalStyles.viewRowContainer, {marginLeft:90, marginBottom:10}]  }>
                <StyledButton buttonLabel={"Order and pay"} buttonLink={"Home"} small={true}/>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
});


export default UnitOfferByOrder
