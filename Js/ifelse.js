let alder = 18



var valg = prompt("Velg Krone eller Mynt:").toLowerCase();
var krone = Math.floor(Math.random() * 2);

if ((krone === 0 && valg === "kron") || (krone === 1 && valg === "mynt")) {
    console.log(valg.charAt(0).toUpperCase() + valg.slice(1) + "! Gratulerer!");
} else {
    console.log("Prøv igjen.");
}




if (alder >= 18 ) {
    console.log("Personen kan ta billappen")
}
else if (alder >= 16) {
    console.log("Moped");
}
else {
    console.log("Du må venta med å ta lappen");
}


if (alder >= 18 ) {
    console.log("Bil")
    }

if (alder >= 16) {
        console.log("Moped");
    }

if (alder <= 16) {
        console.log("Vent");
}
