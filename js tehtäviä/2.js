const arvattavaNumero = Math.floor(Math.random() * 10) + 1;

// Pyydetään käyttäjää syöttämään arvaus
const kayttajanArvaus = prompt("Arvaa numero väliltä 1-10 ");

// tarkistetaan vastaako käyttäjän syöte lukua
if (parseInt(kayttajanArvaus, 10) === arvattavaNumero) {
  alert("Hyvä työ");
} 
else {
  alert("Ei täsmää. numero oli " + arvattavaNumero);
}