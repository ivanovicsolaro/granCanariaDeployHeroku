import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private sectionNameSource = new BehaviorSubject('');
  currentSectionName = this.sectionNameSource.asObservable();

  constructor() {
  }

  updateSectionName(sectionName: string) {
    this.sectionNameSource.next(sectionName);
  }
}
