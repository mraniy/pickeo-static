import {StyleSheet, View} from "react-native";
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
        <View style={GlobalStyles.formContainer}>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Message"}/>
                <StyledTextInput placeholder=""
                                 value={message}
                                 multiline={true}
                                 onChangeText={text => setMessage(text)
                                 }
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Price"}/>
                <NumericTextInput value={price}
                                 onChangeText={text => setPrice(text)}/>

            </View>

            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Traveler Fee"}/>
                <NumericTextInput value={travelerFee}
                                  onChangeText={text => setTravelerFee(text)}/>

            </View>
            <View style = {GlobalStyles.viewRowContainer}>
                <StyledButton buttonLink={"ProductRequests"} buttonLabel={"Submit"}/>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    textArea: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '100%',
        height:200,
        textAlignVertical: 'top'
    }
})

export  default NewOrder
