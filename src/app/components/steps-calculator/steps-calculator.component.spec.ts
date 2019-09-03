import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsCalculatorComponent } from './steps-calculator.component';
import { FormsModule } from '@angular/forms';

describe('StepsCalculatorComponent', () => {
  let component: StepsCalculatorComponent;
  let fixture: ComponentFixture<StepsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ StepsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CalculatorComponent', () => {
    expect(component).toBeTruthy();
  });

});
