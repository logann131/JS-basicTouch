/* Nam Phu Nguyen (Logan)
   IT 206
   Programing Assignment
 */ 

//this code will run when the page is loaded
window.onload = function () {
    //select my element
    var para = document.querySelector("p");
    //update the inner HTML of the paragraph
    para.innerHTML = para.innerHTML + " (tomorrow morning)";
};

window.onload = function() {
    //set a timer event
    window.setInterval(function() {
        //select the span and get the date
        var span = document.querySelector("span");
        var now = new Date();

        //get the time
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var millis = now.getMilliseconds();

        //add the current time to the span
        span.innerHTML = hours + ":" + minutes +":" + seconds +":" +millis;

    }, 100);

};
