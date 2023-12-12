import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/existencias'])
  }


}
