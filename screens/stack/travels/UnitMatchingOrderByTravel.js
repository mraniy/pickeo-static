import {Pressable, StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React, {useState} from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import StyledButton from "../../../components/StyledButton";
import StyledLabel from "../../../components/StyledLabel";
import NumericTextInput from "../../../components/NumercicTextInput";
import Toggle from "react-native-toggle-element";



const UnitMatchingOrderByTravel = ({title, price, fee, shopper}) => {
    const [offer, setOffer] = useState(fee);
    const [toggleValue, setToggleValue] = useState(false);
    const [toggleLabel, setToggleLabel] = useState( '' );

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
                                      editable={!toggleValue}
                                      onChangeText={text => setOffer(text)}
                                      style2={  { height:40, width:50, marginLeft:10 }  }
                                      />

                </View>

                <View style={  {marginTop:10}  }>
                <Toggle
                    value={toggleValue}
                    onPress={  (newState) => setToggleValue(newState)  }
                    leftTitle = {  <Text style={GlobalStyles.toggleText}>{"No"}</Text>  }
                    rightTitle= { <Text style={GlobalStyles.toggleText}>{"Yes"}</Text>  }
                    trackBar={{
                        width: 120,
                        height: 35,
                        radius: 25,
                        activeBackgroundColor:"#E0A2A1",
                        inActiveBackgroundColor:"#c24341"

                    }}

                    thumbButton={{
                        width: 50,
                        height: 35,
                        radius: 20,
                        activeBackgroundColor:"#3b5f73",
                        inActiveBackgroundColor:"#3b5f73"

                    }}

                />
                </View>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitMatchingOrderByTravel
