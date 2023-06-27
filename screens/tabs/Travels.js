import {ScrollView, StyleSheet, TextInput, View, Platform, Pressable, Alert} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";
import StyledLabel from "../../components/StyledLabel";
import StyledTextInput from "../../components/StyledTextInput";
import StyledButton from "../../components/StyledButton";
import DateTimePicker from "@react-native-community/datetimepicker"
import StyledDateInput from "../../components/StyledDateInput";

const Travels = ({navigation}) => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [pickerDate, setPickerDate] = useState (new Date());
    const [showPicker, setShowPicker] = useState (false);
    const [pickerMode, setPickerMode] = useState ("date");

    const showMode = (currentMode) => {
      setShowPicker (true);
      setPickerMode (currentMode);
    };
    const onChange = ({event}, selectedDate) => {
        const currentDate = selectedDate || pickerDate;
        setShowPicker (Platform.OS==="IOS");
        setPickerDate (currentDate);
        setTravelDate (currentDate.toDateString());

    };

    return (
        <ScrollView>
            <View style={GlobalStyles.formContainer}>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"From"}/>
                    <StyledTextInput placeholder="From"
                                     value={fromCity}
                                     onChangeText={text => setFromCity(text)
                                     }
                    />
                </View>
                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"To"}/>
                    <StyledTextInput placeholder="To"
                                     value={toCity}
                                      onChangeText={text => setToCity(text)}/>

                </View>

                <View style={GlobalStyles.formControl}>
                    <StyledLabel labelText={"Travel Date"}/>

                    <Pressable onPress={() =>showMode("date")}>
                        <StyledDateInput placeholder="Travel date"
                                   value={travelDate}
                                   onChangeText={text => setTravelDate(text)}
                        />
                    </Pressable>

                    {showPicker && (
                        <DateTimePicker testID={"travelDatePicker"} display = "default"
                                        mode={pickerMode} value={pickerDate}
                                        minimumDate={new Date()} maximumDate={new Date('2024-12-31')}
                                        onChange={onChange}
                        />
                    )}

                </View>
                <View style={GlobalStyles.viewRowContainer}>
                    <StyledButton buttonLink={"ProductRequests"} buttonLabel={"Add Travel"}/>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textArea: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '100%',
        height: 200,
        textAlignVertical: 'top'
    }
})

export default Travels
