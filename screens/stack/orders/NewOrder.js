import {ScrollView, StyleSheet, View} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledLabel from "../../../components/StyledLabel";
import StyledTextInput from "../../../components/StyledTextInput";
import React, {useState} from "react";
import NumericTextInput from "../../../components/NumercicTextInput";
import StyledButton from "../../../components/StyledButton";

const NewOrder = ({navigation}) => {
    const [message, setMessage] = useState('');
    const [price, setPrice] = useState('');
    const [travelerFee, setTravelerFee] = useState('');

    return (
        <ScrollView>
            <View style={GlobalStyles.formContainer}>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Message"}/>
                    <StyledTextInput placeholder="Message"
                                     value={message}
                                     multiline={true}
                                     onChangeText={text => setMessage(text)
                                     }
                    />
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Price"}/>
                    <NumericTextInput placeholder="Price"
                                      value={price}
                                      onChangeText={text => setPrice(text)}/>

                </View>

                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Traveler Fee"}/>
                    <NumericTextInput placeholder="Fee"
                                      value={travelerFee}
                                      onChangeText={text => setTravelerFee(text)}/>

                </View>
                <View style={GlobalStyles.viewRowContainer}>
                    <StyledButton buttonLink={"OrdersWaiting"} buttonLabel={"Add order"}/>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
})

export default NewOrder
