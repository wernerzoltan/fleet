import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  cols = { //objektumot hozunk létre
    drivers: [ //az objektumban pedig egy tömböt hozunk létre
      { key: 'id', text: '#', type: "plain" },
      { key: 'name', text: 'Name', type: "text" },
      { key: 'email', text: 'Email', type: "email" },
      { key: 'phone', text: 'Phone', type: "number" },
      { key: 'city', text: 'City', type: "select",
          options: [
            {value: "la", text: "LA"},
            {value: "bp", text: "Bp"}
          ] },
      { key: 'address', text: 'Address', type: "text" }
    ],

    vehicles: [
      { key: 'id', text: '#', type: "plain" },
      { key: 'lp', text: 'LP.', type: "text" },
      { key: 'year', text: 'Year.', type: "number" },
      { key: 'manufacturer', text: 'Man.', type: "text" },
      { key: 'consumption', text: 'Cons.', type: "text" },
      { key: 'engine', text: 'Eng.', type: "text" }
    ],

    fuelings: [
      { key: 'id', text: '#', type: "plain" },
      { key: 'vehicle', text: 'Veh.', type: "text" },
      { key: 'driver', text: 'Driv.', type: "text" },
      { key: 'amount', text: 'Am.', type: "text" },
      { key: 'date', text: 'Dat.', type: "text" }
    ]
  };

  constructor() { }
}
