import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/tareaDos/paises.service';

@Component({
  selector: 'app-tarea-dos-paises',
  templateUrl: './tarea-dos-paises.component.html',
  styleUrls: ['./tarea-dos-paises.component.css']
})
export class TareaDosPaisesComponent implements OnInit {

  paisesData: any;

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
    this.getPaisData();
  }

  getPaisData() {
    this.paisesData = this.paisService.getPaisesData().subscribe(resp => {
      this.paisesData = resp;
    });
  }
}
