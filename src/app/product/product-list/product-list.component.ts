import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // names: string[];
  @Input() name: string;
  pp: any;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.name, 'jjjjjjj');
    this.pp = this.name;

  }

}
