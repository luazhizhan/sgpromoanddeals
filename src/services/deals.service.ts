import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class DealsService {
    constructor(private db: AngularFirestore) { }

    getAllDeals() {
        return this.db.collection('deals').valueChanges();
    }
}