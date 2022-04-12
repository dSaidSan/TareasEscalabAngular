import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/tareaUno/data.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  data : any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

}
