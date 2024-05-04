import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  height,
  heightOfMainTitle,
  marginTopForTextAuthorization,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { languages } from "../../../../SemiComponents/Constants/Data";
import MultiplySelectContainer from "./MultiplySelectContainer";
import { connect } from "react-redux";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectLanguagesForAuthorization,
} from "../../../../redux/Authorization/selectors";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setLanguagesForAuthorization,
} from "../../../../redux/Authorization/Actions";
import MagnifyingGlassSVG from "../../../../assets/SVG/Authorization SVG/MagnifyingGlassSVG";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class LanguageStatusPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    const dictionary: { [key: number]: boolean } = {};
    languages.forEach((language, index) => {
      dictionary[index] = false;
    });
    (this.props as any).languageStatus.forEach((num: number, index: number) => {
      dictionary[num] = true;
    });
    this.state = {
      languageInput: "",
      languageDictionary: dictionary,
    };
    const selectLang: number[] = [];
    for (
      let i = 0;
      i < Object.entries((this.state as any).languageDictionary).length;
      i++
    ) {
      if ((this.state as any).languageDictionary[i]) {
        selectLang.push(i);
      }
    }
    this.state = { ...this.state, selectLang };

    this.State = this.returnState();
  }
  checkingForEnableButton= (arrayOfBindings: any[]) => {
    return Object.values(arrayOfBindings[0]).some(
      (value) => value === true
    );
  }
  checkingGoToNextPage= (arrayOfBindings: any[]) => {
    this.dispatch(setIsPressedNextButtonAuthorization(false));
    const invokerState: InvokerState= new InvokerState({
      dispatch: this.dispatch,
      action: setLanguagesForAuthorization,
      variableField: arrayOfBindings[1],
      attribute: "languages",
      isAuthorized: false,
    });
    invokerState.request();
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
    );

  }
  getFirstChar = (index: number) => {
    const char = "";
    if (index == 0) {
      return languages[index][0];
    }
    if (languages[index - 1][0] != languages[index][0]) {
      return languages[index][0];
    }
    return char;
  };
  componentDidMount() {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.defineState();
    }
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    const { page, index }: any = this.props;
    const { languageDictionary, selectLang }: any = this.state;
    const prevLanguageDictionary: any = prevState.languageDictionary;
    if (page == index + 1) {
      this.defineState();

      if (languageDictionary != prevLanguageDictionary) {
        const selectLangBuff = [];
        for (let i = 0; i < Object.entries(languageDictionary).length; i++) {
          if (languageDictionary[i]) {
            selectLangBuff.push(i);
          }
        }
        this.setState({ selectLang: selectLangBuff });
      }
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { languageDictionary, selectLang }: any = this.state;
    this.State.defineState(
      [languageDictionary, selectLang],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { page, index }: any = this.props;
    const { languageDictionary, languageInput, selectLang }: any = this.state;
    return (
      <View style={{ width }}>
        <View
          style={{
            flexDirection: "row",

            marginTop:
              marginTopForTextAuthorization +
              (height * 0.1) / 2 -
              heightOfMainTitle * 0.48,
            alignSelf: "center",
          }}
        >
          <View style={{ alignSelf: "center", marginRight: 10 }}>
            <MagnifyingGlassSVG />
          </View>
          <TextInput
            style={{
              color: "white",
              fontSize: heightOfMainTitle * 0.8,
              fontWeight: "600",
              textAlign: "center",
              width: width * 0.68,
            }}
            value={languageInput}
            onChangeText={(text) => {
              this.setState({ languageInput: text });
            }}
            placeholder={"Які мови знаєш?"}
            placeholderTextColor={"rgba(255,255,255,0.5)"}
          />
        </View>
        <View
          style={{
            height: height * 0.076,

            width: width * 0.8,
            alignSelf: "center",

            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width * 0.8,
              height: height * 0.045,
              justifyContent: "center",
              borderTopWidth: selectLang.length == 0 ? 0 : 2,
              borderBottomWidth: selectLang.length == 0 ? 0 : 2,
              borderColor: "white",
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={
                {
                  //backgroundColor: "red"
                }
              }
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                activeOpacity={1}
              >
                {selectLang.map((selectLanguage: number, index: number) => {
                  return (
                    <Text
                      key={index}
                      style={{
                        alignSelf: "center",
                        color: "white",
                        fontSize: height * 0.018,
                        fontWeight: "800",
                      }}
                    >
                      {languages[selectLanguage] +
                        (index != selectLang.length - 1 ? ", " : "")}
                    </Text>
                  );
                })}
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View>
          <ScrollView
            style={{
              height: height * 0.56,

              width,
            }}
            showsVerticalScrollIndicator={false}
          >
            {languages
              .slice(0, page == index + 1 ? languages.length : 10)
              .map((language: string, index: number) => {
                if (languageInput == "") {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      onPress={() => {
                        this.setState({
                          languageDictionary: {
                            ...languageDictionary,
                            [index]: !languageDictionary[index],
                          },
                        });
                      }}
                    >
                      <View
                        style={{
                          width,
                          height:
                            this.getFirstChar(index) != ""
                              ? height * 0.03
                              : height * 0.015,
                          marginLeft: width * 0.1,
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: height * 0.018,
                            fontWeight: "800",
                          }}
                        >
                          {this.getFirstChar(index)}
                        </Text>
                      </View>
                      <MultiplySelectContainer
                        index={index}
                        data={languages}
                        isSelected={languageDictionary[index]}
                      />
                    </TouchableOpacity>
                  );
                } else if (language.startsWith(languageInput)) {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      onPress={() => {
                        this.setState({
                          languageDictionary: {
                            ...languageDictionary,
                            [index]: !languageDictionary[index],
                          },
                        });
                        this.setState({ languageInput: "" });
                      }}
                    >
                      <View
                        style={{
                          width,
                          height: height * 0.015,
                          marginLeft: width * 0.1,
                          justifyContent: "center",
                        }}
                      />
                      <MultiplySelectContainer
                        index={index}
                        data={languages}
                        isSelected={languageDictionary[index]}
                      />
                    </TouchableOpacity>
                  );
                }
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  languageStatus: selectLanguagesForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(LanguageStatusPage);
