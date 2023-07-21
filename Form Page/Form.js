// form page validations  
const submitForm = () => {
  var fname = document.getElementById("firstName").value;
  var lname = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var rePassword = document.getElementById("Re-Password").value;
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");

  if (fname == "" || fname == null) {
    alert("plzz fill the first name");
  } else if (lname == "" || lname == null) {
    alert("plzz fill the last name");
  }
  else if(email == "" || email == null){
    alert("plzz fill the email")
  }
  else if(atposition < 3 || dotposition < atposition + 2 || dotposition + 2 >= email.length){
    alert("plzz fill the right mail")
  }
  else if(number == "" || number == null){
    alert("plzz fill the numbers")
  }
  else if( number.length <= 9 || number.length >= 11){
    alert("plzz take olny 10 numbers")
  }
  else if(password == "" || password == null){
    alert("plzz fill the password")
  }
  else if(password.length < 4 ){
    alert("your password will be greater then 4 digit")
  }
  else if(rePassword !== password ){
    alert("Re-Password has been wrong")
  }
  else {
    alert("Done");
  }


};
