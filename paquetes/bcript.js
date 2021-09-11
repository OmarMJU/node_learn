const bcrypt = require("bcrypt");
const PASSWORD = "1234_S3GUR4!";
const TIMES_CRYPT = 5;

bcrypt.hash(PASSWORD, TIMES_CRYPT, (errorR, hash) => {
    console.log(hash);

    if (errorR) {
        console.error(errorR);
    }

    bcrypt.compare(PASSWORD, hash, (errorC, resul) => {
        console.log(resul);

        if (errorC) {
            console.error(errorC);
        }
    });
});