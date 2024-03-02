import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  setDateForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/Actions";
import {
  selectDateForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/selectors";
import TextInputDataAuthorization from "./TextInputDataAuthorization";
interface EnteringBirthdayPageProps {
  index: number;
  isSelected: boolean;
}

const EnteringBirthdayPage: React.FC<EnteringBirthdayPageProps> = ({
  index,
  isSelected,
}) => {
  const dispatch = useDispatch();
  const isPressedNextButtonAuthorization = useSelector(
    selectIsPressedNextButtonAuthorization
  );
  const date: string = useSelector(selectDateForAuthorization);
  const [inputDay, setInputDay] = useState<string>(
    date.split("-")[2] ? date.split("-")[2] : ""
  );
  const [inputMonth, setInputMonth] = useState<string>(
    date.split("-")[1] ? date.split("-")[1] : ""
  );
  const [inputYear, setInputYear] = useState<string>(
    date.split("-")[0] ? date.split("-")[0] : ""
  );

  const inputDayRef = useRef<TextInput>(null);
  const inputMonthRef = useRef<TextInput>(null);
  const inputYearRef = useRef<TextInput>(null);
  const minYear: number = 1920;
  const maxYear: Date = new Date();
  maxYear.setFullYear(maxYear.getFullYear() - 18);
  useEffect(() => {
    if (isSelected) {
      inputDayRef.current?.focus();
    }
  }, [isSelected]);
  useEffect(() => {
    if (isSelected) {
      dispatch(
        setIsEnableNextButtonAuthorization(
          inputYear.length != 0 &&
            !is18YearsOld() &&
            isValidDate(
              Number(inputDay),
              Number(inputMonth),
              Number(inputYear)
            ) &&yearTextExeption(inputYear)==""
        )
      );
    }
  }, [inputDay, inputMonth, inputYear, isSelected]);
  useEffect(() => {
    if (isSelected) {
      dispatch(setIsPressedNextButtonAuthorization(false));
      const isValid =
        !is18YearsOld() &&
        isValidDate(Number(inputDay), Number(inputMonth), Number(inputYear));
      if (isValid) {
        dispatch(
          setDateForAuthorization(
            inputYear +
              "-" +
              inputMonth.padStart(2, "0") +
              "-" +
              inputDay.padStart(2, "0")
          )
        );
      }
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(isValid)
      );
    }
  }, [isPressedNextButtonAuthorization]);

  useEffect(() => {
    if (inputDay.length == 2 && isSelected) {
      inputMonthRef?.current?.focus();
    }
  }, [inputDay]);
  useEffect(() => {
    if (inputMonth.length == 2 && isSelected) {
      inputYearRef?.current?.focus();
    }
  }, [inputMonth]);
  const daysInMonth = (month: number, year: number) => {
    switch (month) {
      case 1:
        return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
      case 8:
      case 3:
      case 5:
      case 10:
        return 30;
      default:
        return 31;
    }
  };
  const isValidDate = (day: number, month: number, year: number) => {
    month = month - 1;
    return (
      month >= 0 &&
      month < 12 &&
      day > 0 &&
      day <= daysInMonth(Number(month), Number(year))
    );
  };
  const yearTextExeption = (inputYear: string): string => {
    let exeptionText = "";
    const year = Number(inputYear);
    if (Number(inputYear) > maxYear.getFullYear()) {
      exeptionText = "Рік не може бути більше " + maxYear.getFullYear();
    } else if (Number(inputYear) <= minYear && inputYear.length != 0) {
      exeptionText = "Рік не може бути менше " + minYear;
    }
    return exeptionText;
  };
  const is18YearsOld = (): boolean => {
    return (
      new Date(
        inputYear +
          "-" +
          inputMonth.padStart(2, "0") +
          "-" +
          inputDay.padStart(2, "0")
      ).getTime() > maxYear.getTime() &&
      Number(inputYear) == maxYear.getFullYear()
    );
  };
  const dayTextExeption = (inputDay: string): string => {
    let exeptionText = "";
    const day = Number(inputDay);
    if (inputDay.length == 0) {
      return "";
    }
    if (day > 31) {
      exeptionText = "Вкажіть коректну дату";
    } else if (inputMonth == "0") {
    } else if (
      inputMonth.length != 0 &&
      Number(inputMonth) <= 12 &&
      Number(inputMonth) != 0 &&
      !isValidDate(day, Number(inputMonth), 2020)
    ) {
      exeptionText = "Не коректна кількість днів в цьому місяці";
    } else if (
      inputMonth.length != 0 &&
      Number(inputMonth) <= 12 &&
      Number(inputMonth) != 0 &&
      inputYear.length != 0 &&
      yearTextExeption(inputYear) == "" &&
      !isValidDate(day, Number(inputMonth), Number(inputYear))
    ) {
      exeptionText = "Не коректна кількість днів в цьому місяці цього року";
    }
    return exeptionText;
  };
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
            inputRef={inputDayRef}
            setInput={setInputDay}
            input={inputDay}
            maxLength={2}
            borderColor={
              dayTextExeption(inputDay) == "" &&
              (dayTextExeption(inputDay) != "" ||
                Number(inputMonth) > 12 ||
                !is18YearsOld())
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
            inputRef={inputMonthRef}
            setInput={setInputMonth}
            input={inputMonth}
            maxLength={2}
            placeholder={String(new Date().getMonth() + 1).padStart(2, "0")}
            borderColor={
              inputMonth.length == 0 ||
              (Number(inputMonth) <= 12 &&
                Number(inputMonth) != 0 &&
                (dayTextExeption(inputDay) != "" ||
                  Number(inputMonth) > 12 ||
                  !is18YearsOld()))
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
            inputRef={inputYearRef}
            setInput={setInputYear}
            input={inputYear}
            placeholder={new Date().getFullYear().toString()}
            maxLength={4}
            borderColor={
              ((Number(inputYear) <= maxYear.getFullYear() &&
                Number(inputYear) >= minYear) ||
                inputYear.length == 0) &&
              (dayTextExeption(inputDay) != "" ||
                Number(inputMonth) > 12 ||
                !is18YearsOld())
                ? "white"
                : "#FFEF60"
            }
          />
        </View>
      </View>
      {dayTextExeption(inputDay) == "" ? null : (
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
          {dayTextExeption(inputDay)}
        </Text>
      )}
      {inputMonth.length == 0 ||
      (Number(inputMonth) <= 12 && Number(inputMonth) != 0) ? null : (
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
      {yearTextExeption(inputYear) == "" ? null : (
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
          {yearTextExeption(inputYear)}
        </Text>
      )}
      {dayTextExeption(inputDay) ||
      Number(inputMonth) > 12 ||
      !is18YearsOld() ? null : (
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
    </View>
  );
};

export default EnteringBirthdayPage;
