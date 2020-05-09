function switchColors() {
    if (document.getElementById("square").style.backgroundColor == "red") {
        document.getElementById("square").style.backgroundColor = "green";
        console.log("I am green");
    } else {
        document.getElementById("square").style.backgroundColor = "red";
        console.log("I am red");
    }
     
}


