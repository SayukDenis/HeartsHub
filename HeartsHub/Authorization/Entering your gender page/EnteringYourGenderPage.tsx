import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from "react-native";
import {
  height,
  heightOfAuthorizationButton,
  marginTopForTextAuthorization,
  width,
} from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGenderForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/selectors";
import GenderAuthorizationButton from "../../SemiComponents/Buttons/Authorization buttons/GenderAuthorizationButton";
import { genders } from "../../SemiComponents/Constants/Data";
import GenderContainerSelect from "./GenderContainerSelect";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setGenderForAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/Actions";
import SelectAuthorizationButton from "../../SemiComponents/Buttons/Authorization buttons/SelectAuthorizationButton";
interface EnteringYourGenderPageProps {
  index: number;
  isSelected: boolean;
}

const EnteringYourGenderPage: React.FC<EnteringYourGenderPageProps> = ({
  index,
  isSelected,
}) => {
  const dispatch = useDispatch();
  const isPressedNextButtonAuthorization = useSelector(
    selectIsPressedNextButtonAuthorization
  );
  const gender = useSelector(selectGenderForAuthorization);
  const [selectedGender, setSelectedGender] = useState<null | number>(
    (index = genders.indexOf(gender)) >= 0 ? index : null
  );
  const [showGenderList, setShowGenderList] = useState<boolean>(false);
  useEffect(() => {
    if (!isSelected) {
      setShowGenderList(false);
    }
  }, [isSelected]);
  useEffect(() => {
    if (isSelected) {
      dispatch(setIsEnableNextButtonAuthorization(selectedGender != null));
    }
  }, [isSelected, selectedGender]);
  useEffect(() => {
    if (isSelected) {
      dispatch(setIsPressedNextButtonAuthorization(false));
      dispatch(
        setGenderForAuthorization(
          selectedGender != null ? genders[selectedGender] : ""
        )
      );
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(
          selectedGender != null
        )
      );
    }
  }, [isPressedNextButtonAuthorization]);
  return (
    <View style={{ width }}>
      <AuthorizationTitle text="Який у тебе гендер?" />
      {showGenderList ? (
        <ScrollView
          style={{ height: height * 0.4 }}
          showsVerticalScrollIndicator={false}
        >
          {genders.map((gender: string, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedGender(index);
                }}
                activeOpacity={0.8}
              >
                <GenderContainerSelect
                  isSelected={index == selectedGender}
                  index={index}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <>
          <TouchableOpacity
            style={{ marginBottom: height * 0.03 }}
            activeOpacity={0.8}
            onPress={() => {
              setSelectedGender(19);
            }}
          >
            <SelectAuthorizationButton
              text={genders[19]}
              isSelected={selectedGender == 19}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: height * 0.03 }}
            activeOpacity={0.8}
            onPress={() => {
              setSelectedGender(29);
            }}
          >
            <SelectAuthorizationButton
              text={genders[29]}
              isSelected={selectedGender == 29}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: height * 0.03 }}
            activeOpacity={0.8}
            onPress={() => {
              setShowGenderList(true);
            }}
          >
            <GenderAuthorizationButton>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: height * 0.02,
                  fontWeight: "600",
                }}
              >
                {"Інше"}
              </Text>
            </GenderAuthorizationButton>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default EnteringYourGenderPage;
