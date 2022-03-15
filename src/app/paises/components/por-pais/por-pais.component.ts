import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string="";
  paises:Countries[]=[];

  existeError:boolean=false;

  constructor(private servicio:PaisService) { }

  buscar(dato:string){
    console.log(this.termino);
    this.termino=dato;
    this.existeError=false;

    this.servicio.buscarPais(this.termino).subscribe(resp=>{
      console.log(resp);
      this.paises=resp;
    },(err)=>{
      console.log(err);
      this.existeError=true;
    })
  }


  ngOnInit(): void {
  }

}
