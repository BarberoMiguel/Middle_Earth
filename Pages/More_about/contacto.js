document.getElementById("formulario").addEventListener("submit", function(event) {
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const tel = event.target.tel.value;
    const suggestion = event.target.suggestion.checked;
    const error = event.target.error.checked;
    const ask = event.target.ask.checked;
    const other = event.target.other.checked;
    const box = event.target.box.value;
    let msj = "";
    let caja = document.querySelectorAll("input");
    if (name.length > 30 || name.length < 2) {
      msj += "The Name must be between 2 and 30 characters\n";
      caja[0].style.backgroundColor = "#FF754D";
    } else {caja[0].style.backgroundColor = ""};
    if (surname.length > 30 || surname.length < 2) {
      msj += "The Last Name must be between 2 and 30 characters\n";
      caja[1].style.backgroundColor = "#FF754D";
   } else {caja[1].style.backgroundColor = ""};
   if (!email.endsWith(".com") && !email.endsWith(".es") || !email.includes("@")) {
      msj += "You must provide a valid email\n";
      caja[2].style.backgroundColor = "#FF754D";
   } else {caja[2].style.backgroundColor = ""};
   if (tel.length != 9 && tel.length != 0) {
      msj += "You must provide a valid telephone\n";
      caja[3].style.backgroundColor = "#FF754D";
   } else {caja[3].style.backgroundColor = ""};
   if (!suggestion && !error && !ask && !other) {
      msj += "You must select at least one motive\n";
   }
   if (box.length < 2) {
      msj += "You must describe your motive\n";
      document.querySelector("textarea").style.backgroundColor = "#FF754D";
   } else {document.querySelector("textarea").style.backgroundColor = "";};
   if (msj != 0) {
      event.preventDefault();
      alert(msj);
   };
});

