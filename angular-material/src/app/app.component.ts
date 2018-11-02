import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {}

  stiri: Stire[];

//   stiri: Stire[] = [
//     {
//       titlu: 'Copper on the rise',
//       continut: 'Copper price soars amid global market optimism and increased demand.'
//     },
//     {
//       titlu: 'U.S. tech startups rebound',
//       continut: 'Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.'
//     },
//     {
//       titlu: 'Asia s clean energy ambitions',
//       continut: 'China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia'
//     }
// ];

  ngOnInit() {
    this.getStiri().subscribe(
      data => {
        console.log(data);
        this.stiri = data;
      }
    );
  }

  getStiri(): Observable<any> {
    return this.http.get('http://localhost:8080/stiri');
  }

}

export class Stire {
  id: number;
  titlu: string;
  continut: string;
}

