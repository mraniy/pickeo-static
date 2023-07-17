import {default as Alert, Button, FlatList, ScrollView, StyleSheet, Text, View, SafeAreaView} from "react-native";
import React, {useState} from "react";
import UnitOfferByOrder from "./UnitOfferByOrder";
import GlobalStyles from "../../styles/GlobalStyles";
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import {FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const OffersByOrder = ({navigation}) => {
    const data = require('../../../mocks/offersByOrder');
    const [upDownIcon, setUpDownIcon] = useState("expand-more");
    const switchIcon = (isExpanded) => {
        if (isExpanded === true)   setUpDownIcon ("expand-less");
        else   setUpDownIcon ("expand-more")
    };
    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>

            <View style={  [GlobalStyles.window]  }>

                <Collapse isExpanded={false}
                          onToggle={switchIcon} >

                    <CollapseHeader>
                        <Text style={  [GlobalStyles.textPlain, {fontWeight:800}]  }>{data.title}</Text>
                        <MaterialIcons name={upDownIcon}
                                  style={  [GlobalStyles.iconStyle, {width:"10%", alignContent:"center", position:"absolute",
                                      zIndex:10, right:0    }]  }  />
                    </CollapseHeader>

                    <CollapseBody>
                        <View style={{marginBottom:4}}>
                            <HorizontalLineSeparator/>
                        </View>
                        <View style={ [GlobalStyles.viewRowContainer, {marginBottom:10}] }>
                            <FontAwesome name="shopping-bag" style={GlobalStyles.iconStyle}/>
                            <View style={ [GlobalStyles.viewColumnContainer, {marginRight:40}] }>
                                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Product price</Text>
                                <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{data.productPrice}E</Text>
                            </View>

                            <MaterialCommunityIcons name="hand-coin"  style={GlobalStyles.iconStyle}/>
                            <View style={ [GlobalStyles.viewColumnContainer] }>
                                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:10, marginVertical: 4, padding:0}]}>Traveller tip</Text>
                                <Text style={[GlobalStyles.textBold, {marginHorizontal:10, marginVertical: 0, padding:0}]}>{data.fee}E</Text>
                            </View>

                        </View>

                    </CollapseBody>
                </Collapse>


                <View style={{alignItems: "center"}}>
                    <View style={styles.footer}></View>
                </View>
            </View>

            <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:0}}>
                <FlatList data={data.offers}
                          renderItem={({item}) =>
                              <UnitOfferByOrder fee = {item.fee}
                                                date = {item.date}
                                                traveler = {item.traveler}
                                                fromCity = {item.fromCity}
                                                toCity = {item.toCity}
                              />
                          }>
                </FlatList>

            </View>

        </View>

    )
};
const styles = StyleSheet.create({
    footer:{
        width:"90%",
        height:2,
        backgroundColor: "#7786C2",
    }
});

export default OffersByOrder
