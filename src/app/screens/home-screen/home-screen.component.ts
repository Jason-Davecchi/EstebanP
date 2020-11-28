import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  public products: Product[];

  constructor(){
    this.products = [
        {
          id: '1',
          image: 'assets/image/kiwi.png',
          title: 'Kiwi',
          price: 3000,
          cantidad: 'Por kilo',
          description: 'Kiwi granel',
          tipo: 'Fruta'
        },
        {
          id: '2',
          image: 'assets/image/lechuga.png',
          title: 'Lechuga',
          price: 250,
          cantidad: 'Por unidad',
          description: 'Lechuga Francesa',
          tipo: 'Verdura'
        },
        {
          id: '3',
          image: 'assets/image/Manzana Verde.png',
          title: 'Manzana Verde',
          price: 1300,
          cantidad: 'Por kilo',
          description: 'Manzana verde',
          tipo: 'Fruta'
        },
        {
          id: '4',
          image: 'assets/image/Manzana roja.png',
          title: 'Manzana Roja',
          price: 800,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '5',
          image: 'assets/image/limon.png',
          title: 'Limon',
          price: 890,
          cantidad: 'Por kilo',
          description: 'Limon fresco',
          tipo: 'Fruta'
        },
        {
          id: '6',
          image: 'assets/image/Palta Negra.png',
          title: 'Palta Negra',
          price: 3490,
          cantidad: 'Por kilo',
          description: 'AGUACATE',
          tipo: 'Verdura'
        },
        {
          id: '7',
          image: 'assets/image/melon calameño.png',
          title: 'Melon calameño',
          price: 590,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '8',
          image: 'assets/image/Naranja.png',
          title: 'Naranja',
          price: 1590,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '9',
          image: 'assets/image/Pimiento rojo.png',
          title: 'Pimiento rojo',
          price: 590,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        },
        {
          id: '10',
          image: 'assets/image/Pimiento verde.png',
          title: 'Pimiento verde',
          price: 590,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        },
        {
          id: '11',
          image: 'assets/image/Melon tuna.png',
          title: 'Melon tuna',
          price: 1500,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '12',
          image: 'assets/image/Palta Fuerte.png',
          title: 'Palta fuerte',
          price: 3979,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        },
        {
          id: '13',
          image: 'assets/image/PaltaHass.png',
          title: 'Palta Hass',
          price: 4500,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        }
      ];
  }

  ngOnInit(): void {
  }

  public getAllProducts(): Product []{
    return this.products;
  }

  public getProcudId(id: string): Product{
    return this.products.find((product: Product) => product.id === id);
  }

}
