Feature: Test sum

Background: learning cucumber test
Scenario: Calculate the sum of the given number
Then Verify the sum of the number

Scenario: Calculate the sum of the given array
Then Verify the sum of the array input

Scenario Outline: find sum of given input number
Then Verify Sum Of Given Numbers <Number1> <Number2> <Number3>
Examples:
| Number1 | Number2 | Number3 |
| 10  | 20  | 30  |
| 10  | 30  | 50  |
| 100  | 200  | 300  |

Scenario Outline: concat given input String
Then Concat all input string parameters "<param1>" "<param2>" "<param3>"
Examples:
| param1 | param2 | param3 |
| Athar  | QA  | Automation  |
| I  | Love | India  |


Scenario Outline: Do Calculator Operation
Then Do Addition Operation For <num1> <num2>
Then Do Subtraction Operation For <num1> <num2>
Then Do Multiplication Operation For <num1> <num2>
Then Do Division Operation For <num1> <num2>
Examples:
| num1 | num2 | 
| 80  | 40  |