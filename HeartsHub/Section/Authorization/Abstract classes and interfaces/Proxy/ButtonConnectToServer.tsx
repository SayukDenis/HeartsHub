import { Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { selectBufferEmail } from "../../../../redux/Authorization/selectors";

interface ButtonConnectToServerProps {
  setModalWindow: (state: boolean | null) => void;
}
const ButtonConnectToServer: React.FC<ButtonConnectToServerProps> = ({
  setModalWindow,
}) => {
  const bufferEmail = useSelector(selectBufferEmail);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        setModalWindow(null);
        dispatch(setEmailForAuthorization(bufferEmail));
        dispatch(
          setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
        );
      }}
      activeOpacity={0.8}
      style={{
        backgroundColor: "white",
        width: width * 0.6,
        height: height * 0.05,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        justifyContent: "center",
      }}
    >
      <Text
        style={{ justifyContent: "center", alignSelf: "center", fontSize: 17 }}
      >
        {"Ok"}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonConnectToServer;
