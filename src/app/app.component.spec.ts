import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StepsCalculatorComponent } from './components/steps-calculator/steps-calculator.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [
        AppComponent,
        StepsCalculatorComponent
      ],
    }).compileComponents();
  }));
  it('should create the root component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
