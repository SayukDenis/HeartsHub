export function getAge(birthDate: string): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const differenceInMilliseconds = today.getTime() - birthDateObj.getTime();
    const ageInYears = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    );

    return ageInYears;
  }