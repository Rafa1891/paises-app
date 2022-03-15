import { Component, Input, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises:Countries[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
