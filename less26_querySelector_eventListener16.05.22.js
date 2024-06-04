//פו אנונימית
document.querySelector("#submit").addEventListener("click", function (e) {
    //e.preventDefault();
   if (document.querySelector("#email").value.includes("@"))
   alert("your user successfully created")
   else
   alert("not a valid email"); 
});