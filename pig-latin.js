function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;
  

  //your code goes here

  //change the HTML content of a <p> element with id="pig-latin-word": 
  document.getElementById("pig-latin-word").innerHTML = str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});