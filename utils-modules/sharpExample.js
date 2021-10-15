const sharp = require("sharp");
sharp("./dannita.JPG")
    .resize(300)
    .grayscale()
    .toFile("dannitaResize.png");

