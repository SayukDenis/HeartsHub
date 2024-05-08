import React, { RefObject, createRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import { connect } from "react-redux";
import {
  setDateForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectDateForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import TextInputDataAuthorization from "./TextInputDataAuthorization";
import CheckBoxSVG from "../../../../assets/SVG/Authorization SVG/CheckBoxSVG";
import { getZodiacSign } from "../../../../SemiComponents/Constants/Functions/Zodiac";
import { isValidDate } from "./FunctionsForDataValidate";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class EnteringBirthdayPage extends RegistrationPage {
  private inputDayRef: RefObject<TextInput>;
  private inputMonthRef: RefObject<TextInput>;
  private inputYearRef: RefObject<TextInput>;
  private minYear: number = 1920;
  private maxYear: Date;
  constructor(props: any) {
    super(props);
    const dateFromSelector: string = (this.props as any).date;
    const [date, showZodiac] = dateFromSelector.split(",");

    this.state = {
      inputDay: date?.split("-")[2] ? date?.split("-")[2] : "",
      inputMonth: date?.split("-")[1] ? date?.split("-")[1] : "",
      inputYear: date?.split("-")[0] ? date.split("-")[0] : "",
      toggleState: showZodiac === "1",
    };
    this.inputDayRef = createRef();
    this.inputMonthRef = createRef();
    this.inputYearRef = createRef();
    this.maxYear = new Date();
    this.maxYear.setFullYear(this.maxYear.getFullYear() - 18);

    this.State = this.returnState();
  }
  checkingForEnableButton = (arrayOfBindings: any[]) => {
    return (
      arrayOfBindings[2].length != 0 &&
      !this.is18YearsOld() &&
      isValidDate(
        Number(arrayOfBindings[0]),
        Number(arrayOfBindings[1]),
        Number(arrayOfBindings[2])
      ) &&
      this.yearTextExeption(arrayOfBindings[2]) == ""
    );
  };
  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    const isValid =
      !this.is18YearsOld() &&
      isValidDate(
        Number(arrayOfBindings[0]),
        Number(arrayOfBindings[1]),
        Number(arrayOfBindings[2])
      );
    if (isValid) {
      this.dispatch(setIsPressedNextButtonAuthorization(false));
      const correctdata: string =
        arrayOfBindings[2] +
        "-" +
        arrayOfBindings[1].padStart(2, "0") +
        "-" +
        arrayOfBindings[0].padStart(2, "0") +
        "," +
        (arrayOfBindings[3] ? 1 : 0);
      const invokerState: InvokerState = new InvokerState({
        dispatch: this.dispatch,
        action: setDateForAuthorization,
        variableField: correctdata,
        attribute: "date",
        isAuthorized: false,
      });
      invokerState.request();
    }
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(isValid)
    );
  };
  componentDidMount(): void {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.defineState();
      this.inputDayRef.current?.focus();
    }
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    const { page, index }: any = this.props;
    const { inputDay, inputMonth }: any = this.state;
    const prevInputDay = prevState.inputDay;
    const prevInputMonth = prevState.inputMonth;
    const oldPage = prevProps.page;

    if (page == index + 1) {
      this.defineState();
      if (inputDay != prevInputDay && inputDay.length == 2) {
        this.inputMonthRef?.current?.focus();
      }
      if (inputMonth != prevInputMonth && inputMonth.length == 2) {
        this.inputYearRef?.current?.focus();
      }
    }
    if (page != oldPage && page == index + 1) {
      this.inputDayRef.current?.focus();
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { inputDay, inputMonth, inputYear, toggleState }: any = this.state;

    this.State.defineState(
      [inputDay, inputMonth, inputYear, toggleState],
      isPressedNextButtonAuthorization as boolean
    );
  };
  yearTextExeption = (inputYear: string): string => {
    let exeptionText = "";
    const year = Number(inputYear);
    if (Number(inputYear) > this.maxYear.getFullYear()) {
      exeptionText = "Рік не може бути більше " + this.maxYear.getFullYear();
    } else if (Number(inputYear) <= this.minYear && inputYear.length != 0) {
      exeptionText = "Рік не може бути менше " + this.minYear;
    }
    return exeptionText;
  };
  is18YearsOld = (): boolean => {
    return (
      new Date(
        (this.state as any).inputYear +
          "-" +
          (this.state as any).inputMonth.padStart(2, "0") +
          "-" +
          (this.state as any).inputDay.padStart(2, "0")
      ).getTime() > this.maxYear.getTime() &&
      Number((this.state as any).inputYear) == this.maxYear.getFullYear()
    );
  };
  dayTextExeption = (inputDay: string): string => {
    let exeptionText = "";
    const day = Number(inputDay);
    if (inputDay.length == 0) {
      return "";
    }
    if (day > 31) {
      exeptionText = "Вкажіть коректну дату";
    } else if ((this.state as any).inputMonth == "0") {
    } else if (
      (this.state as any).inputMonth.length != 0 &&
      Number((this.state as any).inputMonth) <= 12 &&
      Number((this.state as any).inputMonth) != 0 &&
      !isValidDate(day, Number((this.state as any).inputMonth), 2020)
    ) {
      exeptionText = "Не коректна кількість днів в цьому місяці";
    } else if (
      (this.state as any).inputMonth.length != 0 &&
      Number((this.state as any).inputMonth) <= 12 &&
      Number((this.state as any).inputMonth) != 0 &&
      (this.state as any).inputYear.length != 0 &&
      this.yearTextExeption((this.state as any).inputYear) == "" &&
      !isValidDate(
        day,
        Number((this.state as any).inputMonth),
        Number((this.state as any).inputYear)
      )
    ) {
      exeptionText = "Не коректна кількість днів в цьому місяці цього року";
    }
    return exeptionText;
  };
  render() {
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Коли у тебе день народження?" />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            width: width * 0.8,
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"День"}
            </Text>
            <TextInputDataAuthorization
              inputRef={this.inputDayRef}
              setInput={(text) => {
                this.setState({ inputDay: text });
              }}
              input={(this.state as any).inputDay}
              maxLength={2}
              borderColor={
                this.dayTextExeption((this.state as any).inputDay) == "" &&
                (this.dayTextExeption((this.state as any).inputDay) != "" ||
                  Number((this.state as any).inputMonth) > 12 ||
                  !this.is18YearsOld())
                  ? "white"
                  : "#FFEF60"
              }
              placeholder={String(new Date().getDate()).padStart(2, "0")}
            />
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"Місяць"}
            </Text>
            <TextInputDataAuthorization
              inputRef={this.inputMonthRef}
              setInput={(text) => {
                this.setState({ inputMonth: text });
              }}
              input={(this.state as any).inputMonth}
              maxLength={2}
              placeholder={String(new Date().getMonth() + 1).padStart(2, "0")}
              borderColor={
                (this.state as any).inputMonth.length == 0 ||
                (Number((this.state as any).inputMonth) <= 12 &&
                  Number((this.state as any).inputMonth) != 0 &&
                  (this.dayTextExeption((this.state as any).inputDay) != "" ||
                    Number((this.state as any).inputMonth) > 12 ||
                    !this.is18YearsOld()))
                  ? "white"
                  : "#FFEF60"
              }
            />
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"Рік"}
            </Text>
            <TextInputDataAuthorization
              inputRef={this.inputYearRef}
              setInput={(text) => {
                this.setState({ inputYear: text });
              }}
              input={(this.state as any).inputYear}
              placeholder={new Date().getFullYear().toString()}
              maxLength={4}
              borderColor={
                ((Number((this.state as any).inputYear) <=
                  this.maxYear.getFullYear() &&
                  Number((this.state as any).inputYear) >= this.minYear) ||
                  (this.state as any).inputYear.length == 0) &&
                (this.dayTextExeption((this.state as any).inputDay) != "" ||
                  Number((this.state as any).inputMonth) > 12 ||
                  !this.is18YearsOld())
                  ? "white"
                  : "#FFEF60"
              }
            />
          </View>
        </View>
        {this.dayTextExeption((this.state as any).inputDay) == "" ? null : (
          <Text
            style={{
              color: "#FFEF60",
              fontSize: height * 0.0165,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
              width: width * 0.8,
            }}
          >
            {this.dayTextExeption((this.state as any).inputDay)}
          </Text>
        )}
        {(this.state as any).inputMonth.length == 0 ||
        (Number((this.state as any).inputMonth) <= 12 &&
          Number((this.state as any).inputMonth) != 0) ? null : (
          <Text
            style={{
              color: "#FFEF60",
              fontSize: height * 0.0165,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
              width: width * 0.8,
            }}
          >
            {"Вкажіть коректний місяць"}
          </Text>
        )}
        {this.yearTextExeption((this.state as any).inputYear) == "" ? null : (
          <Text
            style={{
              color: "#FFEF60",
              fontSize: height * 0.0165,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
              width: width * 0.8,
            }}
          >
            {this.yearTextExeption((this.state as any).inputYear)}
          </Text>
        )}
        {this.dayTextExeption((this.state as any).inputDay) ||
        Number((this.state as any).inputMonth) > 12 ||
        !this.is18YearsOld() ? null : (
          <Text
            style={{
              color: "#FFEF60",
              fontSize: height * 0.0165,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
              width: width * 0.8,
            }}
          >
            {"Ваш вік менше 18 років"}
          </Text>
        )}
        <View style={{ flexDirection: "row", marginTop: height * 0.03 }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ toggleState: !(this.state as any).toggleState });
            }}
            activeOpacity={0.8}
            style={{
              height: height * 0.04,
              aspectRatio: 1,
              backgroundColor: "#E1BEC1",
              marginLeft: width * 0.1,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            {(this.state as any).toggleState ? (
              <View style={{ alignSelf: "center" }}>
                <CheckBoxSVG widthOfCheckBox={width * 0.2} />
              </View>
            ) : null}
          </TouchableOpacity>
          <Text
            style={[
              {
                alignSelf: "center",
                marginLeft: 10,
                fontSize: 20,
                color: "white",
                fontWeight: "800",
                width: width * 0.8,
              },
            ]}
          >
            {getZodiacSign(
              Number((this.state as any).inputDay),
              Number((this.state as any).inputMonth)
            ) == " "
              ? "Вказувати ваш знак зодіаку"
              : "Вказувати, що ви " +
                getZodiacSign(
                  Number((this.state as any).inputDay),
                  Number((this.state as any).inputMonth)
                )}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  date: selectDateForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(EnteringBirthdayPage);
