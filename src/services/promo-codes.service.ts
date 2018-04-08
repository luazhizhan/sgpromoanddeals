import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class PromoCodesService {
    constructor(private db: AngularFirestore) { }

    getPromoCodesByType(type: string) {
        return this.db.collection('promoCodes', ref => ref.where('type', '==', type)).valueChanges();
    }
}