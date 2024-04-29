import { isValidDate } from "../../../Authorization/Authorization carousel pages/Entering a birthday page/FunctionsForDataValidate";

export const isValidDateAndNotExpired = (year: string, month: string, day: string) => {

    const inputDate = year + "-" + month + "-" + day;
    const dateObj = new Date(inputDate);

    if (year == "" || month == "" || day == "") {
        return null
    }
    if (!isValidDate(Number(day), Number(month), Number(year))) {
        
        return false;
    }

    const currentDate = new Date();
    const inputDateWithoutTime = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
    const currentDateTimeWithoutSeconds = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    return inputDateWithoutTime >= currentDateTimeWithoutSeconds;
};

export const isValidDateWithTimeAndNotExpired = (year: string, month: string, day: string, hours: string, minutes: string) => {

    const inputDate = year + "-" + month + "-" + day;
    if (year == "" || month == "" || day == "" || minutes == "" || hours == "") {
        return null
    }
    if (!isValidDate(Number(day), Number(month), Number(year))) {
        return false;
    }
    if (!isValidTime(hours,minutes)) {
        return false
    }
    const time = inputDate + "T" + hours + ":" + minutes
    const timeObj = new Date(time);
    const currentDate = new Date();

    return timeObj >= currentDate;
};

export const isValidTime = (hours: string, minutes: string) => {
    if (Number(hours) >= 24 || Number(minutes) >= 60) {
        return false
    }
    return true
}