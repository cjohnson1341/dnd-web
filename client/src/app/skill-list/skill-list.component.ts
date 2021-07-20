import { Component, OnInit } from '@angular/core';

import { SkillService } from '../shared/skill/skill.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})

export class SkillListComponent implements OnInit {

  headers = ["Proficient", "Bonus", "Skill", "Modifier"];

  skills: Array<any>;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getAllSkills().subscribe(data => {
      this.skills = data
    });    

  }

}
