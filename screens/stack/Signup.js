import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";
import StyledButton from "../../components/StyledButton";
import StyledLabel from "../../components/StyledLabel";


const SignUp = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <View style={GlobalStyles.formContainer}>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"First name"}/>
                <TextInput
                    placeholder="Enter your first name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Last name"}/>
                <TextInput
                    placeholder="Enter your last name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Phone number"}/>
                <TextInput
                    placeholder="Enter your phone number"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Login"}/>
                <TextInput
                    placeholder="Enter your e-mail"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Password"}/>
                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Confirm your password"}/>
                <TextInput
                    placeholder="Confirm your password"
                    value={passwordConfirmation}
                    onChangeText={text => setPasswordConfirmation(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style = {GlobalStyles.viewRowContainer}>
                <StyledButton buttonLink={"SignUpConfirmation"} buttonLabel={"Sign up"}/>
            </View>
        </View>

    )
}

export default SignUp
