
const userName = "Tom";
const userAge = 18;
 
let userIsAdmin = false;
let userIsLoggedIn = false;
let userIsBlocked = false;
 
let goToPage = "";
//Sjekker om brukernavnet eksisterer/Har innhold
if (userName){
    console.log("Username exists")
} else {
    console.log("Username does not exist")
}
//Sjekker om brukeren er over eller under 18
if(userAge >= 18){
    console.log("Brukeren er 18 eller over")
} else {
    console.log("Brukeren er under 18")
}
//Sjekker at user ikke er blokkert
if (userIsBlocked === true){
    console.log("User is blocked")
} else {
    console.log("User is not blocked")
}

//Sjekker alle kriterier
if (userName && userAge >= 18 && userIsBlocked === false && userIsAdmin === false){
    goToPage = "/home"
    userIsLoggedIn = true;
//Sjekker om bruker er admin
}else if(userName && userIsAdmin === true && userIsBlocked === false){
    goToPage = "/admin"
    userIsLoggedIn = true;
//Feilmelding om kriterier ikke blir oppfylt
} else {
   goToPage = "Error"
}

//Console.log for å sjekke om alt fungerer
console.log(goToPage)
