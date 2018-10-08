import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { DataService } from '../data.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.css']
})
export class CardStudentComponent implements OnInit {
  formSkill: FormGroup;

  skill: Skill = {
    skill: '',
  };

  constructor(config: NgbPopoverConfig, private formBuilder: FormBuilder, private afs: AngularFirestore,
  private dataservice: DataService,
  ) { this.createSkillForm(); }

  ngOnInit() {
  }

  createSkillForm() {
    this.formSkill = this.formBuilder.group( {
      newSkill: ['', Validators.compose([Validators.required])]
    });
  }

  addNewSkill() {
    this.skill.skill = this.formSkill.value.newSkill;
    this.dataservice.addSkill(this.skill);
  }
}
