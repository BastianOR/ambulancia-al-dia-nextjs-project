/* Returns the current month as a 3 character string */
export function todaysMonth() {
    const datenow = new Date();
    const todaysmonth = datenow.getMonth();
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    return months[todaysmonth];
  }
  
  /* Returns today's day date as a string */
  export function todaysDate() {
    const datenow = new Date();
    const today = datenow.getDate();
    const todayString = today.toString();
    return todayString;
  }