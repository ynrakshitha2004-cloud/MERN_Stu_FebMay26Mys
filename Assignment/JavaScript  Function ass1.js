function tagPassword(password) {

    if (typeof password != "string") {
        return "INVALID";
    }

    let letters = false;
    let numbers = false;

    for (let i = 0; i < password.length; i++) {

        let ch = password[i];

        if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
            letters = true;
        }

        if (ch >= '0' && ch <= '9') {
            numbers = true;
        }
    }

    if (password.length < 8) {
        return "WEAK";
    }
    else if (password.length >= 12 && letters && numbers) {
        return "STRONG";
    }
    else if (password.length >= 8 && letters && numbers) {
        return "MEDIUM";
    }
    else {
        return "WEAK";
    }
}