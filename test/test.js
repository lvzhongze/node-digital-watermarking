const dw = require('../index');
//EnCode Image add digital watermarking
let srcFileName = "srcImg.png";
let watermarkText = "github.com/zy445566";
let fontSize = 1.1;
let enCodeFileName = "enCode.png";
dw.transformImageWithText(srcFileName,watermarkText,fontSize,enCodeFileName);

//DeCode Image get digital watermarking
let deCodeFileName = "deCode.png";
dw.getTextFormImage(enCodeFileName,deCodeFileName);