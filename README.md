# Papyrus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.  

Papyrus is a calculator that can perform calculations accroding to the user instructions.  
List of instructions for the UI is created in runtime.  
Supported instructions are listed in UI in a selectbox along with input field for number. User can
enter any number of instructions. Instructions can be any binary operators(e.g.,
add, divide, subtract, multiply etc).
Instructions will ignore mathematical precedence. There will also be ‘Apply’ operator which is
always last operator in the list, but is executed first, because it initialises the calculator with the
entered value.

# Example 

1.Divide 20  
2.Multiply 2  
3.Subtract 10  
4.Add 20  
5.Apply 30  
30 / 20 x 2 -10 + 20 => This should return 13  
The operation starts with apply operand(30) then the rest operations are performed from step one. 

# Demo(hosted with firebase)  

https://papyrus-361be.firebaseapp.com/

# Installing NodeJS  

Make sure you install the latest version of NodeJS in order to run the application.  
https://nodejs.org/en/download/  

# Running the app

clone the repo using the command `git clone https://github.com/ruhaise/Papyrus.git`  
cd into repo folder  
Run `npm install` to install all the dependencies  
Run `ng serve` to run the app. Navigate to `http://localhost:4200/`.  

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  
a new window will be open with all the test scenarios  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


