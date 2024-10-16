import { CidadeService } from './cidade.service';
import { TestBed } from '@angular/core/testing';


describe('CidadeService', () => {
  let service: CidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
