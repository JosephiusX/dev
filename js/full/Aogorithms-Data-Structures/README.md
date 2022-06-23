# Algorithms-Data-Structures

sec 1 Introduction

    1. Ciriculum walkthrough

    2. What order should you watch in

    3. How I'm Running My Code

        Chrome snipit
            inspect > sources tab > Snippets subtab>
                i can run javascript here

sec 2 Big O Notation

    4. Intro to Big O

        OBJECTIVES
            motivate the need for something like big O Notation

            Describe what Big O Notation is

            Simplify Big O Expressions

            Define "time complexity and space complexity of diffrent algorithms using Bit O Notation

            Describe what a logarithm is

    5. Timing Our Code

        the problem with time
            diffrent machines will record diffrend times

            the same machine will record diffrent times

            for fast algorithms, speed measurements may not be precise enough

    6. Coundtin Operations

sec4. Algorithms and Problem Solving Patterns

            understanding the Problem
            Explore Concrete Examples
            Break it down
            Solve/Simplify
            Look Back and Refactor

        19. STEP 1
            Understand the Problem
                1 can i restate the problem in my own words
                2 what are the inputs
                3 outputs that come from the solution
                4 can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?(You may nit be able to answer the question untuk you set obout solving the problem. thats ok: its still worth considering the question at this early stage.)
                5 How should I label the imporntant pieces of data are a part of the problem

        20. STEP 2 Concrete Examples

            coming up with examples can help you understand the problem better

            examples also provide sanity checks that your eventual solution works how it should

            user stories, unit tests

            start with simple examples
            progress to more complex Examples
            explore examples with empty inputs
            explore exampes with invalid inputs

            challange: write a function which takes in a string and returns counts of each character in the string

            // i start with the inputs and outputs
                charCount('aaa'); // {a:4}

        21. STEP 3 Break It Down

            explicitly write down the steps you need to take.
                this forces uou to think about the code you'll write before you write it, and helps you catch any lingering conceptual Issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well

        22. Step 4: Solve Or Simplify

                solve the problem, if i cant, solve a simpler problem

                SIMPLIFY:
                find the core difficulty in what im trying to do
                temporarily ignore that difficulty
                write a simplified solution
                then incorporate that difficulty back in

        23. Step 5: Look Back and Refactor

                refactoring questions
                    - can i check the result?
                    - can i derive the result differently?
                    - can i understand it at a glance?
                    - can i use the result or method for some other problem
                    - can i improve the performance of my solution?
                    - can you think of other ways to refactor?
                    - How have other people solved this problem?

sec5: Problem Solving Patterns

    27. Frequency counter Pattern

        generally speaking we are breaking down an array into smaller objects that can be compared to objects in another array.

    28. Frequency Counter: Anagram Challenge

    29. Anagram Challange Solution

    30. Multiple Pointers Pattern

        Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certin condition

        very efficient for solving problems with minimal space complexity as well

        EXAMPLE:
        write a function called sumZero which accepts a stored array of indegers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

    31. Count Unique Values

        Implement a function called countUniqueValues, which accepts a sorted arrau, and counts the unique values in the array. There can be negative numbers in the array , but it will always be stored

## 32 Count unique values Solution

        right over my head

## 33 Sliding Window Pattern

this pattern involves creating a window which can either be an array or number from one position to another

depending on a certain condition, the window either increases or closes (and a new window is created)

very useful for keeping track of a subset of data in an array/string etc.

## 34. Divide And Conqure Pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity

        need to circle back to annotate for understanding

# sec 6 OPTIONAL Challanges (extra credit)

# sec 7 Recursion

## 41 Why use recursion

        what is it
            a process (function) that calls its self

        its everywhere
            -JSON.parse / JSON.stringify
            -document.getElementByld and DOM traversal algorythms
            -We will see it with more complex data structures
            - it's sometimes a cleaner alternative to iteration.

## 42. The Call Stack

            -It's a stack data structure - we'll talk about that later!
            -Any time a function is invoked it is p.aced (pushed) on top of the call stack
            -When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

im used t functions being published on the call stack and popped off when they are done

when we write recursive functions, we keep pushing new functions onto the call stack!

## 43. Our First Recursive Function

## 44. Our Second Recursive Function

## 45. Writing Fractional Recursively

## 46. Writing Factorial Recursively

## 47. Common Recursion Pitfalls

            where things could go wrong
                -No base case
                -Forgetting to return or returning the wrong thing!
                -Stack overflow! - recursion is not stopping

## 48. Helper Method Recursion

pattern in which we have a outter function that is not recursive which calls an inner function that is recursive

## 49. Pure Recursion

Pure Recursion tips

        -for arrays, use methods like slice, the spread, operator, and concat that make copies of arrays so you do not mutate them
        -Remimber that strings are immitable so you will need to use methods like slice, substr, or substrings to make copies of strings
        -To make copies of objects use Object.assign, or the spread operator.

# sec 8 Recursion Problem Set

This is the first of two recursion problem sets. Both are completely optional. This problem set contains "easier" problems, though that doesn't mean they will be easy for everyone. The next section contains more challenging problems.

P.S. You can find solutions in the last lecture of this section!

### Ex10

# sec 9 Bonus CHALLANGING Recursion Problems

THESE PROBLEMS ARE SIGNIFICANTLY HARDER THAN THE EARLIER PROBLEMS. DO NOT FEEL BAD IF THEY GIVE YOU TROUBLE. THIS SECTION IS FOR PEOPLE WHO ENJOY PAIN AND MISERY. YOU DO NOT NEED TO ATTEMPT ANY OF THESE PROBLEMS IF YOU DO NOT WANT TO!

# sec 10 Searching A

## 56. Intro to Searching

            objectives

            - Describe what a searching algorithm is
            - Implement linear search on arrays
            - Implement a binary search on stored arrays
            - Implement a niave string search algorithm
            - Implement the KMP String searching algorithm

## 57. Intro to Linear Search

## 59. Linear Search BIG 0

## 60. Intro to binary search

            -Binary search is a much faster form of searh
            -Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
            -Binary search only works on sorted arrays!

## 61. Binary Search Pseudocode
