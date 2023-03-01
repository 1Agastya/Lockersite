function validate()
{
var Username=document.getElementById("Username").value;
var Password=document.getElementById("Password").value;

if (Username=="admin" && Password=="admin")
{
  alert("Login successfully" );
  onclick("log");
  
}
else
{
 alert("Login fail *retry*");
 
}

} 
