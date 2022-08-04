let myName=prompt("Please enter the name");
console.log(myName);

let myWeight=prompt ("Please enter the weight");
console.log(parseFloat(myWeight));

let myHeight=prompt("Please enter the height");
console.log(parseFloat(myHeight));

let Bmr=  myWeight/ Math.pow(myHeight,2);
console.log("Your Bmr is", Bmr);
switch(Bmr)
{
    case(Bmr<=18.5):
    console.log(myName,"Your bmr is less than 18.5 so you are **UNDERWEIGHT**");
    break;
    case (Bmr>18.5 && Bmr<=24.9):
        console.log(myName,"Your bmr is more than 18.5 and less than 24.9 so you are **NORMAL**");
    break;
    case (Bmr>=25 && Bmr<=29.9):
        console.log(myName,"Your bmr is more than25.0 less than 29.9 so you are **OVERQEIGHT**");
    break;
    case (Bmr>=30 && Bmr<=34.9):
        console.log(myName,"Your bmr is more than 30 less than 34.9 so you are ! OBESE !");
    break;
    default:
        console.log(myName,"Your bmr is more than 35 so you are !! EXTREMELY OBESE !!");

}
//adinizi,cekinizi.boyunuzu istesin,
//bmr=ceki/boy ustu 2
