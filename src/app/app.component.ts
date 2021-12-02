import { Component } from '@angular/core';
import { Ciudad } from './models/ciudad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'dia7';

  public ciudad: Ciudad
  // public ciudades: Ciudad[];
  public ciudadHijo: Ciudad

  constructor()
  {
    this.ciudad = new Ciudad("Barcelona", "España", "BAR");
    // this.ciudades = [new Ciudad("Barcelona", "España", "BAR"), 
    //                  new Ciudad("Madrid", "España", "MAD"),
    //                  new Ciudad("Cadiz", "España", "CAD")]   
  }

  eligeCiudad(nuevaCiudad: Ciudad)
  {
    console.log(nuevaCiudad);
    this.ciudadHijo = nuevaCiudad;
  }
}


