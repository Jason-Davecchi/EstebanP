import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HomeScreenComponent } from '../screens/home-screen/home-screen.component';

import { Product } from '../model/product.model';
import { from } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './componentes-product.component.html',
    styleUrls: ['./componentes-product.component.less']
})

// tslint:disable-next-line: class-name
export class ComponentesProductComponent implements OnInit{
  number: FormControl;

    @Input()
    public product: Product;
    public id: string;
    constructor(){
    }
    ngOnInit(
    ): void {}

    // tslint:disable-next-line: Striing
    setId(id: string) {
       this.id = id;
      // console.log(this.id);
    }

}
