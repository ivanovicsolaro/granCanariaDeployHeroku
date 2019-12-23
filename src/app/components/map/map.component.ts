import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() lat: string;
  @Input() lng: string;
  @ViewChild('mapElement', {static: true}) mapElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.initMap(this.lat, this.lng);
  }

  initMap(lat, lng) {
    const map = L.map(this.mapElement.nativeElement).setView([lat, lng], 13);

    // tslint:disable-next-line:max-line-length
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXZhbm92aWNzb2xhcm8iLCJhIjoiY2p4czR6YWQxMGc2MjNtcGJoeDMxc2ZhMiJ9.OkBNDx2o55HKTevT6UqCNw', {
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiaXZhbm92aWNzb2xhcm8iLCJhIjoiY2p4czR6YWQxMGc2MjNtcGJoeDMxc2ZhMiJ9.OkBNDx2o55HKTevT6UqCNw'
    }).addTo(map);

    const icon = L.icon({
      iconUrl: './assets/images/place-1.png',
      iconSize: [32, 50], // size of the icon
    });
    L.marker([lat, lng], {icon}).addTo(map);
  }


}
