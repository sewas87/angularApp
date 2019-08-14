import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];

  private id: number;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {

    this.routeSubscription = route.params.subscribe(params => this.id = params.id);
  }
  ngOnInit() {}
}
