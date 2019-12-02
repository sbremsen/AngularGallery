import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: object;
  display: string;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBeer().subscribe(data => {
      this.brews = data;
      this.display = this.brews.toString();
      console.log(this.brews);
    }
  );
  }

}
