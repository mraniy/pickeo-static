import {ScrollView, View} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";
import StyledButton from "../../components/StyledButton";
import StyledLabel from "../../components/StyledLabel";
import StyledTextInput from "../../components/StyledTextInput";
import StyledLink from "../../components/StyledLink";


const Profile = ({navigation}) => {
    const person = require('../../mocks/profile');
    const [firstName, setFirstName] = useState(person.firstName);
    const [lastName, setLastName] = useState(person.lastName);
    const [phone, setPhone] = useState(person.phoneNumber);
    return (
        <ScrollView>
            <View style={GlobalStyles.formContainer}>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"First name"}/>
                    <StyledTextInput placeholder="Enter your first name"
                                     value={firstName}
                                     onChangeText={text => setFirstName(text)}/>
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Last name"}/>
                    <StyledTextInput placeholder="Enter your last name"
                                     value={lastName}
                                     onChangeText={text => setLastName(text)}/>
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Phone number"}/>
                    <StyledTextInput placeholder="Enter your Phone number"
                                     value={phone}
                                     onChangeText={text => setPhone(text)}/>
                </View>
                <View style={GlobalStyles.viewRowContainer}>
                    <StyledButton buttonLink={"ProfileConfirm"} buttonLabel={"Validate"}/>
                    <StyledLink link={"ChangePassword"} linkLabel={"Change password"} style={GlobalStyles.centeredLinkContainer}/>
                </View>
            </View>
        </ScrollView>

    )
}

export default Profile
