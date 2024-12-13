function searchCharacterClasses(string) {
    const digits = string.match(/\d+/g) || [];
    const uppercase = string.match(/[A-Z]/g) || [];
    const lowercase = string.match(/[a-z]/g) || [];
    const specialChars = string.match(/[^a-zA-Z0-9\s]/g) || [];

    return {
        digits,
        uppercase,
        lowercase,
        specialChars
    };
}

console.log(searchCharacterClasses("Hello World! 123 @#$"));
