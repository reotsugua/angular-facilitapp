import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get transactions', () => {
    const dummyTransactions = [{ id: 1, date: '2023-09-29', paymentType: 'Credit Card', grossAmount: 100, netAmount: 90, status: 'Success' }];

    service.getTransactions().subscribe(transactions => {
      expect(transactions).toEqual(dummyTransactions);
    });

    const req = httpMock.expectOne('http://localhost:3000/items');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTransactions);
  });
});
