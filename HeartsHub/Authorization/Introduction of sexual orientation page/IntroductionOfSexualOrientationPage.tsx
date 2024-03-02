import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsPressedNextButtonAuthorization,
  selectSexualOrientationForAuthorization,
} from "../../redux/Authorization/selectors";
import { sexualOrientations } from "../../SemiComponents/Constants/Data";
import SelectAuthorizationButton from "../../SemiComponents/Buttons/Authorization buttons/SelectAuthorizationButton";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSexualOrientationForAuthorization,
} from "../../redux/Authorization/Actions";

interface IntroductionOfSexualOrientationPageProps {
  index: number;
  isSelected: boolean;
}

const IntroductionOfSexualOrientationPage: React.FC<
  IntroductionOfSexualOrientationPageProps
> = ({ index, isSelected }) => {
  const dispatch = useDispatch();
  const isPressedNextButtonAuthorization = useSelector(
    selectIsPressedNextButtonAuthorization
  );
  const sexualOrientation = useSelector(
    selectSexualOrientationForAuthorization
  );
  const [selectedSexualOrientation, setSelectedSexualOrientation] = useState<
    null | number
  >(
    (index = sexualOrientations.indexOf(sexualOrientation)) >= 0 ? index : null
  );
  useEffect(() => {
    if (isSelected) {
      dispatch(
        setIsEnableNextButtonAuthorization(selectedSexualOrientation != null)
      );
    }
  }, [isSelected, selectedSexualOrientation]);
  useEffect(() => {
    if (isSelected) {
      dispatch(setIsPressedNextButtonAuthorization(false));
      dispatch(
        setSexualOrientationForAuthorization(
          selectedSexualOrientation != null
            ? sexualOrientations[selectedSexualOrientation]
            : ""
        )
      );
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(
          selectedSexualOrientation != null
        )
      );
    }
  }, [isPressedNextButtonAuthorization]);
  return (
    <View style={{ width }}>
      <AuthorizationTitle text="Вкажи сексуальну орієнтацію" />
      {sexualOrientations.map((orientation: string, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            style={{ marginBottom: height * 0.03 }}
            activeOpacity={0.8}
            onPress={() => {
              setSelectedSexualOrientation(index);
            }}
          >
            <SelectAuthorizationButton
              text={orientation}
              isSelected={selectedSexualOrientation == index}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default IntroductionOfSexualOrientationPage;
