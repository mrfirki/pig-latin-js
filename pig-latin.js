function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;

  // var pigLatin = "";
  var regex = /[aeiou]/i;

  if (str[0].match(regex)) {

  	str = str + "way";

  }

  else {
  	var notVowel = str.indexOf(str.match(regex)[0]);
  
  	str = str.substr(notVowel) + str.substr(0, notVowel) + "ay";
  }

  //your code goes here

  //change the HTML content of a <p> element with id="pig-latin-word": 
  document.getElementById("pig-latin-word").innerHTML = str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});