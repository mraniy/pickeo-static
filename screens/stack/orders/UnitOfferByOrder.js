import {Image, StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledButton from "../../../components/StyledButton";
import StyledLink from "../../../components/StyledLink";
import { Rating, AirbnbRating } from 'react-native-ratings';

const UnitOfferByOrder = ({fee, date,traveler}) => {

    return (
        <View style={GlobalStyles.window}>

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








            <Text style={GlobalStyles.textGreyed}>{date}</Text>
            <Text style={GlobalStyles.textBold}>{fee}</Text>
            <StyledButton buttonLabel={"Order and pay "} buttonLink={"Home"} small={true}/>
            <StyledLink linkLabel={"Send message"} link={"Home"} style={"linkContainer"} smallFont={true}/>


        </View>
    )
};

const styles = StyleSheet.create({
});


export default UnitOfferByOrder
