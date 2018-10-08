import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { DataService } from '../data.service';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
skill: any;

  constructor(public database: DataService) { }

  ngOnInit() {
    this.database.gelSkill().subscribe(skill => {
      this.skill = skill;
      console.log(this.skill);
    });
  }

  deleteSkill(skill) {
    this.database.getSkilCollection().ref.doc(skill.id).delete();
  }
}
