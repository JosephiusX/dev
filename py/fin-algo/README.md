# Python-Finance

# Sec 1

4. Installation and Jupyter Setup

Jupyter notebooks are a dev environment. The code in this course can be used in any code editor. Jupyter just happens to be popular especially for data science and visualization. It includes:

        - environment manager
        - download manager
        - graphical interface to access a varieity of development environments.

google search ' anaconda download ' to find the latest link

        - download the latest version of the Individual Edition of Anaconda under Products.

        - open the exe.  file

        - install and check both boxes in advanced options even though one is not recomended.

        - after installed we can skip the tutorial and getting started

there are now 2 ways we can run anaconda

        - search computer for 'anaconda navigator':
            a graphical interface for the various development environments that anaconda comes with

launch jupyter notebooks which should open in the browser. this will shows our jupyter file system.

        ?? not sure if I did something wrong because desktop is not visible in my jupyter notebook.

        ** I can solve this by downloading the course materials zip files into downloads which is available in my jupyter notebooks file directory

To start a new notebook:

    home > New > Python3

now we can:

        - write python: 1 + 1
        - 'shift + enter' to output 2
        - 'alt + enter' to add a new line under the current one
        - to make the cell a markdown for notes:
            Cell > Cell type > markdown

# Sec 2: Python Crash Course

# Sec 3: NumPy

The basics:

        Data types:
            Numbers
            Strings
            Printing
            Lists
            Dictionaries
            Booleans
            Tuples
            Sets
        Comparison Operators
            if,elif, else Statements
            for Loops
            while Loops
            range()
            list comprehension
            functions
            lambda expressions
            map and filter
            methods

11. Introduction to NumPy Section

If we setup the invironment as instructed before NumPy is automatically included. One of the benifits of jupyter Notebook environment.

otherwise it can be installed with Pip or something like that

12. NumPy Arrays

Why use Numpy array? Why not just a list? There are lot's of reasons to use a Numpy array instead of a "standard" python list object. Our main reasons are:

        - Memory Efficiency of Numpy Array vs list
        - Easily expands to N-dimensional objects
        - Speed of calculations of numpy array
        - Broadcasting operations and functions with numpy
        - All the data science and machine learning libraries we use are built with Numpy

A list is Pythons array. For example:

        - create a list called my_list and call it after:
            my_list = [1,2,3]
            my_list

        - to see the output:
            shift + enter
                output:
                    [1, 2, 3]

        - turn 'my_list' into a NumPy array:
            np.array(my_list)

        - output:
            shift + enter
                result:
                    array([1, 2, 3])

currently this adds extra brackets but otherwise looks the same as before. To really see the difference I need to turn an list with many arrays into a NumPy array:

        - make variable and call it:
            my_matrix = [[1,2,3],[4,5,6],[7,8,9]]
            my_matrix

        - turn it into a NumPy array:
            np.array(my_matrix)
                result:
                    array([[1, 2, 3],
                           [4, 5, 6],
                           [7, 8, 9]])

NumPy has taken the data that was displayed horizontally and has it organized in a grid.

doing rest of notes in Jupyter

        ?? In this lesson at 10:22 it says to input 'np.random.' then press 'tab' to see a list of options. No list of options shows up for me as it does on the lesson.
        Also at 10:43 the lesson has 'np.random.rand'  in the input. Im instructed that if I want details about what the function does I can press 'shift + tab'  in jupyter or call help on the function.  Nothing happens when I press 'shift + tab' with the function selected, and no option comes up to call help.

        ** my import statement hadent been called

        - now when I type 'np.random.' and press tab I get a list of np options
        - also if I type out an option like so 'np.random.rand' and press 'shift + tab' I can see a description of the method

\*\* still need to finish note takeing on this lesson

13. NumPy Indexing and Selection

\*\*

14. NumPy Operations

notes in jupyter

15. NumPy Exercise Overview good chance to test what we have learned so far

16. NumPy Exercise Solutions should be good review

# Sec 4 Core Pandas

17.   Introduction to Core Pandas Topics

18.   Pandas Series - Part One

          notes in jupyter

19.                notes in jupyter

20.   Pandas DataFrames - Part One - Creating a DataFrame

we can combine 3 series sharing the same index into a single data frame with the same index with multiple columns 13:38 in
