import {Text, TouchableOpacity} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
import {useNavigation} from "@react-navigation/core";

const StyledButton = ({buttonLink, buttonLabel, small}) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity style={small===true ? GlobalStyles.buttonContainerSmall : GlobalStyles.buttonContainer} onPress={() => navigation.navigate(buttonLink)}>
            <Text style={GlobalStyles.btnText}>{buttonLabel}</Text>
        </TouchableOpacity>
    )
};
export default StyledButton
