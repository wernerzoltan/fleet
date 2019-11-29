import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fleet-manager';
  driver: any = {};
  cols: any[] = [];
  listSubscription: Subscription;

  constructor(
    private baseService: BaseService,
    private config: ConfigService
  ) {}

  ngOnInit() {
    this.cols = this.config.cols.drivers;
    this.listSubscription = this.baseService.getAll('drivers')
      .subscribe( //3 függvényt vár
        list => {this.driver = list;}, //1. függvény: ha megérkeznek az adatok (a list-ből), akkor az adokkal legyen egyenlő a driver
        err => console.error(err), //2. függvény: ha jön hibaüzenet, akkor a konsolra kiírjuk
        () => console.log('unsubscribed') //3. függvény: ha leiratkoztunk az adatforrásról, akkor a logba kiírjuk
        );
  }

  ngOnDestroy() {
      this.listSubscription.unsubscribe();
  }

  onCreate(row: any): void {
      this.baseService.create('drivers', row);
  }

   onUpdate(row: any): void {
     this.baseService.update('drivers', row);
 }

  onDelete(row: any): void {
  this.baseService.delete('drivers', row);
}

}
