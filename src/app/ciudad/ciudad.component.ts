import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})

export class CiudadComponent implements OnInit 
{
  @Input()  ciudadPadre: Ciudad;
  @Output() eventoCiudad = new EventEmitter<Ciudad>();
  
  constructor() {}

  alertaCiudad()
  {
    let nuevaCiudad: Ciudad;
    nuevaCiudad = new Ciudad("Cadiz", "España", "CAD");
    this.eventoCiudad.emit(nuevaCiudad);
    console.log(nuevaCiudad)
  }

  ngOnInit(): void 
  {
  }
}


