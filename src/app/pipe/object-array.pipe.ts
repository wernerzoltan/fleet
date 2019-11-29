import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectArray'
})
export class ObjectArrayPipe implements PipeTransform {

  transform(value: any[], phrase: string = "", key: string = ""): any {

    if (!phrase) { //ha a phrase üres, akkor a teljes adatot szűrés neélkül visszaadjuk
        return value;
    }

    //ha a phrase NEM üres, akkor...
    phrase = phrase.toLowerCase(); //első körben kisbetűssé alakítunk
    return value.filter(val => {  //a megkapott értékeket filter-rel leszűrjük
                                  //val értékkel megkapjuk az értékeket, ezek lesznek az objektumok

        if (!key || key == 'notset') { //ha nincsen beállítva külön mezőre szűrés, akkor az összes mezőre szűrünk

          let isOk: boolean = false;
          for (let k in val) {
              let check = val[k].toString().toLowerCase();
              if (check.indexOf(phrase) > -1) {
                isOk = true;
              }
          }

          return isOk;              //itt pedig visszaadjuk a lista elemeit
        } else {                    //ha van mezőszűrés, akkor csak adott mezőre szűrünk
          let check = val[key].toString().toLowerCase();
          return check.indexOf(phrase) > -1;
      }
    });
  }
}
