import {Text} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";

const StyledLabel = ({labelText, style2}) => {
    return (
        <Text style={  [GlobalStyles.label,style2]  }>{labelText}</Text>
    )
};
export default StyledLabel
