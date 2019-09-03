import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });
  
  //test that check's if the service is created
  it('Service is created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));
  
  //test that check's one instance of a full operation
  it(`1) 1.Add 2,
      2.Multiply 3, 
      3.Apply 3,
      This should return 15`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Add',2);
    let step2 = service.createStep('Multiply',3);
    let step3 = service.createStep('Apply',3);
    expect(service.calculate([step1,step2,step3])).toBe(15);
  }));
  
  //another test that check's one instance of a full operation
  it(`2) 1.Multiply 9
      2.Apply 5,
      This should return 45`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Multiply', 9);
    let step2 = service.createStep('Apply', 5);
    expect(service.calculate([step1,step2])).toBe(45);
  }));
  
  //another test that check's one instance of a full operation
  it(`3) 1.Apply, This should return 1`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Apply', 1);
    expect(service.calculate([step1])).toBe(1);
  }));
  
  //another test that check's one instance of a full operation
  it(`4) 1.Subtract 10,
      2.Multiply 10,
      3.Apply 20,
      This should return 100`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Subtract', 10);
    let step2 = service.createStep('Multiply', 10);
    let step3 = service.createStep('Apply', 20);
    expect(service.calculate([step1,step2,step3])).toBe(100);
  }));
  
  //another test that check's one instance of a full operation
  it(`5) 1.Divide 20,
      2.Multiply 2,
      3.Subtract 10,
      4.Add 20,
      5.Apply 30,
      This should return 13`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Divide', 20);
    let step2 = service.createStep('Multiply', 2);
    let step3 = service.createStep('Subtract', 10);
    let step4 = service.createStep('Add', 20);
    let step5 = service.createStep('Apply', 30);
    expect(service.calculate([step1,step2,step3,step4,step5])).toBe(13);
  }));
  
  //another test that check's one instance of a full operation
  it(`5) 1.Add 30,
      2.Subtract 20,
      3.Multiply 10,
      4.Divide 2,
      5.Apply 20,
    This should return 150`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Add', 30);
    let step2 = service.createStep('Subtract', 20);
    let step3 = service.createStep('Multiply', 10);
    let step4 = service.createStep('Divide', 2);
    let step5 = service.createStep('Apply', 20);
    expect(service.calculate([step1,step2,step3,step4,step5])).toBe(150);
  }));
  
  //another test that check's one instance of a full operation
  it(`6) 1.Divide 20,
      2.Apply 100,
      This should return 5`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Divide', 20);
    let step2 = service.createStep('Apply', 100);
    expect(service.calculate([step1,step2])).toBe(5);
  }));
  
  //another test that check's one instance of a full operation
  it(`7) 1.Multiply 30,
      2.Subtract 20,
      3.Add 10,
      4.Divide 2,
      5.Apply 5,
      This should return 70`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Multiply', 30);
    let step2 = service.createStep('Subtract', 20);
    let step3 = service.createStep('Add', 10);
    let step4 = service.createStep('Divide', 2);
    let step5 = service.createStep('Apply', 5);
    expect(service.calculate([step1,step2,step3,step4,step5])).toBe(70);
  }));
  
  it(`8) 1.Subtract 2,
      2.Subtract 10,
      3.Divide 10,
      4.Add 5,
      5.Apply 250,
      This should return 28.8`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Subtract', 2);
    let step2 = service.createStep('Subtract', 10);
    let step3 = service.createStep('Divide', 10);
    let step4 = service.createStep('Add', 5);
    let step5 = service.createStep('Apply', 250);
    expect(service.calculate([step1,step2,step3,step4,step5])).toBe(28.8);
  }));
  
  //another test that check's one instance of a full operation
  it(`9) 1.Add 20,
      2.Subtract 10,
      3.Divide 10,
      4.Apply 100,
      This should return 11`, inject([CalculatorService], (service: CalculatorService) => {
    let step1 = service.createStep('Add', 20);
    let step2 = service.createStep('Subtract', 10);
    let step3 = service.createStep('Divide', 10);
    let step4 = service.createStep('Apply', 100);
    expect(service.calculate([step1,step2,step3,step4])).toBe(11);
  }));
  
});
