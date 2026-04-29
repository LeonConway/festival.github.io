
window.openDay = function(dayName) 
{
    var i;
    
   //hide tabs
    var x = document.getElementsByClassName("schedule-content");
    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";
    }

    //reset
    var tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].classList.remove("active");
    }

    //show current
    document.getElementById(dayName).style.display = "block";

    //highlight button
    var currentBtn = document.querySelector("button[onclick*='" + dayName + "']");
    if (currentBtn) 
    {
        currentBtn.classList.add("active");
    }
}