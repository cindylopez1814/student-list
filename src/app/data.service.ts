import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  skillCollection: AngularFirestoreCollection<Skill>;
  skill: Observable<Skill[]>;
  skillDoc: AngularFirestoreDocument<Skill>;

  constructor( private afs: AngularFirestore ) {
    this.skillCollection = afs.collection<Skill>('skills');
    this.skill = this.skillCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Skill;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  gelSkill() {
    return this.skill;
  }

  addSkill(skill: Skill) {
    this.skillCollection.add(skill);
  }

  getSkilCollection() {
    return this.skillCollection;
  }
}
