import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SummaryService } from './summary.service';
import { Summary } from '../model/summary.model';

describe('SummaryService', () => {
  let service: SummaryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SummaryService]
    });
    service = TestBed.inject(SummaryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get summary', () => {
    const dummySummary: Summary = {
      totalQuantity: 100,
      totalAmount: 5000,
      totalNetAmount: 4500,
      totalAverageAmount: 45,
      initialDate: '2021-01-01',
      finalDate: '2021-12-31'
    };

    service.getSummary().subscribe((summary: Summary) => {
      expect(summary.totalQuantity).toEqual(dummySummary.totalQuantity);
      expect(summary.totalAmount).toEqual(dummySummary.totalAmount);
      expect(summary.totalNetAmount).toEqual(dummySummary.totalNetAmount);
      expect(summary.totalAverageAmount).toEqual(dummySummary.totalAverageAmount);
      expect(summary.initialDate).toEqual(dummySummary.initialDate);
      expect(summary.finalDate).toEqual(dummySummary.finalDate);
    });

    const req = httpMock.expectOne('http://localhost:3000/summary');
    expect(req.request.method).toBe('GET');
    req.flush(dummySummary);
  });
});
