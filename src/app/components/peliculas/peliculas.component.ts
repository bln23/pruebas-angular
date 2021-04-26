import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  public comentarios: string;

  constructor() { 
    this.comentarios = "peliculas works!"
    
    console.log(this.comentarios);
  }
}
