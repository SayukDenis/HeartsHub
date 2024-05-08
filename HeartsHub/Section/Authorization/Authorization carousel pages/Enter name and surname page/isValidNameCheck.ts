export function isValidNameCheck(name: string) {
    const regex = /^\p{L}+$/u;
    return regex.test(name);
  }