import { TestServiceService } from './../../services/test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  returned: string[];

  constructor(service: TestServiceService) {
    this.returned=service.getContent();
   }

  ngOnInit(): void {
  }

}
