export const getZodiacSign = (day: number, month: number) => {
  let sign = "";
  let emoji = "";
  if (day == 0) {
    return " ";
  }
  switch (month) {
    case 1:
      if (day <= 19) {
        sign = "Козеріг";
        emoji = "♑️";
      } else {
        sign = "Водолій";
        emoji = "♒️";
      }
      break;
    case 2:
      if (day <= 18) {
        sign = "Водолій";
        emoji = "♒️";
      } else {
        sign = "Риби";
        emoji = "♓️";
      }
      break;
    case 3:
      if (day <= 20) {
        sign = "Риби";
        emoji = "♓️";
      } else {
        sign = "Овен";
        emoji = "♈️";
      }
      break;
    case 4:
      if (day <= 19) {
        sign = "Овен";
        emoji = "♈️";
      } else {
        sign = "Телець";
        emoji = "♉️";
      }
      break;
    case 5:
      if (day <= 20) {
        sign = "Телець";
        emoji = "♉️";
      } else {
        sign = "Близнюки";
        emoji = "♊️";
      }
      break;
    case 6:
      if (day <= 21) {
        sign = "Близнюки";
        emoji = "♊️";
      } else {
        sign = "Рак";
        emoji = "♋️";
      }
      break;
    case 7:
      if (day <= 22) {
        sign = "Рак";
        emoji = "♋️";
      } else {
        sign = "Лев";
        emoji = "♌️";
      }
      break;
    case 8:
      if (day <= 22) {
        sign = "Лев";
        emoji = "♌️";
      } else {
        sign = "Діва";
        emoji = "♍️";
      }
      break;
    case 9:
      if (day <= 22) {
        sign = "Діва";
        emoji = "♍️";
      } else {
        sign = "Терези";
        emoji = "♎️";
      }
      break;
    case 10:
      if (day <= 23) {
        sign = "Терези";
        emoji = "♎️";
      } else {
        sign = "Скорпіон";
        emoji = "♏️";
      }
      break;
    case 11:
      if (day <= 21) {
        sign = "Скорпіон";
        emoji = "♏️";
      } else {
        sign = "Стрілець";
        emoji = "♐️";
      }
      break;
    case 12:
      if (day <= 21) {
        sign = "Стрілець";
        emoji = "♐️";
      } else {
        sign = "Козеріг";
        emoji = "♑️";
      }
      break;
    default:
      sign = "";
      emoji = "";
  }

  return sign + " " + emoji;
};
