import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/service/summary.service';
import { Summary } from 'src/app/model/summary.model';

@Component({
  selector: 'app-resume-trans',
  templateUrl: './resume-trans.component.html',
  styleUrls: ['./resume-trans.component.css']
})
export class ResumeTransComponent implements OnInit {
  summary!: Summary;

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    this.loadSummary();
  }

  private loadSummary(): void {
    this.summaryService.getSummary().subscribe(
      (data: Summary) => {
        this.summary = data;
      },
      (error) => {
        console.error('Error loading summary:', error);
      }
    );
  }
}
