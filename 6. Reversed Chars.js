// function reversedChars (char1, char2, char3){

//     console.log(char3, char2, char1);
// }
// reversedChars('A','B','C');
// reversedChars('1','L','&');


function reversedChars(char1, char2, char3) {
    asStr = (char1 + char2 + char3)
    let rev = " "
    
    for (let i = asStr.length - 1; i >= 0; i--) {
        rev += (asStr[i] + " ")

    }

    console.log(`${rev}` );
}
reversedChars("a", "b", "c")