const bcrypt = require("bcrypt");
const interations = 5;
const user = {
    name: "Dannita Bonita",
    password: "Omarannys.#06910991"
};

async function chekPassword(passwordHash) {
    const match = await bcrypt.compare(user.password, passwordHash);

    if (match) {
        console.log(`Login Success!!`);
    } else {
        console.log(`Don't match!!`);        
    }
}

bcrypt.hash(user.password, interations).then(myHash => {
    console.log(`El password cifrado es ${myHash}`);

    // Comparando el password con el dato cifrado.
    chekPassword(myHash);
});

