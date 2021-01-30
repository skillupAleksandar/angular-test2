import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      name: 'HTML', imageSrc: 'assets/images/html.png', btnName: 'Learn More'
    },
    {
      name: 'CSS', imageSrc: 'assets/images/css.png', btnName: 'Learn More'
    },
    {
      name: 'Angular', imageSrc: 'assets/images/angular.png', btnName: 'TBD'
    },
    {
      name: 'React', imageSrc: 'assets/images/angular.png', btnName: 'React'
    }
  ]


  niza = ['Aleksandar ChASD', 'Aleksandar M', 'Davcev', 'Ivana', 'Kate', 'Kristijan', 'Martin', 'Vlatko']

  constructor() { }

  ngOnInit(): void {
  }

}
