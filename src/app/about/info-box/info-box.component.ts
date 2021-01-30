import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() infoNumber: string
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoNumber);
  }

  onSubmitClicked() {
    this.onDelete.emit(this.infoNumber);
  }

}
