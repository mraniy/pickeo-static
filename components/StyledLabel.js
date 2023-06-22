import {Text} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";

const StyledLabel = ({labelText}) => {
    return (
        <Text style={GlobalStyles.label}>{labelText}</Text>
    )
}
export default StyledLabel
