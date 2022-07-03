import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any[] = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 10000
    },
    {
      "Id": 2,
      "Name": "Erose Villa",
      "Type": "House",
      "Price": 15000
    },
    {
      "Id": 3,
      "Name": "Pearl White House",
      "Type": "House",
      "Price": 32000
    },
    {
      "Id": 4,
      "Name": "Macro House",
      "Type": "House",
      "Price": 25000
    },
    {
      "Id": 5,
      "Name": "Mad House",
      "Type": "House",
      "Price": 18000
    },
    {
      "Id": 6,
      "Name": "My House",
      "Type": "House",
      "Price": 42000
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
