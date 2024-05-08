export function hasSpecialCharacter(input: string): boolean {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    return specialCharacters.test(input);
}
export function hasUpperCase(input: string): boolean {
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (char !== char.toLowerCase()) {
            return true;
        }
    }
    return false;
}
export function hasDigit(input: string): boolean {
    const regex = /\d/;
    return regex.test(input);
}

export function hasWhitespace(input: string): boolean {
    const regex = /\s/;
    return regex.test(input);
  }

