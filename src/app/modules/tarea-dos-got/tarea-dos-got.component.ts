import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/services/tareaDos/got.service';

@Component({
  selector: 'app-tarea-dos-got',
  templateUrl: './tarea-dos-got.component.html',
  styleUrls: ['./tarea-dos-got.component.css']
})
export class TareaDosGotComponent implements OnInit {

  gotData: any;

  constructor(private gotService: GotService) { }

  ngOnInit(): void {
    this.getGotData();
  }

  getGotData() {
    this.gotData = this.gotService.getGotData().subscribe(resp => {
      this.gotData = resp;
    });
  }
}
