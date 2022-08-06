import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../coord/etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  Coor_etu: Etudiant[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
