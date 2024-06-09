//פו אנונימית
document.querySelector("#submit").addEventListener("click", function () {//אוטומטית עובר לשם האובייקט שעליו הפעלנו את האירוע
  //  e.preventDefault();//כדי שבסבמיט העמוד לא יתרפרש וימחק מה שהמשתמש בחר- אם שמים input submit ולא באטון
   if (document.querySelector("#email").value.includes("@"))
   alert("your user successfully created")
   else
   alert("not a valid email"); 
});