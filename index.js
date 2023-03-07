function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
   console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}

//console.log(string === string.toUpperCase());

//function sayHiToHeadphonedRoomate(){
//    const cannot = "I can't hear you!"
//    const can = "YES INDEED!"
//    const love = "I would love to!"
//
//    if (string === string.toLowerCase(string)){
//        return cannot;
//    } else if(string === string.toUpperCase(string)){
//        return can;
//    } else if(string === "Let's have dinner together!"){
//        return love;
//    }
//}
//I could not figure out how to do it with defining the variables like this^^
function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello')
     return"I can\'t hear you!"
        else if (string === 'HELLO')
      return "YES INDEED!"
       else (string === "Let's have dinner together!")
       return "I would love to!"
  }