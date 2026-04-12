import { QuestionGroups } from '../types/exam';

export const PythonExamQuestions: QuestionGroups[] = [
  {
    questions: [
      {
        id: 1,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def func(word, d ={"a":23, "b":15, "c":-7, "other":0}):
    if len(word)==0:
        return 0
    if word[0] in d:
        return d[word[0]] + func(word[1:],d)
    return d["other"] + func(word[1:],d)
\`\`\``,
        answers: [
          'קטע הקוד (print(func("Abc")) מדפיס את המספר 8.',
          'הפונקציה חייבת 2 פרמטרי קלט, אחרת תתקבל שגיאת זמן ריצה.',
          'שורות 4 ו-6 מיותרות.',
          'קטע קוד (print(func("ab, cd, ef, gh", {",":1})) מדפיס את כמות הפסיקים ב-word.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 2,
        question: `בחרו את הטענה המדויקת ביותר בקוד הבא
\`\`\`python
sentence = "I am a cat"
sentence = sentence.split(" ")
d = {}
for word in sentence:
    d[word] = len(word)

k = list(d.keys())
k.sort()
for w in k:
    print(w*d[w])
\`\`\``,
        answers: [
          'I\\na\\namam\\ncatcatcat יודפס למסך',
          'I\\namam\\na\\ncatcatcat יודפס למסך',
          'תהיה שגיאת זמן ריצה מכיוון שלא ניתן להכפיל מחרוזת במספר ללא המרה.',
          'במידה והמשפט יכיל את אותה מילה מספר פעמים אז נקבל שגיאת זמן ריצה מכיוון שמילון לא יכול להכיל מפתחות זהים.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 3,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
import turtle

turtle.up()
turtle.forward(50)
turtle.setheading(90)
turtle.forward(50)
turtle.setheading(90)
turtle.forward(50)
turtle.setheading(90)
turtle.forward(50)
\`\`\``,
        answers: [
          'צריך לתקן את הקוד ולהוסיף את שורת הקוד turtle.done() כדי שיודפס ריבוע.',
          'הקוד תקין אך לא יודפס ריבוע.',
          'אחרי שנתקן שורת קוד אחת ונריץ יודפס ריבוע על המסך.',
          'צריך לתקן את הקוד בשתי שורות כדי שיודפס ריבוע.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 4,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
my_name = input("Enter your name: ")
my_age = input("Enter your age: ")

my_age = float(my_age)
my_age++
my_name[0] = my_name[0].upper()

print(f"Hello, {my_name}! Next year, you will be {my_age} years old.")
\`\`\``,
        answers: [
          'יש לבצע תיקונים בשתי שורות קוד כדי שלא תתקבל שגיאת זמן ריצה.',
          'יש לבצע תיקונים בשורת קוד אחת כדי שלא תתקבל שגיאת זמן ריצה.',
          'הקוד מקבל כקלט שם וגיל, ומדפיס את הגיל לאחר שנה ואת השם עם אות ראשונה גדולה.',
          'יש לבצע המרה של הגיל למספר שלם, ולהפעיל את המתודה upper על כל המחרוזת כדי שהקוד ירוץ באופן תקין.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 5,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
import random

class Weather:
    def __init__(self):
        self.condition = "Sunny"

    def forecast(self):
        random.seed(123)
        conditions = ["Sunny", "Rainy", "Cloudy", "Snowy"]
        self.condition = random.choice(conditions)

    def get_condition(self):
        return self.condition

if __name__ == "__main__":
    my_weather = Weather()
    for i in range(7):
        my_weather.forecast()
        print("The weather is:", my_weather.get_condition())
\`\`\``,
        answers: [
          'בכל פעם שנריץ את הקוד נקבל את אותה התחזית.',
          'בכל פעם שנריץ את הקוד נקבל תחזית אחרת.',
          'חסרה מתודת main כדי להשלים את הקוד של conditional execution.',
          'המחלקה מכילה משתנה מחלקה פרטי אחד.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 6,
        question: `הניחו שהמשתנה d הינו מילון חוקי וקבעו אילו מבין שורות הקוד הבאות עלולות לגרום לשגיאת זמן ריצה. יש להתייחס לכל שורה באופן נפרד.
\`\`\`python
1    s = set(list(d.keys()))
2    s = set(s)
3    s = set(input("enter a number"))
4    s = set(list(d.values()))
\`\`\``,
        answers: ['שורה 4.', 'שורות 2 ו-4.', 'שורה 3.', 'שורות 1 או 3.'],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 7,
        question: `בחרו את הטענה המדויקת ביותר. אילו מבין שורות הקוד הבאות לא תגרום לעולם לשגיאת זמן ריצה? יש להתייחס לכל שורת קוד בנפרד.
\`\`\`python
1    file = open ("Q6.txt", "r")
2    file = open ("Q7.txt", "w")
3    file = open ("Q8.txt", "a")
4    file = open ("Q9.txt")
\`\`\``,
        answers: ['שורות 2 ו-3.', 'שורות 1 ו-2.', 'שורות 2 ו-4.', 'שורה 2 בלבד.'],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 8,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
x = 0
y = 0

def func1():
    global x, y
    x = 10
    y = 20

def func2():
    global x, y
    print(x/y)

def main():
    x, y = 5 ,2
    func1()
    func2()

if __name__ == "__main__":
    main()
\`\`\``,
        answers: ['שורה מספר 9 מיותרת.', 'שורה מספר 4 מיותרת.', 'יודפס 2.', 'יודפס 0.'],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 9,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def func1(val):
    try:
        num = int(val)
        if num < 0:
            raise KeyError("Negative numbers are not allowed.")
        result = 100 / num
    except Exception:
        print("error")
    except ValueError:
        print("ValueError")
    except KeyError:
        print("KeyError")
    except ZeroDivisionError:
        print("ZeroDivisionError")

def func2():
    values = ["42", "abc", "-5", "0", "10"]
    for v in values:
        func1(v)

func2()
\`\`\``,
        answers: [
          'בסיום הריצה יודפס error\\nerror\\nerror\\n',
          'בסיום הריצה יודפס ValueError\\nKeyError\\nZeroDivisionError\\n',
          'בסיום הריצה יודפס error\\nKeyError\\nZeroDivisionError\\n',
          'במהלך הריצה תיזרק חריגה שלא נתפוס והתוכנית תקרוס.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 10,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class Book:
    def __init__(self):
        self.__title = "Harry Potter"
        self.__author = "J.K. Rowling"
        self.__price = 81.99

    def __init__(self, title, author, price):
        self.__title = title
        self.__author = author
        self.__price = price

    def set_price(self, price):
        self.__price = price

    def get_title(self):
        return self.__title

    def get_author(self):
        return self.__author

    def get_price(self):
        return self.__price

if __name__ == "__main__":
    my_book = Book("Python 101", "John Smith", 39.99)
    my_book = Book()
\`\`\``,
        answers: [
          'התוכנית תקרוס מכיוון שלא ניתן להשתמש בו זמנית גם בבנאי מלא וגם בברירת מחדל.',
          'הקוד תקין אך לא יודפס כלום בסיום הריצה.',
          'צריך להגדיר את המחלקה בקובץ נפרד.',
          'חסרים setter-ים כדי שהקוד ירוץ באופן תקין.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 11,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def main():
    text = "Hello"
    print(text)
    change_me(text)
    print(text)

def change_me(text):
    text = "Goodbye"

main()
\`\`\``,
        answers: [
          'יודפס Hello\\nHello',
          'יודפס Hello\\nGoodbye',
          'תתקבל שגיאת זמן ריצה מכיוון שקיימים שני משתנים בעלי אותו שם.',
          'תתקבל שגיאת זמן ריצה מכיוון שפונקציית ה main קוראת לפונקציה שמוגדרת אחריה בקובץ.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 12,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def func():
    num = 0
    while num < 20:
        if num == 7:
            continue
        if num % 2 == 0:
            continue
        if num > 10:
            print(f"{num} is odd and greater than 10.")
        else:
            print(f"{num} is odd and 10 or less.")
        num += 1

func()
\`\`\``,
        answers: [
          'הקוד נכנס ללולאה אינסופית.',
          'הקוד ידפיס את כל המספרים הקטנים מ 20 שהם אי-זוגיים ואינם 7.',
          'הקוד יקרוס בשל שגיאת זמן ריצה.',
          'אף תשובה אינה נכונה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 13,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
data = list(range(1, 21, 4))
print(data[3:9])
print(data[::2])
print(data[::-1])
\`\`\``,
        answers: [
          'שורה 3 תדפיס [13, 17]',
          'שורה 4 תדפיס [13, 17]',
          'שורה 5 תדפיס [17 ,13 ,9 ,5 ,1]',
          'שורה 3 תדפיס [17 ,9 ,1]',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 14,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def main():
    try:
        file = open("myFile.txt", "w")
        file.write("Good morning.\\n")
        file.write("Have a nice day!\\n")
        r = file.read()
    except:
        print("Opss! can't do that")
    finally:
        file.close()
    try:
        file = open("myFile.txt", "r")
        content = file.read()
        content = content.split()
        print(content[0])
    except:
        print("Error: File not found")
    finally:
        file.close()

if (__name__ == "__main__"):
    main()
\`\`\``,
        answers: [
          "הקוד ידפיס Opss! can't do that\\nGood",
          "הקוד ידפיס Opss! can't do that\\nError: File not found",
          'תיזרק חריגה שלא נתפוס ולכן התוכנית תקרוס.',
          'אף תשובה אינה נכונה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 15,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def main():
    persons = []
    persons.append(Person("Alice", 25))
    persons.append(Pupil("Bob", 15, "Ankori"))
    persons.append(Employee("Osher", 35, "Apple"))
    persons.insert(1, Employee("Tali", 40, "Meta"))
    persons.insert(0, Employee("Shani", 28, "Google"))
    print(persons[1])
    print(persons[3])
    print(persons[-1])

class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def __str__(self):
        return self.__name

class Pupil(Person):
    def __init__(self, name, age, school):
        super().__init__(name, age)
        self.school = school

    def __str__(self):
        return super().__str__()+" currently studying at "+ self.school

class Employee(Person):
    def __init__(self, name, age, company):
        super().__init__(name, age)
        self.company = company

    def __str__(self):
        return super().__str__() + " currently working at " + self.company

main()
\`\`\``,
        answers: [
          'שורה 8 מדפיסה Alice',
          'שורה 9 מדפיסה Osher currently working at Apple',
          'שורה 10 מדפיסה Bob currently studying at Ankori',
          'שורה 9 גורמת לשגיאת זמן ריצה מכיוון שהאינדקס לא קיים.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 16,
        question: 'בחרו את הטענה הלא נכונה מבין כל הטענות העוסקת בחריגות.',
        answers: [
          'חייבים תמיד להוסיף בלוק finally בסוף.',
          'לא חייבים תמיד להוסיף בלוק else בסוף.',
          'ניתן לבצע בלוקים של try-except אחד בתוך השני.',
          'אין הגבלה לסדר או כמות הבלוקים של except.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 17,
        question: 'בחרו את הטענה המדויקת ביותר העוסקת בעבודה עם מודולים.',
        answers: [
          'ניתן לשנות את שם המודול שאנו מייבאים.',
          'כל קובץ יכול לשמש כמודול, גם ללא סיומת py.',
          'אם ננסה לייבא את אותו המודול כמה פעמים באותה התוכנית אז נקבל שגיאת זמן ריצה.',
          'כאשר אנו מייבאים מודול, הוא דורס את כל המשתנים הגלובליים בתוכנית.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 18,
        question: 'בחרו את הטענה המדויקת ביותר העוסקת בשפת Python.',
        answers: [
          'ניתן להריץ רק מספר שורות קוד נבחרות מתוך קובץ הסקריפט.',
          'כמו כל שפת תכנות, קיימות טעויות קומפילציה בשפה.',
          'לא קיימים טיפוסי נתונים שונים בשפה.',
          'חייבים להגדיר פונקציית main כדי שנוכל להריץ את הקוד בקובץ הסקריפט.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 19,
        question: 'בחרו את הטענה הנכונה ביותר העוסקת בקבוצות (sets).',
        answers: [
          'כל התשובות אינן נכונות.',
          'ניתן להגדיר קבוצה בתוך קבוצה, בהתאם לחוקי המתמטיקה.',
          'ניתן להוסיף את כל האיברים של קבוצה קיימת לתוך קבוצה אחרת באמצעות הפקודה add.',
          'קבוצה הינה מטיפוס בלתי ניתן לשינוי.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    questions: [
      {
        id: 20,
        question: 'בחרו את הטענה הלא נכונה מבין כל הטענות העוסקת במחלקות ואובייקטים.',
        answers: [
          'ניתן ליצור מחלקה ללא הגדרת בנאי באופן מפורש.',
          'ניתן לבצע העמסת בנאים במחלקה.',
          'מחלקה יכולה לרשת מ 0 אבות או יותר.',
          'כל הטענות לא נכונות.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q1 - Mutable default argument
    questions: [
      {
        id: 1,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def add_item(item, lst=[]):
    lst.append(item)
    return lst

print(add_item("a"))
print(add_item("b"))
print(add_item("c", []))
\`\`\``,
        answers: [
          'שורות 5 ו-6 ידפיסו רשימות שונות אך שתיהן מכילות יותר מאיבר אחד.',
          'כל קריאה לפונקציה יוצרת רשימה חדשה ולכן כל הדפסה תכיל איבר אחד בלבד.',
          'שורה 7 תגרום לשגיאת זמן ריצה כי לא ניתן להעביר רשימה כברירת מחדל.',
          'הקוד תקין לחלוטין וכל קריאה תחזיר רשימה עם האיבר האחרון שהוכנס.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q2 - Global variable scope
    questions: [
      {
        id: 2,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
count = 0

def increment():
    count += 1

def main():
    increment()
    increment()
    print(count)

main()
\`\`\``,
        answers: [
          'הקוד יקרוס בשגיאת זמן ריצה כי count בתוך increment מתייחס למשתנה מקומי שאינו מאותחל.',
          'הקוד ידפיס 2 כי הפונקציה increment מעדכנת את המשתנה הגלובלי count בכל קריאה.',
          'הקוד ידפיס 0 כי שינויים שנעשים בתוך פונקציה אינם משפיעים על משתנים גלובליים.',
          'הקוד ידפיס 1 כי Python מאפשר עדכון גלובלי רק בקריאה הראשונה לפונקציה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q3 - List slicing and copying
    questions: [
      {
        id: 3,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
a = [1, 2, 3, 4, 5]
b = a
c = a[:]
b[0] = 99
c[4] = 88

print(a[0], a[4])
\`\`\``,
        answers: [
          'יודפס 99 5 כי b מצביע לאותה רשימה כמו a, אך c הוא עותק עצמאי.',
          'יודפס 99 88 כי גם b וגם c מצביעים לאותה רשימה כמו a בזיכרון.',
          'יודפס 1 5 כי השמה לרשימה בתוך פונקציה לא משנה את הרשימה המקורית.',
          'יודפס 1 88 כי פעולת חיתוך עם [:] יוצרת הפניה לאותו אובייקט בדיוק.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q4 - Exception handling order
    questions: [
      {
        id: 4,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
try:
    x = int("hello")
    y = 10 / 0
except ValueError:
    print("ValueError")
except ZeroDivisionError:
    print("ZeroDivisionError")
except Exception:
    print("Exception")
\`\`\``,
        answers: [
          'יודפס ValueError כי השגיאה הראשונה שנזרקת היא שגיאת ההמרה, והיא תיתפס מיד.',
          'יודפס ZeroDivisionError כי שגיאת חלוקה באפס חמורה יותר משגיאת המרה.',
          'יודפס Exception כי הבלוק הכללי תמיד תופס ראשון ללא קשר לסדר.',
          'ידפיס ValueError ולאחר מכן ZeroDivisionError כי שתי שגיאות נזרקות בבלוק ה-try.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q5 - String immutability and methods
    questions: [
      {
        id: 5,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
s = "  Hello World  "
s.strip()
s = s.replace("World", "Python")
print(s)
\`\`\``,
        answers: [
          "יודפס '  Hello Python  ' כי strip() לא שינה את s כיוון שמחרוזות הן immutable.",
          "יודפס 'Hello Python' כי strip() מחזיר מחרוזת חדשה ומשנה את s באופן ישיר.",
          "יודפס '  Hello World  ' כי replace() אינו פועל על מחרוזת שלא עברה strip תחילה.",
          "יודפס 'Hello Python' כי כל מתודת מחרוזת משנה את האובייקט המקורי בזיכרון.",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q6 - Dictionary methods
    questions: [
      {
        id: 6,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
d = {"x": 10, "y": 20, "z": 30}
d.pop("y")
val = d.get("y", -1)
print(val, len(d))
\`\`\``,
        answers: [
          "יודפס -1 2 כי המפתח 'y' הוסר וget מחזיר את ברירת המחדל, ואורך המילון הוא 2.",
          'יודפס 20 2 כי get מחזיר את הערך האחרון שהיה קשור למפתח לפני המחיקה.',
          'יודפס -1 3 כי pop מסיר את הערך אך משאיר את המפתח עם ערך None במילון.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לקרוא ל-get על מפתח שכבר הוסר מהמילון.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q7 - File reading modes
    questions: [
      {
        id: 7,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
with open("data.txt", "a") as f:
    f.write("line1\n")
    f.write("line2\n")
    content = f.read()
    print(content)
\`\`\``,
        answers: [
          'הקוד יקרוס בשגיאת זמן ריצה כי לא ניתן לקרוא קובץ שנפתח במצב append.',
          'הקוד ידפיס את כל תוכן הקובץ כולל השורות שנכתבו כי append מאפשר גם קריאה.',
          'הקוד ידפיס רק את השורות החדשות כי בmodeשל append הקריאה מתחילה מסוף הקובץ.',
          'הקוד ידפיס מחרוזת ריקה כי write מחיק את תוכן הקובץ לפני כל כתיבה חדשה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q8 - OOP inheritance and __str__
    questions: [
      {
        id: 8,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class Animal:
    def __init__(self, name):
        self.__name = name

    def __str__(self):
        return self.__name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("Rex", "Labrador")
print(d)
\`\`\``,
        answers: [
          'יודפס Rex כי Dog יורש את __str__ מ-Animal שמחזיר את השם הפרטי.',
          'יודפס Rex Labrador כי __str__ ב-Dog עוקף אוטומטית את זו של Animal.',
          'תתקבל שגיאת זמן ריצה כי __name הוא פרטי ו-Dog אינו יכול לגשת אליו.',
          'יודפס None כי __name מוגדר כפרטי ולכן __str__ מחזירה None בירושה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q9 - Sets theory
    questions: [
      {
        id: 9,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
s1 = {1, 2, 3, 4}
s2 = {3, 4, 5, 6}
print(s1 & s2)
print(s1 | s2)
print(s1 - s2)
\`\`\``,
        answers: [
          'שורה 3 תדפיס {3, 4}, שורה 4 תדפיס {1,2,3,4,5,6}, שורה 5 תדפיס {1, 2}.',
          'שורה 3 תדפיס {1,2,5,6}, שורה 4 תדפיס {3,4}, שורה 5 תדפיס {1,2,3,4,5,6}.',
          'שורה 3 תדפיס {3, 4}, שורה 4 תדפיס {3, 4}, שורה 5 תדפיס {1, 2, 5, 6}.',
          'שורה 3 תדפיס {1, 2}, שורה 4 תדפיס {1,2,3,4,5,6}, שורה 5 תדפיס {3, 4}.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q10 - Lambda and sorted
    questions: [
      {
        id: 10,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
words = ["banana", "fig", "apple", "kiwi"]
result = sorted(words, key=lambda w: len(w))
print(result)
\`\`\``,
        answers: [
          "יודפס ['fig', 'kiwi', 'apple', 'banana'] כי המיון הוא לפי אורך המחרוזת בסדר עולה.",
          "יודפס ['banana', 'apple', 'kiwi', 'fig'] כי sorted ממיין לפי אורך בסדר יורד כברירת מחדל.",
          "יודפס ['apple', 'banana', 'fig', 'kiwi'] כי lambda מתעלמת מאורך וממיינת אלפבתית.",
          'תתקבל שגיאת זמן ריצה כי sorted אינו מקבל פרמטר key מסוג lambda function.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q11 - List comprehension
    questions: [
      {
        id: 11,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
nums = [1, 2, 3, 4, 5, 6]
result = [x**2 for x in nums if x % 2 == 0]
print(result)
\`\`\``,
        answers: [
          'יודפס [4, 16, 36] כי הרשימה כוללת את ריבועי המספרים הזוגיים בלבד מהרשימה.',
          'יודפס [1, 4, 9, 16, 25, 36] כי הביטוי if לא חוסם אף מספר מהרשימה המקורית.',
          'יודפס [2, 4, 6] כי הביטוי x**2 עם תנאי if מחזיר את המספרים הזוגיים כפולים.',
          'תתקבל שגיאת תחביר כי לא ניתן לשלב תנאי if בתוך list comprehension בפייתון.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q12 - Recursion base case
    questions: [
      {
        id: 12,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def mystery(n):
    if n == 0:
        return 1
    return n * mystery(n - 1)

print(mystery(4))
\`\`\``,
        answers: [
          'יודפס 24 כי הפונקציה מחשבת עצרת של n באמצעות רקורסיה עם תנאי עצירה n==0.',
          'יודפס 4 כי הפונקציה מחזירה את n כאשר היא מגיעה לתנאי הבסיס ומפסיקה.',
          'יודפס 16 כי הפונקציה מחשבת n בחזקת 2 ומחזירה n*n בכל קריאה רקורסיבית.',
          'הקוד ייכנס ללולאה אינסופית כי תנאי הבסיס n==0 לעולם לא יתקיים עבור n חיובי.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q13 - Tuple immutability
    questions: [
      {
        id: 13,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
t = (1, 2, [3, 4])
t[2].append(5)
print(t)
\`\`\``,
        answers: [
          'יודפס (1, 2, [3, 4, 5]) כי הטאפל עצמו לא השתנה אך הרשימה בתוכו ניתנת לשינוי.',
          'תתקבל שגיאת זמן ריצה כי טאפלים הם immutable ולכן לא ניתן לשנות אף אחד מאיבריו.',
          'יודפס (1, 2, [3, 4]) כי append על איבר של טאפל יוצרת עותק ולא משנה את המקור.',
          'יודפס (1, 2, [5]) כי append מאפסת את הרשימה ומוסיפה רק את האיבר החדש לטאפל.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q14 - map and filter
    questions: [
      {
        id: 14,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
nums = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, nums))
evens = list(filter(lambda x: x % 2 == 0, doubled))
print(evens)
\`\`\``,
        answers: [
          'יודפס [4, 8] כי map מכפיל כל איבר ב-2 ו-filter שומר רק את הזוגיים מהתוצאה.',
          'יודפס [2, 4, 6, 8, 10] כי filter אינו מסנן כלום מכיוון שכל כפולות 2 הן זוגיות.',
          'יודפס [2, 4] כי filter פועל על הרשימה המקורית nums ולא על התוצאה של map.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן להפעיל filter על תוצאת map מבלי להמיר לרשימה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q15 - Class variable vs instance variable
    questions: [
      {
        id: 15,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class Counter:
    count = 0

    def __init__(self):
        Counter.count += 1

c1 = Counter()
c2 = Counter()
c3 = Counter()
print(Counter.count, c1.count)
\`\`\``,
        answers: [
          'יודפס 3 3 כי count הוא משתנה מחלקה משותף לכל האובייקטים ומתעדכן בכל יצירת מופע.',
          'יודפס 1 1 כי כל אובייקט יוצר עותק פרטי של count ומאתחל אותו מחדש לאפס.',
          'יודפס 3 0 כי Counter.count ו-c1.count מצביעים לאזורי זיכרון שונים לחלוטין.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לגשת למשתנה מחלקה דרך שם האובייקט c1.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q16 - Nested dictionary
    questions: [
      {
        id: 16,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
students = {
    "Alice": {"grade": 90, "city": "Tel Aviv"},
    "Bob":   {"grade": 75, "city": "Haifa"}
}
students["Alice"]["grade"] += 10
students["Charlie"] = {"grade": 85, "city": "Beer Sheva"}
print(len(students), students["Alice"]["grade"])
\`\`\``,
        answers: [
          'יודפס 3 100 כי נוספה רשומה חדשה למילון ושדה הציון של Alice עודכן ב-10 נקודות.',
          'יודפס 2 100 כי הוספת Charlie לא מצליחה כי המילון כבר הוגדר עם שני מפתחות בלבד.',
          'יודפס 3 90 כי הפעולה += על ערך בתוך מילון מקונן אינה משנה את הערך המקורי.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן להוסיף מפתח חדש למילון לאחר הגדרתו הראשונית.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q17 - while loop with break
    questions: [
      {
        id: 17,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
i = 0
total = 0
while i < 10:
    i += 1
    if i % 3 == 0:
        continue
    if i > 7:
        break
    total += i
print(total)
\`\`\``,
        answers: [
          'יודפס 22 כי הלולאה מדלגת על כפולות של 3 ועוצרת כאשר i מגיע ל-8, וסוכמת את השאר.',
          'יודפס 45 כי continue ו-break אינם פועלים בלולאת while ולכן מסתכמים כל הערכים.',
          'יודפס 28 כי break עוצר את הלולאה אחרי i==10 ו-continue מדלג על כפולות של 2.',
          'יודפס 0 כי total לא מתעדכן לעולם בגלל שה-continue תמיד מדלג על שורת הסכום.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q18 - Modules theory
    questions: [
      {
        id: 18,
        question: 'בחרו את הטענה המדויקת ביותר העוסקת בייבוא מודולים בפייתון.',
        answers: [
          'ניתן לייבא פונקציה ספציפית ממודול באמצעות from module import func ולהשתמש בה ישירות.',
          'כדי להשתמש בפונקציה ממודול יש תמיד לכתוב את שם המודול לפניה גם לאחר ייבוא מלא.',
          'אם מייבאים מודול עם כינוי, לא ניתן לגשת לאף פונקציה בו בקוד שמגיע אחרי.',
          'הפקודה import * מייבאת רק את הפונקציות הציבוריות שמוגדרות בתחילת קובץ המודול.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q19 - OOP encapsulation + getter/setter
    questions: [
      {
        id: 19,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class Student:
    def __init__(self, name, grade):
        self.__name = name
        self.__grade = grade

    def get_grade(self):
        return self.__grade

    def set_grade(self, grade):
        if grade >= 0:
            self.__grade = grade

s = Student("Dana", 85)
s.__grade = 100
print(s.get_grade())
\`\`\``,
        answers: [
          'יודפס 85 כי s.__grade = 100 יוצר תכונה חדשה בשם __grade ולא משנה את __grade הפרטי.',
          'יודפס 100 כי גישה ישירה לתכונה הפרטית מחוץ למחלקה מאפשרת שינוי ישיר של הערך.',
          'תתקבל שגיאת זמן ריצה כי גישה ישירה לתכונה פרטית מחוץ למחלקה אסורה לחלוטין.',
          'יודפס 0 כי set_grade מאפס את הציון בכל פעם שנעשה ניסיון גישה ישירה מחוץ למחלקה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q20 - Dictionary comprehension
    questions: [
      {
        id: 20,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
scores = {"Alice": 55, "Bob": 82, "Carol": 91, "Dan": 47}
passed = {name: grade for name, grade in scores.items() if grade >= 60}
print(len(passed), "Bob" in passed)
\`\`\``,
        answers: [
          'יודפס 2 True כי רק Bob ו-Carol עברו את הסף של 60, ו-Bob נמצא במילון החדש.',
          'יודפס 4 True כי dictionary comprehension שומר את כל המפתחות ומסנן רק ערכים.',
          'יודפס 2 False כי Bob נמצא במילון המקורי scores אך נמחק ממנו בעת יצירת passed.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן להשתמש ב-items() בתוך dictionary comprehension.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q1 - Tricky: continue inside while without increment causes infinite loop
    questions: [
      {
        id: 1,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def func():
    i = 0
    result = []
    while i < 5:
        if i == 3:
            continue
        result.append(i)
        i += 1
    return result

print(func())
\`\`\``,
        answers: [
          'הקוד נכנס ללולאה אינסופית כי כאשר i==3 מתבצע continue לפני העדכון של i.',
          'יודפס [0, 1, 2, 4] כי continue מדלג על הוספת 3 לרשימה ועובר לאיטרציה הבאה.',
          'יודפס [0, 1, 2, 3, 4] כי continue בלולאת while אינו משפיע על הרשימה הנוצרת.',
          'יודפס [0, 1, 2] כי break נסתר בתוך continue עוצר את הלולאה כאשר i מגיע ל-3.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q2 - Tricky: except Exception before specific catches them all
    questions: [
      {
        id: 2,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def calc(a, b):
    try:
        result = a / b
        return int(result)
    except Exception:
        print("general error")
    except ZeroDivisionError:
        print("division by zero")
    except ValueError:
        print("value error")

calc(10, 0)
\`\`\``,
        answers: [
          'יודפס general error כי Exception הוא בסיס של כל החריגות ותופס ראשון את השגיאה.',
          'יודפס division by zero כי ZeroDivisionError ספציפי יותר ולכן נבדק לפני Exception.',
          'יודפס value error כי חלוקת מספר שלם ב-0 מייצרת ValueError ולא ZeroDivisionError.',
          'תתקבל שגיאת תחביר כי לא ניתן להגדיר except ספציפי אחרי בלוק except Exception.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q3 - for loop with range and enumerate
    questions: [
      {
        id: 3,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits, start=1):
    if i % 2 == 0:
        print(fruit)
\`\`\``,
        answers: [
          'יודפס banana כי enumerate עם start=1 מתחיל את הספירה מ-1 ורק 2 הוא זוגי.',
          'יודפס apple ו-cherry כי enumerate ספירה מ-1 ולכן האינדקסים הזוגיים הם 0 ו-2.',
          'יודפס apple, banana ו-cherry כי פרמטר start=1 מגדיר גודל צעד ולא ערך התחלה.',
          'תתקבל שגיאת זמן ריצה כי enumerate אינו מקבל את הפרמטר start בגרסאות Python.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q4 - Tricky: two __init__ in same class, second overrides first
    questions: [
      {
        id: 4,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class Point:
    def __init__(self):
        self.x = 0
        self.y = 0

    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = Point(3, 4)
p2 = Point()
print(p1.x)
\`\`\``,
        answers: [
          'שורת p2 = Point() תגרום לשגיאת זמן ריצה כי ה-__init__ השני דורש שני ארגומנטים.',
          'יודפס 3 כי Python שומר את שני הבנאים ובוחר אוטומטית את המתאים לפי מספר הארגומנטים.',
          'יודפס 0 כי ה-__init__ הראשון הוא זה שמופעל כאשר קוראים Point(3, 4) בפייתון.',
          'תתקבל שגיאת תחביר כי Python אינו מאפשר הגדרת שתי מתודות באותו שם במחלקה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q5 - String slicing
    questions: [
      {
        id: 5,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
s = "Hello, World!"
print(s[7:12])
print(s[-6:-1])
print(s[::2])
\`\`\``,
        answers: [
          "שורה 2 תדפיס 'World', שורה 3 תדפיס 'orld!', שורה 4 תדפיס 'Hlo ol!'.",
          "שורה 2 תדפיס 'World', שורה 3 תדפיס 'World', שורה 4 תדפיס 'Hello, World!'.",
          "שורה 2 תדפיס 'World', שורה 3 תדפיס 'orld!', שורה 4 תדפיס 'Hello World'.",
          "שורה 2 תדפיס ', Wor', שורה 3 תדפיס 'orld!', שורה 4 תדפיס 'Hlo ol!'.",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q6 - Tricky: global keyword missing, UnboundLocalError
    questions: [
      {
        id: 6,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
total = 100

def update():
    print(total)
    total = total + 50
    print(total)

update()
\`\`\``,
        answers: [
          'הקוד יקרוס בשגיאת זמן ריצה כבר בשורת ה-print הראשונה כי Python מזהה total כמקומי.',
          'יודפס 100 ולאחר מכן 150 כי הפונקציה קוראת את הגלובלי ואז מגדירה משתנה מקומי.',
          'יודפס 100 ולאחר מכן 100 כי השמה לתוך הפונקציה יוצרת עותק ולא משנה את הגלובלי.',
          'הקוד ידפיס 150 פעמיים כי Python מזהה את הכוונה ומגדיר global אוטומטית בפונקציה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q7 - List methods: sort vs sorted
    questions: [
      {
        id: 7,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
a = [3, 1, 4, 1, 5]
b = sorted(a)
a.sort(reverse=True)
print(a)
print(b)
\`\`\``,
        answers: [
          'יודפס [5,4,3,1,1] ולאחר מכן [1,1,3,4,5] כי sort משנה את a ו-sorted יצר עותק חדש.',
          'יודפס [5,4,3,1,1] ולאחר מכן [5,4,3,1,1] כי b ו-a מצביעים לאותה רשימה בזיכרון.',
          'יודפס [1,1,3,4,5] ולאחר מכן [1,1,3,4,5] כי sorted מחזיר תמיד מיון עולה לשניהם.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לקרוא sort ו-sorted על אותה רשימה באותו קוד.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q8 - Tricky: random.seed inside method called in loop → same result every iteration
    questions: [
      {
        id: 8,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
import random

def roll():
    random.seed(42)
    return random.randint(1, 6)

for i in range(3):
    print(roll())
\`\`\``,
        answers: [
          'יודפס את אותו מספר שלוש פעמים כי seed מאופס בכל קריאה לפונקציה roll.',
          'יודפס שלושה מספרים שונים כי random.seed מאותחל פעם אחת בלבד בתחילת הריצה.',
          'יודפס שלושה מספרים שונים כי הלולאה for מאפסת את מצב ה-random בכל איטרציה.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לקרוא random.seed בתוך פונקציה שנקראת בלולאה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q9 - Inheritance: method override
    questions: [
      {
        id: 9,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14 * self.r * self.r

shapes = [Shape(), Circle(5), Shape()]
for s in shapes:
    print(s.area())
\`\`\``,
        answers: [
          'יודפס 0, 78.5, 0 כי כל אובייקט קורא למתודת area שלו עצמו לפי הטיפוס האמיתי.',
          'יודפס 0, 0, 0 כי הלולאה עוברת על רשימה מסוג Shape ותמיד קוראת ל-area של Shape.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לאחסן אובייקטים מסוגים שונים ברשימה אחת.',
          'יודפס 0, 78.5, 78.5 כי ברגע ש-Circle נוצר הוא עוקף את area גם עבור אובייקטי Shape.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q10 - Two-dimensional list
    questions: [
      {
        id: 10,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

total = 0
for row in matrix:
    total += row[-1]
print(total)
\`\`\``,
        answers: [
          'יודפס 18 כי הלולאה מסכמת את האיבר האחרון בכל שורה: 3 + 6 + 9.',
          'יודפס 45 כי הלולאה מסכמת את כל האיברים בכל שורות המטריצה ביחד.',
          'יודפס 24 כי row[-1] מחזיר את השורה האחרונה ולא את האיבר האחרון בשורה.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן להשתמש באינדקס שלילי על רשימה דו-ממדית.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q11 - Tricky: pass by reference with list inside function
    questions: [
      {
        id: 11,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def double_first(lst):
    lst[0] = lst[0] * 2
    lst = [0, 0, 0]

nums = [5, 10, 15]
double_first(nums)
print(nums)
\`\`\``,
        answers: [
          'יודפס [10, 10, 15] כי שינוי איבר דרך הפניה משפיע על הרשימה המקורית אך השמה מחדש לא.',
          'יודפס [0, 0, 0] כי השמת lst = [0,0,0] מחליפה את הרשימה המקורית שהועברה לפונקציה.',
          'יודפס [5, 10, 15] כי פונקציות ב-Python מקבלות תמיד עותק של הרשימה ולא הפניה.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לשנות איבר ברשימה ולאחר מכן להשים אותה מחדש.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q12 - set operations theory
    questions: [
      {
        id: 12,
        question: 'בחרו את הטענה הנכונה ביותר העוסקת בפעולות על קבוצות (sets) בפייתון.',
        answers: [
          'ניתן לבצע איחוד קבוצות באמצעות אופרטור | או מתודת union, ושתי הדרכים שקולות.',
          'פעולת ה-intersection מחזירה את כל האיברים שנמצאים באחת הקבוצות אך לא בשתיהן.',
          'פעולת החיסור A - B מחזירה את האיברים שנמצאים בB אך לא ב-A בלבד לפי הסדר.',
          'symmetric difference מחזירה את האיברים המשותפים לשתי הקבוצות בלבד ללא כפילויות.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q13 - f-string formatting
    questions: [
      {
        id: 13,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
name = "Dana"
score = 87.456
print(f"Student: {name:<10} | Score: {score:.2f}")
\`\`\``,
        answers: [
          "יודפס 'Student: Dana       | Score: 87.46' כי :<10 מיישר שמאלה ו-.2f מעגל לשתי ספרות.",
          "יודפס 'Student: Dana | Score: 87.456' כי פורמט :<10 אינו נתמך בתוך f-string.",
          "יודפס 'Student:       Dana | Score: 87.46' כי :<10 מיישר ימינה ומוסיף רווחים משמאל.",
          'תתקבל שגיאת זמן ריצה כי לא ניתן לשלב פורמט יישור יחד עם פורמט עיגול ב-f-string.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q14 - reduce function
    questions: [
      {
        id: 14,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
from functools import reduce

nums = [2, 3, 4, 5]
result = reduce(lambda x, y: x * y, nums)
print(result)
\`\`\``,
        answers: [
          'יודפס 120 כי reduce מכפיל את כל האיברים ברצף: 2*3=6, 6*4=24, 24*5=120.',
          'יודפס 14 כי reduce מחבר את כל האיברים ברשימה כברירת מחדל ולא מכפיל.',
          'יודפס [6, 24, 120] כי reduce מחזיר רשימה של כל תוצאות הביניים שנוצרו בתהליך.',
          'תתקבל שגיאת זמן ריצה כי reduce דורש פונקציה רגילה ולא lambda כפרמטר ראשון.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q15 - Keyword arguments and default params
    questions: [
      {
        id: 15,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def greet(name, msg="Hello", times=1):
    for i in range(times):
        print(f"{msg}, {name}!")

greet("Amit", times=3)
\`\`\``,
        answers: [
          "יודפס 'Hello, Amit!' שלוש פעמים כי msg לא הועבר ולכן נשתמש בברירת המחדל Hello.",
          'תתקבל שגיאת זמן ריצה כי לא ניתן לדלג על הפרמטר msg ולהעביר times ישירות.',
          "יודפס 'Hello, Amit!' פעם אחת כי Python מתעלם מ-keyword arguments שאינם ראשוניים.",
          "יודפס 'Amit, Hello!' שלוש פעמים כי סדר הפרמטרים מתהפך בעת שימוש ב-keyword.",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q16 - Returning multiple values from function
    questions: [
      {
        id: 16,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def stats(lst):
    return min(lst), max(lst), sum(lst) / len(lst)

lo, hi, avg = stats([4, 8, 2, 6])
print(type((lo, hi, avg)))
print(hi - lo)
\`\`\``,
        answers: [
          "שורה 5 תדפיס <class 'tuple'> ושורה 6 תדפיס 6 כי הפונקציה מחזירה טאפל של שלושה ערכים.",
          "שורה 5 תדפיס <class 'list'> ושורה 6 תדפיס 6 כי פונקציה שמחזירה כמה ערכים מחזירה רשימה.",
          "שורה 5 תדפיס <class 'tuple'> ושורה 6 תדפיס 4 כי hi=6 ו-lo=2 לאחר פריסת הטאפל.",
          'תתקבל שגיאת זמן ריצה כי לא ניתן לפרוס ערכים מרובים מפונקציה ישירות למשתנים.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q17 - Tricky: __name__ == "__main__" with module import theory
    questions: [
      {
        id: 17,
        question: 'בחרו את הטענה המדויקת ביותר העוסקת בשימוש ב- if __name__ == "__main__" בפייתון.',
        answers: [
          'הקוד שתחת הבדיקה ירוץ רק כאשר הקובץ מורץ ישירות ולא כאשר הוא מיובא כמודול.',
          'הבדיקה נדרשת כדי להגדיר פונקציות בקובץ, אחרת הן לא יזוהו על ידי המפרש.',
          "כאשר קובץ מיובא כמודול, הערך של __name__ הוא '__main__' ולכן הקוד ירוץ בכל מקרה.",
          'הבדיקה הכרחית כדי למנוע שגיאת זמן ריצה בכל קובץ שמכיל יותר מפונקציה אחת.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q18 - set comprehension
    questions: [
      {
        id: 18,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
words = ["hi", "hello", "hey", "hi", "hello"]
unique_lengths = {len(w) for w in words}
print(unique_lengths)
print(len(unique_lengths))
\`\`\``,
        answers: [
          'שורה 3 תדפיס {2, 5} ושורה 4 תדפיס 2 כי set comprehension שומר ערכים ייחודיים בלבד.',
          'שורה 3 תדפיס {2, 5, 2, 5} ושורה 4 תדפיס 4 כי comprehension שומר כפילויות כברירת מחדל.',
          'שורה 3 תדפיס [2, 5, 3, 2, 5] ושורה 4 תדפיס 5 כי {} עם comprehension מחזיר רשימה.',
          'תתקבל שגיאת זמן ריצה כי set comprehension אינו נתמך בגרסאות Python מתחת ל-3.10.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q19 - Tricky: list passed to function, reassignment vs mutation
    questions: [
      {
        id: 19,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
def process(data):
    data.append(99)
    data = data + [100]
    data.append(101)
    return data

original = [1, 2, 3]
returned = process(original)
print(original)
print(returned)
\`\`\``,
        answers: [
          'original יודפס [1,2,3,99] ו-returned יודפס [1,2,3,99,100,101] כי השמה מחדש ניתקת.',
          'original יודפס [1,2,3] ו-returned יודפס [1,2,3,99,100,101] כי append יוצר עותק.',
          'original יודפס [1,2,3,99,100,101] ו-returned יודפס [1,2,3,99,100,101] שניהם זהים.',
          'תתקבל שגיאת זמן ריצה כי לא ניתן לחבר רשימה בתוך פונקציה לאחר שכבר בוצע append.',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    // Q20 - OOP: static method vs instance method
    questions: [
      {
        id: 20,
        question: `בחרו את הטענה המדויקת ביותר בקטע הקוד הבא
\`\`\`python
class MathHelper:
    @staticmethod
    def add(a, b):
        return a + b

    def multiply(self, a, b):
        return a * b

print(MathHelper.add(3, 4))
print(MathHelper.multiply(3, 4))
\`\`\``,
        answers: [
          'שורה 9 תדפיס 7 ושורה 10 תגרום לשגיאת זמן ריצה כי multiply דורש אובייקט ולא מחלקה.',
          'שורה 9 תדפיס 7 ושורה 10 תדפיס 12 כי Python מעביר אוטומטית None כ-self לכל מתודה.',
          'שורה 9 תגרום לשגיאת זמן ריצה כי לא ניתן לקרוא ל-staticmethod דרך שם המחלקה.',
          'שתי השורות יתנו שגיאת זמן ריצה כי כל מתודה במחלקה דורשת יצירת אובייקט תחילה.',
        ],
        correctAnswer: 0,
      },
    ],
  },
];
