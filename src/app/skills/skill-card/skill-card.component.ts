import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill;
  @Input() index = 0;
  @Input() last: boolean = false;
  @Output() onButtonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
