import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../interfaces/house.interface';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  listadoCasas: House[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getHouseList().subscribe((data: House[]) => {
      this.listadoCasas = data;
    });
  }

  trackById(index: number, item: House): number {
    return item.id;
  }
}