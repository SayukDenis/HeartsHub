import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackAndNextButton from "../../SemiComponents/Buttons/Authorization buttons/BackAndNextButton";
import AuthorizationProgresBar from "../../SemiComponents/Other/AuthorizationProgresBar";
import BackGroundGradientView from "../../SemiComponents/BackGround/BackGroundGradientView";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import EnteringAnEmailAddressPage from "../Entering an email address page/EnteringAnEmailAddressPage";
import VerifyCodePage from "../Verify code page/VerifyCodePage";
interface AuthorizationCarouselProps {
  navigation: any;
}

const AuthorizationCarousel: React.FC<AuthorizationCarouselProps> = ({
  navigation,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [page, setPage] = useState(1);
  const pressOnBackButton = () => {
    if (page == 1) {
      navigation.goBack();
    }
    scrollViewRef.current?.scrollTo({
      x: (page - 2) * width,
      y: 0,
      animated: true,
    });
    setPage(page - 1);
    Keyboard.dismiss()
  };
  const pressOnNextButton = () => {
    scrollViewRef.current?.scrollTo({ x: page * width, y: 0, animated: true });
    setPage(page + 1);
    Keyboard.dismiss()
  };
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <BackGroundGradientView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ height }}>
          <AuthorizationProgresBar currentPage={page} />
          <ScrollView
            ref={scrollViewRef}
            horizontal
            style={{ width }}
            scrollEnabled={false}
            pagingEnabled
          >
            <EnteringAnEmailAddressPage />
            <VerifyCodePage />
          </ScrollView>
          <View
            style={{
              flex: 1,
              //backgroundColor: "blue",
              flexDirection: "column-reverse",
            }}
          >
            <BackAndNextButton
              isNextButtonEnabled={true}
              pressOnBackButton={pressOnBackButton}
              pressOnNextButton={pressOnNextButton}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BackGroundGradientView>
  );
};
export default AuthorizationCarousel;
