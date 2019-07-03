import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tab = [
    {prenom: "Matar Seck"},
    {prenom: "Aminata Mboup"},
    {prenom: "Cheikh Abba Badji"},
    {prenom: "Babacar Dieng"},
    {prenom: "Serigne Mor Ba"}
  ];
  personToUpdate = -1;
  newValue;
  searchValue="";
  constructor() { }

  ngOnInit() {

  }

  addToList(valeur){
    this.tab.push({prenom: valeur});
  }

  update(index){
    //let input = <HTMLInputElement> document.getElementById('upd');
    this.tab[index].prenom = this.newValue;
    this.personToUpdate = -1;
  }

}
