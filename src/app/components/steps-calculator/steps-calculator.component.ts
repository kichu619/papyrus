import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';//importing calculatorService to use inside this component
import { Step } from './steps-calculator.interface';//importing step interface

@Component({
  selector: 'app-steps-calculator',
  templateUrl: './steps-calculator.component.html',
  styleUrls: ['./steps-calculator.component.css'],
  providers:[CalculatorService]
})
export class StepsCalculatorComponent implements OnInit {
  
  //defining all variables needed for the app
  operations: string[];
  selectedOperation: string;
  operand: number;
  //step interface is defined on step-calculator.interface.ts(two properties operation and operand of types string and number)
  steps: Step[]; 
  result: number;
  inputStatus: boolean;
  calculateButtonStatus: boolean;
  
  constructor(private calculatorService: CalculatorService) { }
  
  ngOnInit() {
    //assigning all variables when component initialises
    this.operations = this.calculatorService.availableOperations();
    this.selectedOperation = 'Add';
    this.operand = null;
    this.result = null;
    this.steps = [];
    this.inputStatus = false;
    this.calculateButtonStatus = true;
  }
  
  public addStep(operation: string, operand: number): void {
    
    //calling createStep method from calculatorService for creating a single step when Add step button is clicked
    let step: Step = this.calculatorService.createStep(operation, operand)
    this.steps.push(step); //the step object is pushed to steps array each time making steps an array of objects
    this.operand = null;
    
    //this condition will decide the state of calculate button and input's
    //whenever the apply operation is added the user input's will be disabled
    //calculate button is enabled only when user add's the apply operation
    if(step.operation === 'Apply'){
      this.inputStatus = true;
      this.calculateButtonStatus = false;
    }
  }
  
  public calculate(steps: Step[]): void {
    
    //calling calculate method from calculatorService which includes all the business logic and calculations and passing the steps object array
    this.result = this.calculatorService.calculate(steps);
  }
  
  //method to reset, this method is called when rest button is clicked
  public resetCalculation(): void {
    
    this.steps = [];
    this.selectedOperation = 'Add';
    this.operand = null;
    this.result = null;
    this.inputStatus = false;
    this.calculateButtonStatus = true;
  }
  
}
