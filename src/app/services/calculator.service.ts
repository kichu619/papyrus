import { Injectable } from '@angular/core';
import { Step } from '../components/steps-calculator/steps-calculator.interface';
@Injectable()
export class CalculatorService {

  constructor() {
  }

  //method that return's all the available operations
  // this method is called and assigned to operations[] inside component class
  public availableOperations() {
    return ['Add', 'Subtract', 'Multiply', 'Divide', 'Apply'];
  }

  //method that return instance of one step(takes two parameter's operation and operand)
  //this method is called inside component class for creating each step
  public createStep(operation: string, operand: number) {
     return { operation: operation, operand: operand };
  }

  //method that calculates the result and return it.
  public calculate(steps: Step[]) :number {
    
    //we need the apply operand to start the calculation
    //this will find the object in steps with operation property equal to Apply 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    let applyStep: Step = steps.find((x) => x.operation === 'Apply'); 
    let applyOperand: number = applyStep.operand; //this will assign the operand property of the found object to applyOperand
    let result: number = applyOperand;

    //looping through steps array of objects and doing the calculation
    //whenever it find step object with operation property equal to Apply it will exit the loop 
    steps.forEach((step: Step) => {
      if (step.operation !== 'Apply') {
        if (step.operation === 'Add') {
          result += step.operand;
        }

        if (step.operation === 'Subtract') {
          result -= step.operand;
        }

        if (step.operation === 'Multiply') {
          result *= step.operand;
        }

        if (step.operation === 'Divide') {
          result /= step.operand;
        }
      }
    });
    //returning the final result
    return result;

  }
}
