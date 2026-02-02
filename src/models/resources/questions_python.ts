import { QuestionGroups } from '../types/exam';

export const PythonQuestions: QuestionGroups[] = [
    {
        questions: [
            {
                id: 1,
                question: `What will be the output of the following code regarding list slicing and copying?
  \`\`\`python
  list_a = [10, 20, 30, 40]
  list_b = list_a[:]
  list_b[0] = 99
  print(list_a[0], list_b[0])
  \`\`\``,
                answers: [
                    '10 99',
                    '99 99',
                    '10 10',
                    '99 10'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 2,
                question: `How does Python handle mutable default arguments in functions?
  \`\`\`python
  def add_item(val, items=[]):
      items.append(val)
      return items
  
  print(add_item(1), end=" ")
  print(add_item(2))
  \`\`\``,
                answers: [
                    '[1] [1, 2]',
                    '[1] [2]',
                    '[1] [1]',
                    'Error: Default must be None'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 3,
                question: `In Object-Oriented Programming, how do you correctly invoke a method from the parent class?`,
                answers: [
                    'super().method_name()',
                    'parent.method_name()',
                    'self.parent_method()',
                    'base().method_name()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 4,
                question: `Which set operation will return elements that are in either Set A or Set B, but NOT in both?`,
                answers: [
                    'Symmetric Difference',
                    'Intersection result',
                    'Union of the sets',
                    'Difference of sets'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 5,
                question: `What is the result of this dictionary comprehension?
  \`\`\`python
  names = ['Ana', 'Bob']
  result = {n: len(n) for n in names}
  print(result)
  \`\`\``,
                answers: [
                    "{'Ana': 3, 'Bob': 3}",
                    "{'Ana': 0, 'Bob': 1}",
                    "{3: 'Ana', 3: 'Bob'}",
                    "['Ana': 3, 'Bob': 3]"
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 6,
                question: `When working with files, what is the behavior of the 'a' mode?`,
                answers: [
                    'Opens for appending at the end',
                    'Opens for writing and erases all',
                    'Opens for reading from the start',
                    'Opens for exclusive creation only'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 7,
                question: `What will the following string manipulation output?
  \`\`\`python
  text = "python_pro"
  print(text.split("_")[0].upper())
  \`\`\``,
                answers: [
                    'PYTHON',
                    'PRO',
                    'PYTHON_PRO',
                    'PYTHONPRO'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 8,
                question: `Which magic method is used to define the behavior of the 'len()' function for a custom class?`,
                answers: [
                    '__len__(self)',
                    '__size__(self)',
                    '__count__(self)',
                    '__length__(self)'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 9,
                question: `What is the output of this functional programming snippet?
  \`\`\`python
  nums = [1, 2, 3]
  res = list(map(lambda x: x * 2, nums))
  print(res)
  \`\`\``,
                answers: [
                    '[2, 4, 6]',
                    '[1, 2, 3]',
                    '[2, 2, 2]',
                    '[4, 4, 4]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 10,
                question: `Which exception type is raised when trying to access a dictionary key that does not exist?`,
                answers: [
                    'KeyError',
                    'IndexError',
                    'ValueError',
                    'LookupError'
                ],
                correctAnswer: 0,
            }
        ]
    },
    {
        questions: [
            {
                id: 11,
                question: `What will be the result of the following code involving global scope?
        \`\`\`python
        x = 100
        def change():
            global x
            x = 50
        
        change()
        print(x)
        \`\`\``,
                answers: [
                    '50',
                    '100',
                    'None',
                    'Error'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 12,
                question: `Which set operation is performed by the '^' operator in Python?`,
                answers: [
                    'Symmetric Difference',
                    'Intersection of sets',
                    'Union of both groups',
                    'Difference of values'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 13,
                question: `What is the output of the following string slicing operation?
        \`\`\`python
        s = "Python"
        print(s[1:4])
        \`\`\``,
                answers: [
                    'yth',
                    'pyt',
                    'ytho',
                    'hon'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 14,
                question: `How do you define a private attribute in a Python class?`,
                answers: [
                    'Using two underscores like __attr',
                    'Using the private keyword before',
                    'Using a single underscore like _at',
                    'Defining it outside the __init__'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 15,
                question: `What will be the output of the following list operation?
        \`\`\`python
        nums = [1, 2, 3]
        nums.insert(1, 10)
        print(nums)
        \`\`\``,
                answers: [
                    '[1, 10, 2, 3]',
                    '[10, 1, 2, 3]',
                    '[1, 2, 10, 3]',
                    '[1, 2, 3, 10]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 16,
                question: `Which of the following creates an empty set?`,
                answers: [
                    'myset = set()',
                    'myset = {}',
                    'myset = []',
                    'myset = ()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 17,
                question: `What is the output of the following print statement?
        \`\`\`python
        print("A", "B", sep="*")
        \`\`\``,
                answers: [
                    'A*B',
                    'A B',
                    'AB*',
                    '*AB'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 18,
                question: `Which magic method is called when an object is printed?`,
                answers: [
                    '__str__',
                    '__init__',
                    '__repr__',
                    '__print__'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 19,
                question: `What will the following list comprehension produce?
        \`\`\`python
        res = [x for x in range(3)]
        print(res)
        \`\`\``,
                answers: [
                    '[0, 1, 2]',
                    '[1, 2, 3]',
                    '[0, 1, 3]',
                    '[1, 2, 0]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 20,
                question: `What happens when you try to change an element in a tuple?`,
                answers: [
                    'TypeError is raised',
                    'The value changes',
                    'It returns None',
                    'A new tuple is made'
                ],
                correctAnswer: 0,
            }
        ]
    },
    {
        questions: [
            {
                id: 21,
                question: `Which mode should be used to open a file for adding data to the end without deleting existing content?`,
                answers: [
                    "'a' mode",
                    "'w' mode",
                    "'r' mode",
                    "'x' mode"
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 22,
                question: `What is the correct way to handle multiple specific exceptions in a single block?`,
                answers: [
                    'except (ValueError, TypeError):',
                    'except ValueError or TypeError:',
                    'except ValueError, TypeError:',
                    'except [ValueError, TypeError]:'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 23,
                question: `What will be the result of the following dictionary operation?
        \`\`\`python
        d = {"a": 1, "b": 2}
        print(d.get("c", 3))
        \`\`\``,
                answers: [
                    '3',
                    '1',
                    '2',
                    'None'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 24,
                question: `When reading a file, which method returns a list where each element is a line from the file?`,
                answers: [
                    'file.readlines()',
                    'file.readall()',
                    'file.getlines()',
                    'file.splitlines()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 25,
                question: `What will be the output of the following set logic?
        \`\`\`python
        s1 = {1, 2, 3}
        s2 = {3, 4, 5}
        print(s1.intersection(s2))
        \`\`\``,
                answers: [
                    '{3}',
                    '{1, 2}',
                    '{4, 5}',
                    '{1, 2, 3, 4, 5}'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 26,
                question: `How do you manually trigger an exception in Python?`,
                answers: [
                    'raise ValueError()',
                    'throw ValueError()',
                    'catch ValueError()',
                    'trigger ValueError()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 27,
                question: `Which block in exception handling will execute regardless of whether an error occurred or not?`,
                answers: [
                    'finally',
                    'except',
                    'catch',
                    'always'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 28,
                question: `What does the 'strip()' method do when reading a line from a file?`,
                answers: [
                    'Removes leading and trailing whitespace',
                    'Deletes the entire line from the file',
                    'Converts the entire string to lowercase',
                    'Splits the string into a list of words'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 29,
                question: `What is the result of the following code?
        \`\`\`python
        d = {"x": 10, "y": 20}
        val = d.pop("x")
        print(len(d))
        \`\`\``,
                answers: [
                    '1',
                    '2',
                    '0',
                    '10'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 30,
                question: `In Object-Oriented Programming, what is an 'Abstract Method'?`,
                answers: [
                    'A method declared but not implemented',
                    'A method that cannot be overridden',
                    'A method that is hidden from users',
                    'A method that only handles integers'
                ],
                correctAnswer: 0,
            }
        ]
    },
    {
        questions: [
            {
                id: 31,
                question: `What is the output of the following inheritance example?
        \`\`\`python
        class A:
            def show(self):
                print("A", end="")
        
        class B(A):
            def show(self):
                super().show()
                print("B", end="")
        
        obj = B()
        obj.show()
        \`\`\``,
                answers: [
                    'AB',
                    'BA',
                    'B',
                    'A'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 32,
                question: `Which decorator is used to define a method that belongs to the class and not the instance, without needing access to 'self'?`,
                answers: [
                    '@staticmethod',
                    '@classmethod',
                    '@property',
                    '@abstractmethod'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 33,
                question: `What will be the output of the following logical expression?
        \`\`\`python
        print(True or False and False)
        \`\`\``,
                answers: [
                    'True',
                    'False',
                    'None',
                    'Error'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 34,
                question: `What does a lambda function return by default?`,
                answers: [
                    'The result of the expression',
                    'A reference to the function',
                    'None unless return is used',
                    'The first argument passed'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 35,
                question: `How do you correctly implement an abstract method in a subclass?`,
                answers: [
                    'By overriding it with a body',
                    'By calling super() inside it',
                    'By using the @abstract tag',
                    'By defining it as a private'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 36,
                question: `What is the output of the following list comprehension with a condition?
        \`\`\`python
        lst = [x for x in range(5) if x % 2 != 0]
        print(lst)
        \`\`\``,
                answers: [
                    '[1, 3]',
                    '[0, 2, 4]',
                    '[1, 2, 3]',
                    '[1, 3, 5]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 37,
                question: `Which function is used to apply a specific operation to every item in an iterable?`,
                answers: [
                    'map()',
                    'filter()',
                    'reduce()',
                    'apply()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 38,
                question: `What will the following code print?
        \`\`\`python
        def func(a, b, *args):
            return len(args)
        
        print(func(1, 2, 3, 4, 5))
        \`\`\``,
                answers: [
                    '3',
                    '5',
                    '2',
                    '0'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 39,
                question: `What is the purpose of the '__next__' method in a custom iterator?`,
                answers: [
                    'To return the next item in the sequence',
                    'To initialize the starting index to zero',
                    'To check if the sequence has any items',
                    'To restart the iteration from the begin'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 40,
                question: `Which keyword is used to stop the current iteration of a loop and move to the next one?`,
                answers: [
                    'continue',
                    'break',
                    'pass',
                    'return'
                ],
                correctAnswer: 0,
            }
        ]
    },
    {
        questions: [
            {
                id: 41,
                question: `What is the output of the following code involving a class variable?
        \`\`\`python
        class Counter:
            count = 0
            def __init__(self):
                Counter.count += 1
        
        a = Counter()
        b = Counter()
        print(Counter.count)
        \`\`\``,
                answers: [
                    '2',
                    '1',
                    '0',
                    'None'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 42,
                question: `Which magic method is responsible for defining the behavior of the 'in' operator for a custom object?`,
                answers: [
                    '__contains__',
                    '__iter__',
                    '__getitem__',
                    '__search__'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 43,
                question: `How do you format a float to show exactly 3 decimal places using an f-string?`,
                answers: [
                    "f'{num:.3f}'",
                    "f'{num:3f}'",
                    "f'{num:.3}'",
                    "f'{num:f3}'"
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 44,
                question: `What is the purpose of the '__repr__' magic method?`,
                answers: [
                    'To provide an official string representation for debugging',
                    'To initialize the object attributes when created',
                    'To delete the object and free up the memory',
                    'To represent the object as a boolean value'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 45,
                question: `What will happen if an abstract class is instantiated directly?`,
                answers: [
                    'A TypeError is raised',
                    'A new instance is created',
                    'The __init__ method fails',
                    'It returns a null object'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 46,
                question: `Which function is used to check if an object is an instance of a specific class or a subclass thereof?`,
                answers: [
                    'isinstance()',
                    'typeof()',
                    'isclass()',
                    'checkinstance()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 47,
                question: `What is the output of the following lambda and filter combination?
        \`\`\`python
        nums = [1, 2, 3, 4]
        res = list(filter(lambda x: x > 2, nums))
        print(res)
        \`\`\``,
                answers: [
                    '[3, 4]',
                    '[1, 2]',
                    '[2, 3, 4]',
                    '[4]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 48,
                question: `In a dictionary comprehension, how do you swap keys and values?`,
                answers: [
                    '{v: k for k, v in d.items()}',
                    '{k: v for v, k in d.items()}',
                    '{v: k for k in d.values()}',
                    '{items: swap for items in d}'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 49,
                question: `Which module is required to define abstract base classes in Python?`,
                answers: [
                    'abc',
                    'abstract',
                    'base',
                    'oop'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 50,
                question: `What does the 'self' parameter represent in a class method?`,
                answers: [
                    'The specific instance of the class',
                    'the class definition itself',
                    'A built-in Python keyword',
                    'The parent class reference'
                ],
                correctAnswer: 0,
            }
        ]
    },
    {
        questions: [
            {
                id: 51,
                question: `What is the result of using the map function on a list of strings to find their lengths?
        \`\`\`python
        words = ["apple", "pie"]
        res = list(map(len, words))
        print(res)
        \`\`\``,
                answers: [
                    '[5, 3]',
                    '[1, 2]',
                    '5, 3',
                    '["5", "3"]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 2,
                question: `Which function from the 'functools' module is used to roll up a list into a single cumulative value?`,
                answers: [
                    'reduce()',
                    'accumulate()',
                    'combine()',
                    'sum_all()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 53,
                question: `What will be the output of the following filter operation?
        \`\`\`python
        nums = [0, 1, 2, 3]
        res = list(filter(None, nums))
        print(res)
        \`\`\``,
                answers: [
                    '[1, 2, 3]',
                    '[0, 1, 2, 3]',
                    '[]',
                    '[None]'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 54,
                question: `How do you format a number to include commas as thousands separators using an f-string?`,
                answers: [
                    "f'{num:,}'",
                    "f'{num:_}'",
                    "f'{num:c}'",
                    "f'{num:|}'"
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 55,
                question: `What is the result of the following set difference?
        \`\`\`python
        s1 = {10, 20, 30}
        s2 = {30, 40, 50}
        print(s1 - s2)
        \`\`\``,
                answers: [
                    '{10, 20}',
                    '{40, 50}',
                    '{10, 20, 40, 50}',
                    '{30}'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 56,
                question: `Which method is used to add multiple elements from a list into an existing set?`,
                answers: [
                    'set.update()',
                    'set.add_all()',
                    'set.append()',
                    'set.extend()'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 57,
                question: `What is the output of the following f-string with alignment modifiers?
        \`\`\`python
        name = "Hi"
        print(f"'{name:>5}'")
        \`\`\``,
                answers: [
                    "'   Hi'",
                    "'Hi   '",
                    "' Hi  '",
                    "'Hi'"
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 58,
                question: `What does the map function return in Python 3?`,
                answers: [
                    'An iterator object',
                    'A standard list',
                    'A formatted string',
                    'A new dictionary'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 59,
                question: `How do you check if Set A is completely contained within Set B?`,
                answers: [
                    'A.issubset(B)',
                    'A.isinside(B)',
                    'A.partof(B)',
                    'A.childof(B)'
                ],
                correctAnswer: 0,
            },
        ]
    },
    {
        questions: [
            {
                id: 60,
                question: `What is the result of the following reduce operation?
        \`\`\`python
        from functools import reduce
        res = reduce(lambda x, y: x + y, [1, 2, 3, 4])
        print(res)
        \`\`\``,
                answers: [
                    '10',
                    '24',
                    '[1, 2, 3, 4]',
                    '1'
                ],
                correctAnswer: 0,
            }
        ]
    },
    {
        questions: [
            {
                id: 1,
                question: `What will be the final orientation (heading) of the turtle after this code?
        \`\`\`python
        import turtle
        t = turtle.Turtle()
        for i in range(4):
            t.forward(100)
            t.left(45)
        \`\`\``,
                answers: [
                  '180 degrees (West)',
                  '90 degrees (North)',
                  '0 degrees (East)  ',
                  '270 degrees (South)'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 2,
                question: `Which shape will be drawn by the following code?
        \`\`\`python
        import turtle
        t = turtle.Turtle()
        for i in range(3):
            t.forward(100)
            t.left(120)
        \`\`\``,
                answers: [
                  'An equilateral triangle',
                  'A right-angled triangle',
                  'A square with side 100',
                  'A hexagon with side 100'
                ],
                correctAnswer: 0,
                hasImage: "{IMG_P_3}"
              },
        ]
    },
    {
        questions: [
            {
                id: 3,
                question: `What does the command 't.circle(50, 180)' produce?`,
                answers: [
                  'A semicircle with a radius of 50',
                  'A full circle with a radius of 50',
                  'A semicircle with a radius of 90',
                  'A full circle with a radius of 180'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 4,
                question: `Look at the image provided. Which code snippet created this specific star shape?`,
                answers: [
                  'for i in range(5): t.fd(100); t.rt(144)',
                  'for i in range(5): t.fd(100); t.rt(72) ',
                  'for i in range(6): t.fd(100); t.rt(60) ',
                  'for i in range(4): t.fd(100); t.rt(90) '
                ],
                correctAnswer: 0,
                hasImage: "{IMG_P_2}"
              },
        ]
    },
    {
        questions: [
            {
                id: 5,
                question: `If the turtle is at (0,0) and we run 't.setheading(90); t.up(); t.fd(100)', what is its new position?`,
                answers: [
                  '(0, 100)',
                  '(100, 0)',
                  '(0, -100)',
                  '(-100, 0)'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 6,
                question: `How can you draw a polygon with 8 sides (an octagon) using a loop?`,
                answers: [
                  'for i in range(8): t.fd(50); t.lt(45)',
                  'for i in range(8): t.fd(50); t.lt(60)',
                  'for i in range(8): t.fd(50); t.lt(90)',
                  'for i in range(8): t.fd(50); t.lt(30)'
                ],
                correctAnswer: 0,
                hasImage: "{IMG_P_1}"
              },
        ]
    },
    {
        questions: [
            {
                id: 7,
                question: `What is the difference between 't.clear()' and 't.reset()'?`,
                answers: [
                  'reset() moves turtle to home; clear() does not',
                  'clear() moves turtle to home; reset() does not',
                  'reset() changes color; clear() keeps the color',
                  'clear() deletes the object; reset() restarts it'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 8,
                question: `What happens if you provide a third argument to circle: 't.circle(50, steps=6)'?`,
                answers: [
                  'It draws a hexagon with radius 50',
                  'It draws 6 small circles in a row',
                  'It draws a circle with line width 6',
                  'It draws 6 concentric circles at 50'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 9,
                question: `Which command is used to stop the window from closing immediately after the turtle finishes drawing?`,
                answers: [
                  'turtle.done()   ',
                  'turtle.stop()   ',
                  'turtle.finish() ',
                  'turtle.end()    '
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 10,
                question: `What is the effect of 't.speed(0)'?`,
                answers: [
                  'The animation is turned off (fastest)',
                  'The turtle stops moving completely  ',
                  'The turtle moves at the slowest pace',
                  'The turtle moves at a moderate speed '
                ],
                correctAnswer: 0,
              }
        ]
    },
    {
        questions: [
            {
                id: 1,
                question: `Which command will move the turtle to the center of the screen without changing its orientation?`,
                answers: [
                  't.goto(0, 0)',
                  't.home()',
                  't.reset()',
                  't.setheading(0)'
                ],
                correctAnswer: 0, // home() also goes to 0,0 but resets orientation. goto() is safer for just position.
              },
        ]
    },
    {
        questions: [
            {
                id: 2,
                question: `What is the correct sequence to draw a filled shape?`,
                answers: [
                  'begin_fill(), draw shape, end_fill()',
                  'fillcolor(), begin_fill(), end_fill()',
                  'start_fill(), draw shape, stop_fill()',
                  'pendown(), fillcolor(), draw shape'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 3,
                question: `What happens if you move the turtle while the 'penup()' method is active?`,
                answers: [
                  'The turtle moves without drawing a line',
                  'The turtle stops moving until down()',
                  'The turtle moves and draws a dashed line',
                  'An AttributeError is raised immediately'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 4,
                question: `In the Turtle coordinate system, which angle represents pointing directly 'North' (Up)?`,
                answers: [
                  '90',
                  '0',
                  '180',
                  '270'
                ],
                correctAnswer: 0,
              },
        ]
    },
    {
        questions: [
            {
                id: 5,
                question: `How do you change the thickness of the line being drawn?`,
                answers: [
                  't.pensize(5)',
                  't.width_set(5)',
                  't.line_thickness(5)',
                  't.bold(5)'
                ],
                correctAnswer: 0,
              }
        ]
    },
    {
        questions: [

        ]
    },
    {
        questions: [

        ]
    },
    {
        questions: [

        ]
    },
    {
        questions: [

        ]
    },
    {
        questions: [

        ]
    },
];
