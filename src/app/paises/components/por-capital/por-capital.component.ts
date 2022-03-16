import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',

})
export class PorCapitalComponent implements OnInit {


  termino:string="";
  paises:Countries[]=[];

  existeError:boolean=false;

  constructor(private servicio:PaisService,private router:Router) { }

  buscar(dato:string){
    console.log(this.termino);
    this.termino=dato;
    this.existeError=false;

    this.servicio.buscarCapital(this.termino).subscribe(resp=>{
      console.log(resp);
      this.paises=resp;
    },(err)=>{
      console.log(err);
      this.existeError=true;
    })
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

}
