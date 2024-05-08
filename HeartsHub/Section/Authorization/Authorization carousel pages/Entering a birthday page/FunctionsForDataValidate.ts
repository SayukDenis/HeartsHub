export const daysInMonth = (month: number, year: number) => {
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
  export const isValidDate = (day: number, month: number, year: number) => {
    month = month - 1;
    return (
      month >= 0 &&
      month < 12 &&
      day > 0 &&
      day <= daysInMonth(Number(month), Number(year))
    );
  };