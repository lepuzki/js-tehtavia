function ovatkoKaikkiNumerotSamat(luku) {
    return new Set(luku.toString()).size === 1;
  }
console.log(ovatkoKaikkiNumerotSamat(11111));
console.log(ovatkoKaikkiNumerotSamat(1313131));

// set objekti voi sisältää vain yksilöllisiä arvoja
// jos objektin koko on 1; luku pakosti sisältää yhtä lukua