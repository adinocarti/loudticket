import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const dummyEvents = [
    { id: '1', name: 'Event A' },
    { id: '2', name: 'Event B' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Sicherstellen, dass keine unerwarteten Requests offen sind
  });

  it('should fetch all events via GET', () => {
    service.getAllEvents().subscribe(events => {
      expect(events.length).toBe(2);
      expect(events).toEqual(dummyEvents);
    });

    const req = httpMock.expectOne(
      `${service['baseUrl']}events.json?apikey=${environment.ticketmasterApiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyEvents);
  });
});
