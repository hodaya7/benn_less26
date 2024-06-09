document.querySelector("#submit").addEventListener("click", function(){
    alert(document.getElementById("t").value)
});

//הוספת עיצוב לאלמנט
document.querySelector(".push").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".hello").classList.add("hello1");
});

//טוגל-מוסיף ומסיר עיצוב לסירוגין
document.querySelector(".push2").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".hello2").classList.toggle("hello3");
});
