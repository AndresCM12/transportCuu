import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map;
  mapVisibility = false;
  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWFsdGhlYWRhIiwiYSI6ImNsN3dmMmZmbDBrdXkzdW9mOTIxb2xhN2sifQ.dsxMgTBMvRh3BAQYuQGSLA';
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/maltheada/cl7wesygc004114nxfqez7e96', // style URL
      center: [-106.067611, 28.631725], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });
    this.map.on('load', () => {
      this.map.resize();
      this.mapVisibility = true;
    });
  }
  openSideMenu() {
    this.menu.open('first');
  }
  navigateTo(route) {
    this.router.navigate([route]);
  }
}
