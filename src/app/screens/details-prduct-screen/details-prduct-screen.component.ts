import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ComponentesProductComponent } from 'src/app/componentes-product/componentes-product.component';

@Component({
  selector: 'app-details-prduct-screen',
  templateUrl: './details-prduct-screen.component.html',
  styleUrls: ['./details-prduct-screen.component.less']
})
export class DetailsPrductScreenComponent implements OnInit {

  public product: Product;
  id: string;

  constructor() {
  }


  ngOnInit(): void {
  }

}
