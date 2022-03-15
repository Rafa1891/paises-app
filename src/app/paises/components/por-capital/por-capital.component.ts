import { Component, OnInit } from '@angular/core';
import { Capitals } from '../../interfaces/capitales.interfaces';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {



/*
  termino:string="";
  capitales:Capitals[]=[];

  existeError:boolean=false;

  constructor(private servicio:CapitalService) { }

  buscar(){
    console.log(this.termino);

    this.existeError=false;

    this.servicio.buscarCapital(this.termino).subscribe(resp=>{
      console.log(resp);
      this.capitales=resp;
    },(err)=>{
      console.log(err);
      this.existeError=true;
    })
  }
*/
  ngOnInit(): void {
  }

}
