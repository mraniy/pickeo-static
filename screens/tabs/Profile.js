import {ScrollView, View} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";
import StyledButton from "../../components/StyledButton";
import StyledLabel from "../../components/StyledLabel";
import StyledTextInput from "../../components/StyledTextInput";


const Profile = ({navigation}) => {
    const person = require('../../mocks/profile');
    const [password, setPassword] = useState(person.password);
    const [passwordConfirmation, setPasswordConfirmation] = useState(person.password);
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
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Password"}/>
                    <StyledTextInput
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secure={true}
                    />
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Confirm your password"}/>
                    <StyledTextInput
                        placeholder="Confirm your password"
                        value={passwordConfirmation}
                        onChangeText={text => setPasswordConfirmation(text)}
                        secure={true}
                    />
                </View>
                <View style={GlobalStyles.viewRowContainer}>
                    <StyledButton buttonLink={"ProfileConfirm"} buttonLabel={"Validate"}/>
                </View>
            </View>
        </ScrollView>

    )
}

export default Profile
