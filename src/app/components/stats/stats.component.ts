import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from '../../services/statistiques.service';
import { Stats } from '../../models/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statistiquesService: StatistiquesService) { }

  byWeapon: Stats[] = [];
  byRarity: Stats[] = [];
  byElement: Stats[] = [];

  getByWeapon(): void {
    this.statistiquesService.getCharacterCountByWeaponType()
      .subscribe(byWeapon => this.byWeapon = byWeapon);
  }

  getByRarity(): void {
    this.statistiquesService.getCharacterCountByRarity()
      .subscribe(byRarity => this.byRarity = byRarity);
  }

  getByElement(): void {
    this.statistiquesService.getCharacterCountByElement()
      .subscribe(byElement => this.byElement = byElement);
  }

  ngOnInit(): void {
    
  }
}
