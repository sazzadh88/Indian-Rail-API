import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent implements OnInit {

  response:any;

  title = 'RailwayAPI';

  URL = 'YOUR_API_URL';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.URL).subscribe((res: any[]) => {
      this.response = JSON.stringify(res);
    });

  }
}
