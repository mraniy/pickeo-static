import {Text, TouchableOpacity} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
import {useNavigation} from "@react-navigation/core";

const CustomizedLink = ({link,linkLabel,style}) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity style = {style} onPress={() => navigation.navigate(link)}>
            <Text style={GlobalStyles.linkText}>{linkLabel}</Text>
        </TouchableOpacity>
    )
}
export default CustomizedLink
