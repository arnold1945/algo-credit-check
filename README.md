# Credit Check

## Premise

Your objective in this exercise is to write a program that checks if a credit card number is valid. You'll do this by implementing the Luhn algorithm, a check-summing algorithm that is used for validating credit card numbers.


### Description

The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This full account number must pass the following test:

* from the rightmost digit, which is the check digit, moving left, double the value of every other digit
* if the product of this doubling operation is greater than 9 (e.g., 7 * 2 = 14), then sum the digits of the products (e.g., 10: 1 + 0 = 1, 14: 1 + 4 = 5).
* take the sum of all the digits
* if and only if the total modulo 10 is equal to 0 then the number is valid

You can read the full description on Wikipedia: http://en.wikipedia.org/wiki/Luhn_algorithm


### Example

We can use this process to validate an account number. Using `5541808923795240` as our sample input:

```
Account identifier:    5   5   4   1   8   0   8   9   2   3   7   9   5   2   4   0
2x every other digit:  10  5   8   1   16  0   16  9   4   3   14  9   10  2   8   0
Summed digits over 10: 1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0
Results summed:        1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0 = 70
```

Since the summed results modulo 10 is zero, the account number is valid according to the algorithm.


