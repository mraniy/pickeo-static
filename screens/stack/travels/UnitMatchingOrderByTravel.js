import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React, {useState} from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import StyledButton from "../../../components/StyledButton";
import StyledLabel from "../../../components/StyledLabel";
import NumericTextInput from "../../../components/NumercicTextInput";


const UnitMatchingOrderByTravel = ({title, price, fee, shopper}) => {
    const [offer, setOffer] = useState(fee);
    //setOffer (fee);
    return (
        <View style={GlobalStyles.window}>
            <Text style={  [GlobalStyles.textPlain, {fontWeight:800}]  }>{title}</Text>
            <View style={{marginBottom:4}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={ [GlobalStyles.viewRowContainer, {marginBottom:10}] }>
                <FontAwesome name="shopping-bag" style={GlobalStyles.iconStyle}/>
                <View style={ [GlobalStyles.viewColumnContainer, {marginRight:40}] }>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Product price</Text>
                    <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{price}E</Text>
                </View>
                <MaterialCommunityIcons name="hand-coin"  style={GlobalStyles.iconStyle}/>
                <View style={ [GlobalStyles.viewColumnContainer] }>
                    <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Traveller tip</Text>
                    <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{fee}E</Text>
                </View>

            </View>

            <HorizontalLineSeparator/>

            <View style={ [GlobalStyles.viewRowContainer, {marginLeft:10, marginBottom:10}]  }>

                <View style={  {marginLeft:0, marginTop:10, marginRight:30, flexDirection:"row"}  }>
                    <View style={GlobalStyles.viewColumnContainer}>
                        <Text style={  [GlobalStyles.textGreyed, {marginHorizontal:0, marginVertical:0, padding:0}]  }>Not enough tip</Text>
                        <StyledLabel labelText={"Ask more >"} style2={{marginTop:0}}></StyledLabel>
                    </View>

                    <NumericTextInput name = {title}
                                      placeholder=""
                                      value={offer+""}
                                      onChangeText={text => setOffer(text)}
                                      style2={{height:40, width:50, marginLeft:10}}
                                      />

                </View>
                <StyledButton buttonLabel={"Bring for "+(offer)+"E"} buttonLink={"Home"} small={true}/>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitMatchingOrderByTravel
