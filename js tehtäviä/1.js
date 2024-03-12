function paivaJaAika() {
    
    const paiva = new Intl.DateTimeFormat('fi-FI', { dateStyle: 'full' }).format();
    const aika = new Intl.DateTimeFormat('fi-FI', { timeStyle: 'medium' }).format();
    
    console.log(`Tänään on: ${paiva}.`);
    console.log(`Nykyinen aika on: ${aika}`);
  }
  
  paivaJaAika();