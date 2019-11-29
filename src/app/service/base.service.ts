import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverUrl: string = "http://localhost:3000/";
  observables: any = {
  };

  constructor(
    private http: HttpClient
  ) { }

  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    if (!this.observables[dataType]) { //ha nincsen olyan observable ami kell nekünk, akkor létrehoz egy új subject-et
      this.observables[dataType] = new Subject(); //a subject nem más mint egy egyszerűbb observable
    }
    this.http.get(url).forEach( //ha az adatok megjöttek, akkor
      data => this.observables[dataType].next(data) //az adatokat beletesszük, és mindenki értesül arról, hogy új adat érkezik
    );

    return this.observables[dataType];
  }

  create(dataType: string, row: any): void {
    let url = `${this.serverUrl}${dataType}`;
    this.http.post(url, row)
      .forEach(  //csak egyszer kéri le az adatokat szemben a subscribe-el
        //response => console.log(response));   //a szerver válaszát a logba beírjuk
        response => this.getAll(dataType));
    }

  update(dataType: string, row: any): void {
      let url = `${this.serverUrl}${dataType}/${row.id}`;
      this.http.put(url, row)
        .forEach(response => this.getAll(dataType));
      }

  delete(dataType: string, row: any): void {
        let url = `${this.serverUrl}${dataType}/${row.id}`;
        this.http.delete(url)
          .forEach(response => this.getAll(dataType));
        }

}
