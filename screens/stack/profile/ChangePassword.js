
import {ScrollView, View} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import StyledLabel from "../../../components/StyledLabel";
import StyledTextInput from "../../../components/StyledTextInput";
import StyledButton from "../../../components/StyledButton";


const ChangePassword = ({navigation}) => {
    const [oldPassword, setOldPassword] = useState(oldPassword);
    const [password, setPassword] = useState(password);
    const [passwordConfirmation, setPasswordConfirmation] = useState(passwordConfirmation);
    return (
        <ScrollView>
            <View style={GlobalStyles.formContainer}>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Old password"}/>
                    <StyledTextInput
                        placeholder="Please enter your old password first"
                        value={oldPassword}
                        onChangeText={text => setOldPassword(text)}
                        secure={true}
                    />
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"New Password"}/>
                    <StyledTextInput
                        placeholder="Enter your new password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secure={true}
                    />
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Confirm your new password"}/>
                    <StyledTextInput
                        placeholder="Confirm your new password"
                        value={passwordConfirmation}
                        onChangeText={text => setPasswordConfirmation(text)}
                        secure={true}
                    />
                </View>
                <View style={GlobalStyles.viewRowContainer}>
                    <StyledButton buttonLink={"Profile"} buttonLabel={"Change"}/>
                    <StyledLabel labelText={"     "}/>
                    <StyledButton buttonLink={"Profile"} buttonLabel={"Cancel"}/>
                </View>
            </View>
        </ScrollView>

    )
}

export default ChangePassword
