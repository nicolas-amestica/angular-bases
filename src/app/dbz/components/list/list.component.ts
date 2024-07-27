import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    name: 'trunks',
    power: 10
  }];

  @Output()
  public onDeleteIdCharacter:EventEmitter<string> = new EventEmitter();

  onDelete(id: string): void {

    this.onDeleteIdCharacter.emit(id);

  }

}
