import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import UnitMatchingOrderByTravel from "./UnitMatchingOrderByTravel";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const MatchingOrdersByTravel = ({navigation}) => {
    const data = require('../../../mocks/matchingOrdersByTravel');
    const [upDownIcon, setUpDownIcon] = useState("expand-more");
    const switchIcon = (isExpanded) => {
        if (isExpanded === true)   setUpDownIcon ("expand-less");
        else   setUpDownIcon ("expand-more")
    };
    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>

            <View style={  [GlobalStyles.window, {backgroundColor:"#FDFDFC"}]  }>
                <Collapse isExpanded={false}
                          onToggle={switchIcon} >
                    <CollapseHeader>
                        <View style={  [GlobalStyles.viewRowContainer, {marginBottom:10}]  }>
                            <Text style={  [GlobalStyles.textRoute, {marginLeft:20}]  }>{data.fromCity}</Text>
                            <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"10%", color:"#0897B4"}]}/>
                            <Text style={GlobalStyles.textRoute}>{data.toCity}</Text>
                            <MaterialIcons name={upDownIcon}
                                           style={  [GlobalStyles.iconStyle, {width:"10%", alignContent:"center", position:"absolute",
                                               zIndex:10, right:0    }]  }  />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={{marginTop: 0, marginBottom:6}}>
                            <HorizontalLineSeparator/>
                        </View>

                        <View style={ {backgroundColor: "white"} }>
                            <View style={GlobalStyles.viewRowContainer}>
                                <Ionicons name="calendar" style={GlobalStyles.iconStyle}/>
                                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>On</Text>
                                <Text style={  [GlobalStyles.textDate, { marginHorizontal: 2}]  }>{'' +data.travelDate}</Text>
                            </View>
                        </View>
                    </CollapseBody>
                </Collapse>
            </View>

            <View style={{flex: 1, flexDirection:'column', justifyContent: 'center'}}>
                <FlatList data={data.matchingOrders}
                          renderItem={({item}) =>
                              <UnitMatchingOrderByTravel title = {item.title}
                                                price = {item.price}
                                                fee = {item.fee}
                                                shopper = {item.shopper}
                              />
                          }>

                </FlatList>
            </View>
        </View>

    )
};
const styles = StyleSheet.create({

});

export default MatchingOrdersByTravel
