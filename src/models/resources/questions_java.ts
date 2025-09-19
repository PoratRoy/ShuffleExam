import { Question } from '../types/exam';

export const JavaQuestions: Question[] = [
  {
    id: 1,
    question: `בהינתן התוכנית הבאה, בחרו את האפשרות המדויקת ביותר כאשר ננסה להריץ את התוכנית. ניתן להניח שכל מחלקה כתובה בקובץ נפרד באותה החבילה.
\`\`\`
public class Base {
  public static final String STR = " Super Class ";
  public Base() {
    System.out.print("1");
  }
}

public class Derived extends Base {
  public Derived() {
    System.out.print("2");
  }
}

public class Program {
  public static void main(String[] args) {
    Derived obj = new Derived();
    System.out.print(Base.STR);
  }
}
\`\`\``,
    answers: [
      'יודפס Super Class 12.',
      'התוכנית לא תרוץ מכיוון שקיימת שגיאת קומפילציה.',
      'יודפס Super Class 21.',
      'יודפס Super Class 2.',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'מי מהטענות הבאות אינה נכונה?',
    answers: [
      'מחלקה המוגדרת כ-final לא יכולה לרשת מחלקות אחרות.',
      'אי אפשר לדרוס מתודה המוגדרת כ-final.',
      'לא ניתן לרשת מחלקה המוגדרת כ-final.',
      'ניתן לרשת ממחלקת האב מתודה המוגדרת אצלו כ-final.',
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: `בהינתן התוכנית הבאה, בחרו את האפשרות המדויקת ביותר לתיקון הקוד ע״פ העקרונות שלמדנו בשיעור.
\`\`\`
class A {
  private int num;
  public A() {
    num = 8;
  }
  public boolean equals(Object obj) {
    return num == ((A)obj).num;
  }
}

class B {
  private int num;
  B() {
    num = 7;
  }
}

public class Program {
  public static void main(String[] args) {
    A a = new A();
    B b = new B();
    System.out.println(a.equals(b));
  }
}
\`\`\``,
    answers: [
      'הוספת קוד לפני שורה 7 if (obj instanceof A), ואחרת נחזיר false.',
      'החלפת שורה 22 בקוד System.out.println(b.equals(a));',
      'החלפת שורה 6 בקוד public boolean equals(B b).',
      'החלפת שורה 6 בקוד public boolean equals(A a).',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: `בחרו את התשובה המדויקת ביותר.
\`\`\`
public class A {
  private String name;
  public A(String name) {
    this.name = name;
  }
  public boolean equals(Object obj) {
    return name.equals(((A)obj).name);
  }
}

public class B extends A {
  public B(String name) {
    super(name);
  }
}

public class Program {
  public static void main(String[] args) {
    String name1 = new String("Alice");
    String name2 = new String("Alice");
    System.out.println((new A(name1)).equals(new B(name2)));
  }
}
\`\`\``,
    answers: [
      'התוכנית תרוץ ובסיום יודפס false.',
      'התוכנית תרוץ ובסיום יודפס true.',
      'התוכנית תתקמפל אבל תהיה שגיאת זמן ריצה.',
      'התוכנית לא תתקמפל.',
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: 'האם מחלקה יורשת יכולה להפעיל מתודה של האב בהוראת גישה private?',
    answers: [
      'לא, בלי קשר לחבילות.',
      'כן, כל עוד שתי המחלקות מוגדרות באותה חבילה ומדובר על מתודה סטטית.',
      'כן, בלי קשר לחבילות.',
      'רק אם המחלקה היורשת מוגדרת באותה החבילה כ-final.',
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
class Mammal {
  void eat(Mammal m) {
    System.out.println("Mammal eats food");
  }
}

class Cattle extends Mammal {
  void eat(Cattle c) {
    System.out.println("Cattle eats hay");
  }
}

class Horse extends Cattle {
  void eat(Horse h) {
    System.out.println("Horse eats hay");
  }
}

public class Program {
  public static void main(String[] args) {
    Horse h = new Horse();
    Cattle c = new Horse();
    c.eat(h);
  }
}
\`\`\``,
    answers: [
      'Cattle eats hay.',
      'Mammal eats food.',
      'Horse eats hay.',
      'התוכנית לא תרוץ, תהיה שגיאת קומפילציה.',
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: 'בחרו את הטענה המדויקת ביותר ביחס לבנאים ב-Java.',
    answers: [
      'שם הבנאי תמיד צריך להיות כמו שם המחלקה.',
      'אין צורך להגדיר בנאי בירושת מחלקה כי אנחנו תמיד מקבלים אחד כזה מתנה לכל מחלקה.',
      'תמיד אם לא נקרא לבנאי של האב במפורש אז תהיה שגיאת קומפילציה.',
      'בהעמסת בנאים, תמיד מספיק לקרוא לבנאי אחד בלבד במחלקת הבן.',
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "בחרו את הטענה המדויקת ביותר העוסקת במילה 'this' ב-Java.",
    answers: [
      'המילה משמשת כהפניה לאובייקט המדובר.',
      'המילה משמשת כדי ליצור העמסה בין בנאים.',
      'המילה משמשת כדי ליצור מופע חדש של האובייקט.',
      'כל התשובות נכונות.',
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
class Base {
  final public void show() {
    System.out.println("Base::show() called");
  }
}

class Derived extends Base {
  public void show() {
    System.out.println("Derived::show() called");
  }
}

public class Program {
  public static void main(String[] args) {
    Base b = new Derived();
    b.show();
  }
}
\`\`\``,
    answers: [
      'שגיאת קומפילציה.',
      'שגיאת זמן ריצה.',
      'יודפס Base::show() called.',
      'יודפס Derived::show() called.',
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: `הניחו כי מחלקת Undergraduate יורשת ממחלקת Student אשר יורשת ממחלקת Person. בהינתן שורות הקוד הבאות:
\`\`\`
Person p = new Person();
Student s = new Student();
Undergraduate ug = new Undergraduate();

// בדקו אילו מהאפשרויות הבאות עוברות קומפילציה?
1. p = ug;
2. p = new Undergraduate();
3. ug = new Student();
4. ug = p;
5. s = new Person();
\`\`\``,
    answers: ['1 ו-2.', '3 ו-4.', '1 ו-4.', '2, 3 ו-5.'],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: `מה סוג הקשר בין someMeth במחלקות A ו-B?
\`\`\`
class A {
  protected void someMeth() {
    System.out.println("from class A");
  }
}

class B extends A {
  protected void someMeth() {
    System.out.println("from class B");
  }
  protected void someMeth(String x) {
    System.out.println("from class B: " + x);
  }
}
\`\`\``,
    answers: ['גם דריסה וגם העמסה.', 'לא דריסה ולא העמסה.', 'רק העמסה.', 'רק דריסה.'],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: `מה יודפס כאשר נריץ את הקוד הבא?
\`\`\`
class First {
  public First() { System.out.println("A"); }
}
class Second extends First {
  public Second() { System.out.println("B"); }
}
class Third extends Second {
  public Third() { System.out.println("C"); }
}
public class MainClass {
  public static void main(String[] args) {
    Third c = new Third();
  }
}
\`\`\``,
    answers: ['A B C', 'C B A', 'C', 'A'],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
class Complex {
  private double re, im;
  public String toString() {
    return "(" + re + " + " + im + "i)";
  }
  Complex(Complex c) {
    re = c.re;
    im = c.im;
  }
}
public class Main {
  public static void main(String[] args) {
    Complex c1 = new Complex();
    Complex c2 = new Complex(c1);
    System.out.println(c2);
  }
}
\`\`\``,
    answers: [
      'שגיאת קומפילציה.',
      'יודפס (0.0 + 0.0i).',
      'שגיאת זמן ריצה.',
      'כל התשובות לא נכונות.',
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
class Parent {
  String name = "parent";
  String message() {
    return "from parent";
  }
}

class Child extends Parent {
  String name = "child";
  String message() {
    return "from child";
  }
}

public class Program {
  public static void main(String[] args) {
    Parent p = new Child();
    System.out.println(p.name + " " + p.message());
  }
}
\`\`\``,
    answers: ['parent from child', 'parent from parent', 'child from child', 'child from parent'],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
class Parent {
  String name = "parent";
  String message() {
    return "from " + name;
  }
}

class Child extends Parent {
  static String name = "child";
  String message() {
    return "from " + this.name;
  }
  String message(String m) {
    return message() + m;
  }
}

public class Program {
  public static void main(String[] args) {
    Parent p = new Child();
    System.out.println(p.name + " " + p.message(Child.name));
  }
}
\`\`\``,
    answers: [
      'שגיאת קומפילציה.',
      'שגיאת זמן ריצה.',
      'child from childchild.',
      'parent from child.',
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: `בחרו את הטענה המדויקת ביותר בנוגע לקוד הבא:
\`\`\`
public class A {
  private int a;
}

import java.util.Arrays;

public class B {
  static int n = 3;
  private A[] arr;
  public B() {
    arr = new A[n];
    for (int i = 0; i < n; i++)
      arr[i] = new A();
  }
  public B(B b) {
    arr = Arrays.copyOf(b.arr, n);
  }
}
\`\`\``,
    answers: [
      'בנייה ההעתקה במחלקה B מבצע העתקה עמוקה למערך בלבד.',
      'בנייה ההעתקה במחלקה B מבצע העתקה עמוקה למערך ולאובייקטים השמורים במערך.',
      'בנייה ההעתקה במחלקה B מבצע העתקה עמוקה לאובייקטים השמורים במערך בלבד.',
      'בנייה ההעתקה במחלקה B לא מבצע העתקה עמוקה כלל.',
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
public abstract class B {
  public abstract int func();
}
public class A extends B {
  private int num;
  public A(int num) {
    this.num = num;
  }
  public A(int x, int y) {
    this.num = func() * x + y;
  }
  public A() {
    this.num = func();
  }
  public String toString() {
    return "" + num;
  }
  public int func() {
    return 8;
  }
}
public class Program {
  public static void main(String[] args) {
    System.out.print(new A(1,2));
    System.out.print(new A());
    System.out.print(new A(3));
  }
}
\`\`\``,
    answers: ['1083', '8103', 'שגיאת קומפילציה.', 'שגיאת זמן ריצה.'],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
class A {
  private String str;
  public A(String str) { this.str = str; }
  public A() {}
  public String toString() { return str; }
}

class B extends A {
  B() {}
  B(String s) { super(s); }
}

public class Program {
  public static void main(String[] args) {
    System.out.print(new A());
    System.out.print(new B());
    System.out.print(new B("Hi"));
  }
}
\`\`\``,
    answers: ['שגיאת זמן ריצה.', 'שגיאת קומפילציה.', 'יודפס Hi.', 'יודפס nullnullHi.'],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
public class A {
  private int num;
  public int func() { return num + 2; }
  public String toString() { return func(); }
}

public class B extends A {
  public int func() { return super.func() * 2; }
}

public class Program {
  public static void main(String[] args) {
    B b = new B();
    A a = b;
    System.out.print(b);
    System.out.print(a);
  }
}
\`\`\``,
    answers: ['שגיאת קומפילציה.', 'שגיאת זמן ריצה.', '44.', '24.'],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: `מה נקבל כאשר ננסה להריץ את הקוד הבא?
\`\`\`
public class A {
  public abstract void func();
}

public class B extends A {
  public void func() {
    System.out.print("B");
  }
}

public class C extends A {
  public void func() {
    System.out.print("C");
  }
}

public class Program {
  public static void main(String[] args) {
    A[] arr = new A[3];
    arr[0] = new B();
    arr[1] = new C();
    arr[2] = new B();
    for (A a : arr)
      a.func();
  }
}
\`\`\``,
    answers: ['שגיאת קומפילציה.', 'שגיאת זמן ריצה.', 'BCB.', 'AAA.'],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: `בהינתן התוכנית הבאה, בחרו את האפשרות המדויקת ביותר.
\`\`\`
public class Animal {
  protected static String sound = "Generic sound";
  public Animal() {
    System.out.print("A");
  }
  public void makeSound() {
    System.out.print(sound);
  }
}
public class Dog extends Animal {
  public Dog() {
    System.out.print("D");
  }
  public void makeSound() {
    System.out.print("Woof");
  }
}
public class Program {
  public static void main(String[] args) {
    Animal animal = new Dog();
    animal.makeSound();
    System.out.print(Animal.sound);
  }
}
\`\`\``,
    answers: [
      'ADWoofGeneric sound',
      'התוכנית לא תרוץ מכיוון שיש שגיאת קומפילציה.',
      'DWoofGeneric sound',
      'DAWoofGeneric sound',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'מה המטרה של המילה השמורה abstract ב-Java?',
    answers: [
      'להגדיר מחלקה שלא ניתן ליצור ממנה אובייקטים ישירות.',
      'לציין שמחלקה לא יכולה להיות יורשת.',
      'לקבוע שכל המתודות במחלקה חייבות להיות סטטיות.',
      'לקבוע שמחלקה יכולה להכיל לפחות מתודה אחת abstract.',
    ],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: `בהינתן הקוד הבא, איזו שורת קוד לא תגרום לשגיאת קומפילציה?
\`\`\`
public abstract class Shape {
  protected int sides;
  public Shape(int sides) {
    this.sides = sides;
  }
  public abstract double area();
}
public class Square extends Shape {
  private double sideLength;
  public Square(double sideLength) {
    super(4);
    this.sideLength = sideLength;
  }
  public double area() {
    return sideLength * sideLength;
  }
}
public class Program {
  public static void main(String[] args) {
    // Insert code here
  }
}
\`\`\``,
    answers: [
      'Shape[] arr = new Square[5];',
      'Rectangle rectangl = new Rectangle[1];',
      'Square square = new Rectangle(4);',
      'Shape shape = new Shape(3);',
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
public class Parent {
  public void show() {
    System.out.print("Parent");
  }
}
public class Child extends Parent {
  public void show() {
    System.out.print("Child");
  }
}
public class Program {
  public static void main(String[] args) {
    Parent[] p = new Parent[5];
    for (int i=0; i<5; i++) {
      if (i%2==0)
        p[i] = new Child();
      else
        p[i] = new Parent();
    }
    for (Parent obj : p) {
      obj.show();
    }
  }
}
\`\`\``,
    answers: [
      'ChildParentChildParentChild',
      'ParentChildParentChildParent',
      'ChildChildChildChildChild',
      'ParentParentParentParentParent',
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'איזו מהפעולות הבאות אינה חוקית על המשתנה str מטיפוס מחרוזת ב-Java?',
    answers: ["str[0] = 'A';", 'str.charAt(0);', 'str.length();', 'str.toUpperCase();'],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: 'מה המטרה של המילה השמורה super בשפת Java?',
    answers: [
      'לגשת לחברים (שדות ומתודות) של מחלקת האב.',
      'לגשת למתודות ולקבועים סטטיים של המחלקה הנוכחית.',
      'ליצור אובייקט חדש של מחלקת האב.',
      'לאפשר דריסה של מתודות בין מחלקת האב למחלקת הבן.',
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: 'איזו מהפעולות הבאות אינה חוקית על ArrayList בשפת Java?',
    answers: ['list.add(0, 5);', 'list.set(0, element);', 'list.clear();', 'list.get(0);'],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
class A {
  private int value;
  public A(int value) { this.value = value; }

  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || !(obj instanceof A)) return false;
    A a = (A) obj;
    return value == a.value;
  }
}

class B extends A {
  private int extraValue;
  public B(int value, int extraValue) {
    super(value);
    this.extraValue = extraValue;
  }

  public boolean equals(Object obj) {
    if (!super.equals(obj)) return false;
    B b = (B) obj;
    return extraValue == b.extraValue;
  }
}

public class Program {
  public static void main(String[] args) {
    A a1 = new A(10);
    A a2 = new A(10);
    B b1 = new B(10, 20);
    B b2 = new B(10, 20);
    B b3 = new B(10, 30);
    System.out.print(a1.equals(a2));
    System.out.print(b1.equals(b2));
    System.out.print(b1.equals(b3));
    System.out.print(a1.equals(b1));
  }
}
\`\`\``,
    answers: ['truetruefalsetrue', 'truetruefalsefalse', 'שגיאת זמן ריצה.', 'שגיאת קומפילציה.'],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
class Vehicle {
  public void print() {
    System.out.println("Vehicle");
  }
}

class Car extends Vehicle {
  public void print() {
    System.out.println("Car");
  }
}

public class Program {
  public static void main(String[] args) {
    Vehicle v1 = new Car();
    Vehicle v2 = new Vehicle();
    Car c = (Car) v1;
    v1.print();
    v2.print();
    c.print();
    ((Car) v2).print();
  }
}
\`\`\``,
    answers: [
      'Car\nVehicle\nCar\nRuntime error',
      'Car\nVehicle\nVehicle\nCar',
      'Car\nVehicle\nCar\nVehicle',
      'Compilation error',
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
class A {
  public int getValue() { return 10; }
}

class B extends A {
  public int getValue() { return 20; }
}

class C extends B {
  public int getValue() { return super.getValue() + 10; }
}

public class Program {
  public static void main(String[] args) {
    A a = new C();
    System.out.println(a.getValue());
  }
}
\`\`\``,
    answers: ['30', '20', '10', 'Compilation error'],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
class Employee {
  protected String name;
  protected int id;

  public Employee(String name, int id) {
    this.name = name;
    this.id = id;
  }

  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Employee emp = (Employee) obj;
    return id == emp.id;
  }

  public String toString() {
    return name + " (" + id + ")";
  }
}

class Manager extends Employee {
  private int departmentId;

  public Manager(String name, int id, int departmentId) {
    super(name, id);
    this.departmentId = departmentId;
  }

  public boolean equals(Object obj) {
    if (!super.equals(obj)) return false;
    Manager m = (Manager) obj;
    return departmentId == m.departmentId;
  }
}

public class Program {
  public static void main(String[] args) {
    Employee e1 = new Employee("John", 101);
    Manager m1 = new Manager("Jane", 102, 201);
    Manager m2 = new Manager("Jane", 102, 202);

    System.out.println(e1.equals(m1));
    System.out.println(m1.equals(m2));
    System.out.println(m1);
  }
}
\`\`\``,
    answers: [
      'false\nfalse\nJane (102)',
      'false\ntrue\nJane (102)',
      'true\nfalse\nJane (102)',
      'true\ntrue\nJane (102)',
    ],
    correctAnswer: 0,
  },
  {
    id: 32,
    question: 'בחרו את המשפט המדויק ביותר העוסק בעיקרון ההכמסה.',
    answers: [
      'לא תמיד נגדיר מתודות set ו-get לכל משתני המחלקה.',
      'נגדיר משתני מחלקה כפרטיים רק במידה ואין צורך לבצע בדיקות תקינות בבנאי.',
      'תמיד נגדיר משתני מחלקה כ-protected למקרה שמחלקה כלשהי תרצה לרשת את המחלקה.',
      'לא ניתן לבצע בדיקות תקינות בבנאי למחלקה פרטית ללא מתודת set ציבורית.',
    ],
    correctAnswer: 0,
  },
  {
    id: 33,
    question: 'בחרו את הטענה המדויקת ביותר העוסקת במילה this ב-Java.',
    answers: [
      'המילה עוזרת כדי לבצע הבחנה בין משתנים מקומיים לבין משתני מחלקה.',
      'משתמשים במילה כדי לבצע shadowing בין משתני מחלקה.',
      'משתמשים במילה בשביל בדיקת תקינות.',
      'אף תשובה אינה נכונה.',
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: 'בחרו את הטענה המדויקת ביותר העוסקת במחלקות מופשטות.',
    answers: [
      'מדובר במחלקות המכילות משתנים ומתודות סטטיות ציבוריות בלבד.',
      'מדובר במחלקות המורישות אך ורק מתודה סטטית אחת.',
      'מדובר במחלקות abstract המחייבות לבנות מחלקות אחרות.',
      'מדובר במחלקות המכילות לפחות מתודה abstract אחת.',
    ],
    correctAnswer: 3,
  },
  {
    id: 35,
    question: `בחרו את קטע הקוד שיש לכתוב במקום XXX בקוד הבא כדי שתתבצע העתקה עמוקה בבנאי העתקה של המחלקה B:
\`\`\`
public class A {
  protected int x,y;
  public A(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

public class B {
  private A[] arr;
  public B(int n) {
    arr = new A[n];
  }
  public B(B b) {
    arr = new A[b.arr.length];
    for (int i=0; i<arr.length; i++) {
      XXX
    }
  }
}
\`\`\``,
    answers: [
      'arr[i] = new A(b.arr[i].x, b.arr[i].y);',
      'לא ניתן לממש העתקה עמוקה בקוד מכיוון שלא קיים בנאי העתקה במחלקה של A.',
      'אף תשובה אינה נכונה.',
      'arr[i] = b.arr[i];',
    ],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: `נתון כי מחלקת Undergraduate יורשת מחלקת Student אשר יורשת מחלקת Person. בהינתן שורות הקוד הבאות:
\`\`\`
Person p = new Person();
Student s = new Student();
Undergraduate ug = new Undergraduate();
\`\`\`
בחרו אילו מהאפשרויות הבאות עוברות קומפילציה?`,
    answers: ['1,2', '2,4', '1,4', '2,3,5'],
    correctAnswer: 2,
  },
  {
    id: 37,
    question: `מה סוג הקשר בין someMeth במחלקות A ו-B?
\`\`\`
Class A {
  protected void someMeth() {
    System.out.println("from class A");
  }
}

Class B extends A {
  protected void someMeth() {
    System.out.println("from class B");
  }
  protected void someMeth(String x) {
    System.out.println("from class B: " + x);
  }
}
\`\`\``,
    answers: ['גם דריסה וגם העמסה.', 'לא דריסה ולא העמסה.', 'רק העמסה.', 'רק דריסה.'],
    correctAnswer: 0,
  },
  {
    id: 38,
    question: `כמה טעויות קומפילציה יש בקוד הבא?
\`\`\`
public class A {
  public static final int ADULT = 18;
  public final void func() {
    System.out.println("Hi from A");
  }
}

public class B extends A {
  private int x,y;
  public void func() {
    super.func();
    System.out.println("Hi from B");
  }
}

public class Program {
  public static void main(String[] args) {
    System.out.println(A.ADULT);
    B b = new B();
    b.x = 10;
    A a = new A();
    ADULT.a = 21;
  }
}
\`\`\``,
    answers: ['3', '1', '2', '4'],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: `מה נקבל כשננסה להריץ את התוכנית הבאה?
\`\`\`
class A {
  int x;
  public A(int x) { this.x = x; }
  public String toString() { return x+\"\"; }
}

import java.util.Arrays;

public class Program {
  public static void main(String[] args) {
    A[] arr = new A[3];
    for (int i=0; i<arr.length; i++) arr[i] = new A(i);
    A[] copyArr = Arrays.copyOf(arr, arr.length);
    arr[0].x = 8;
    System.out.println(Arrays.equals(arr, copyArr));
  }
}
\`\`\``,
    answers: ['True', 'False', 'שגיאת זמן ריצה.', 'שגיאת קומפילציה.'],
    correctAnswer: 0,
  },
  {
    id: 40,
    question: `בחרו את שורת הקוד המתאימה שיש לכתוב במקום XXX כדי לענות על הדרישה ששני בני אדם שווים אם השם שלהם שווה:
\`\`\`
class Person {
  protected String name;
  public Person(String name) { this.name = name; }

  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null) return false;
    if (obj instanceof Person)
      return XXX;
    else
      return false;
  }
}
\`\`\``,
    answers: [
      'name.equals(((Person)obj).name);',
      'name.equals((Person)obj.name);',
      'name==((Person)obj).name;',
      'name==(Person)obj.name;',
    ],
    correctAnswer: 0,
  },
  {
    id: 41,
    question: 'מה יודפס כאשר נריץ את התוכנית?',
    answers: [
      'התוכנית לא תרוץ מכיוון שקיימת שגיאת קומפילציה.',
      'התוכנית תדפיס 21 Super Class.',
      'התוכנית תדפיס Super Class 21.',
      'התוכנית תדפיס 12 Super Class.',
    ],
    correctAnswer: 1,
  },
  {
    id: 42,
    question: 'בחרו את האפשרות המדויקת ביותר העוסקת בדריסת ובהעמסת מתודות.',
    answers: [
      'כל התשובות נכונות.',
      'העמסת מתודות יכולה להתרחש גם באותה מחלקה וגם בין מחלקות שונות.',
      'העמסת מתודה כרוכה ביצירת מתודות רבות עם אותו שם אך עם פרמטרים שונים, בעוד שדריסת מתודה כרוכה בשימוש שונה למתודה שעוברת בירושה.',
      'בהעמסת מתודות סוג טיפוס ההחזרה יכול להיות שונה, ובדריסת פונקציה לא.',
    ],
    correctAnswer: 0,
  },
  {
    id: 43,
    question: 'האם subclass יכול שיהיה לו יותר מ-superclass אחד?',
    answers: [
      'לא, ל-subclass יכול להיות לכל היותר רק superclass אחד.',
      'כן, subclass יכול שיהיה לו מספר superclass-ים.',
      'רק אם ה-superclass-ים בעלי אותו שם.',
      'רק אם ה-subclass מוגדר כ-final.',
    ],
    correctAnswer: 0,
  },
  {
    id: 44,
    question:
      'האם מחלקת הבן subclass היורשת ממחלקת האב superclass, יכולה לגשת למתודות ומשתני מחלקה ממחלקת האב במידה והם בהכרזת protected?',
    answers: [
      'כן, בלי קשר לחבילה שבה הם נמצאים.',
      'רק אם ה-subclass מסומן כ-"final".',
      'לא, הרשאת protected לא מזמן לגישה מה-subclass.',
      'כן, כל עוד הם באותה החבילה (package).',
    ],
    correctAnswer: 0,
  },
  {
    id: 45,
    question: 'מה המטרה של המילה final בהורשה ב-java?',
    answers: [
      'לציין שלא ניתן לרשת את המחלקה.',
      'להסתיר מתודה במחלקת האב (superclass).',
      'לציין שמתודה יכולה לרשת רק פעם אחת.',
      'כל התשובות הן נכונות.',
    ],
    correctAnswer: 3,
  },
  {
    id: 46,
    question: 'מה נקבל כשנריץ את התוכנית הבאה?',
    answers: ['ClassBClassA.', 'ClassAClassB.', 'ClassA.', 'Compilation error.'],
    correctAnswer: 0,
  },
  {
    id: 47,
    question: 'מה נקבל כשננסה להריץ את התוכנית הבאה?',
    answers: ['BaseExamDerived.', 'ExamDerived.', 'ExamBaseDerived.', 'ExamDerivedBase.'],
    correctAnswer: 0,
  },
  {
    id: 48,
    question: 'בחרו את המשפט המדויק ביותר העוסק בעיקרון ההכמסה(Encapsulation).',
    answers: [
      'ככלל, נעדיף להגדיר משתני מחלקה כפרטיים ולהוסיף עבורם מתודות get ו-set לפי הצורך.',
      'נגדיר משתני מחלקה כפרטיים רק במידה ויש צורך לבצע בדיקת תקינות בבנאי.',
      'תמיד נגדיר משתני מחלקה כפרטיים, גם אם הם קבועים סטטיים ומכילים ערכים ידועים לשאר המחלקות.',
      'לכל משתנה מחלקה פרטי שנרצה לבצע בדיקת תקינות בבנאי, נמחיש בהכרח מתודת set ציבורית.',
    ],
    correctAnswer: 0,
  },
  {
    id: 49,
    question: 'מה נקבל כשננסה להריץ את התוכנית הבאה?',
    answers: [
      'קיימת שגיאת זמן ריצה.',
      'קיימת שגיאת קומפילציה.',
      'התוכנית תדפיס true.',
      'התוכנית תדפיס false.',
    ],
    correctAnswer: 0,
  },
  {
    id: 50,
    question: 'מהי האפשרות המדויקת ביותר שתודפס בסיום ריצת התוכנית?',
    answers: ['44.', '22.', '42.', '24.'],
    correctAnswer: 0,
  },
  {
    id: 51,
    question: `בהינתן היררכיות המחלקות הבאה, איזה קטע קוד מבין האפשרויות הבאות שיוכתב בפונקציה הראשית לא יגרום לשגיאת קומפילציה?
\`\`\`
public abstract class A{
  protected int num;
  public A(){ num = 1; }
}
public class B extends A { }
public class C extends A { }
public class D extends C { }

public class Program {
  public static void main(String[] args){
    // insert here
  }
}
\`\`\``,
    answers: ['C c = new D();', 'A a = new A();', 'C c = new B();', 'B b = new D();'],
    correctAnswer: 0,
  },
  {
    id: 52,
    question: `בהינתן הקוד הבא, בחרו את האפשרות המדויקת ביותר. (המספרים מתייחסים למספרי השורות בקוד)
\`\`\`
public abstract class A{
protected int num;
public A(){ num = 1; }
}
public class B extends A{
public B(){ num = 8; }
}
public abstract class C extends A { }
public class D extends C { }
public class Program {
public static void main(String[] args){
A[] a = new A[3];      
a[1] = new D();         
a[2] = new C();         
for (A var : a) {       
System.out.println(var); 
}
}
}
\`\`\``,
    answers: [
      'קיימת שגיאת קומפילציה בשורה 21.',
      'קיימת שגיאת קומפילציה בשורה 18.',
      'קיימת שגיאת קומפילציה בשורה 7.',
      'קיימת שגיאת זמן ריצה בשורה 24.',
    ],
    correctAnswer: 0,
  },
  {
    id: 53,
    question: `האם הוספת אחת משורות הקוד הבאות ב-main במקום שורת ההערה, תעזור לקוד לעבור קומפילציה?
\`\`\`
class A{
  private String str;
  A(String str){ this.str = str; }
}
class B extends A{
  B() { }            
  B(String s){ super(s); }
}
public class Program{
  public static void main(String[] args){
  }
}
\`\`\``,
    answers: [
      'לא, אף תשובה אינה נכונה.',
      'A a = new B();',
      'B b = new B(5);',
      'A a = new A("my String");',
    ],
    correctAnswer: 0,
  },
  {
    id: 54,
    question: `בחרו את קטע הקוד שיש לכתוב במקום XXX כך שהתוכנית תדפיס פעמיים true.
\`\`\`
public class A{
  private String name;
  public A(String name){ this.name = name; }

  public boolean equals(Object obj){
    if (XXX)
      return name.equals(((A) obj).name);
    return false;
  }
}
public class B extends A{
  public B(String name){ super(name); }
}
public class Program{
  public static void main(String[] args){
    System.out.println((new A("Alice")).equals(new B("Alice")));
    System.out.println((new A("Alice")).equals(new A("Alice")));
  }
}
\`\`\``,
    answers: [
      'obj instanceof A',
      'obj instanceof B',
      'getClass() == obj.getClass()',
      'this == obj',
    ],
    correctAnswer: 0,
  },
  {
    id: 55,
    question: `בחרו את קטע הקוד שיש לכתוב במקום XXX בקוד הבא כדי שתתבצע העתקה עמוקה בבנאי ההעתקה של המחלקה B.
\`\`\`
public class A{
  private int x, y;
  public A(int x, int y){ this.x = x; this.y = y; }
}
public class B{
  private A[] arr;
  public B(int n){ arr = new A[n]; }

  public B(B b){
    arr = new A[b.arr.length];
    for (int i = 0; i < arr.length; i++){
      XXX
    }
  }
}
\`\`\``,
    answers: [
      'לא ניתן לממש העתקה עמוקה בקוד מכיוון שלא ניתן לגשת לערכי משתני המחלקה של A.',
      'אין הבדל בין העתקה עמוקה להעתקה רדודה בקוד מכיוון שמשתני המחלקה ב-A הינם פרימיטיביים.',
      'arr[i] = new A(b.arr[i].x, b.arr[i].y);',
      'arr[i] = b.arr[i];',
    ],
    correctAnswer: 0,
  },
  {
    id: 56,
    question: `בהינתן הקוד הבא, בחרו את האפשרות המדויקת ביותר:
\`\`\`
public class A{
  public static int myVar;
  public A(){ myVar++; }
}
public class Program{
  public static void main(String[] args){
    A a1 = new A();
    A a2 = new A();
    A a3 = new A();
    System.out.println(a1.myVar);
    A.myVar = 5;
  }
}
\`\`\``,
    answers: [
      'התוכנית תדפיס 3.',
      'התוכנית תדפיס 1.',
      'קיימת טעות קומפילציה.',
      'קיימים 3 משתני מחלקה בשם myVar בזיכרון.',
    ],
    correctAnswer: 0,
  },
  {
    id: 57,
    question: `בהינתן הקוד הבא, בחרו את שורת הקוד שלא יוצרת שגיאת קומפילציה. (המספרים מתייחסים לשורות בצד שמאל)
\`\`\`
public class A{
private int num;
public A(int num){ this.num = num; }
public int toString(){ return num; } 
}
public class B{
private abstract int func();         
}
public class Program{
public static void main(String[] args){
    A a1 = new A(1,2);                 
    A a2 = new A();                    
    A a3 = new A(3);                   
  }
}
\`\`\``,
    answers: ['שורה 18.', 'שורה 16.', 'שורה 11.', 'שורה 7.'],
    correctAnswer: 0,
  },
  {
    id: 58,
    question: `בהינתן הקוד הבא, בחרו את האפשרות המדויקת ביותר של תוצאת ההדפסה לאחר ריצת התוכנית:
\`\`\`
public class Parent{
  String name = "parent";
  String message(){ return "from parent"; }
}
public class Child extends Parent{
  String name = "child";
  String message(){ return "from child"; }
}
public class Program{
  public static void main(String[] args){
    Parent p = new Child();
    System.out.println(p.name + " " + p.message());
  }
}
\`\`\``,
    answers: ['parent from child', 'parent from parent', 'child from child', 'child from parent'],
    correctAnswer: 0,
  },
  {
    id: 59,
    question: 'בחרו את הטענה הנכונה ביותר בהתאמה לעקרונות שלמדנו בשיעור.',
    answers: [
      'כאשר נדרוס פונקציה, אנו נקרא למתודה המקורית אצל האב במידת האפשר כדי למנוע מצב של שכפול קוד.',
      'מתודה סטטית יכולה לגשת למשתני מחלקה שאינם סטטיים.',
      'ניתן לבצע העמסת פונקציות באמצעות שינוי טיפוס הערך המוחזר בלבד.',
      'כל משתנה מחלקה final נגדיר תמיד גם כ static וגם כ public.',
    ],
    correctAnswer: 0,
  },
  {
    id: 60,
    question: `כמה טעויות קומפילציה יש בקוד הבא?
\`\`\`
public class A{
  public static final int ADULT = 18;
  public final void func(){ System.out.println("Hi from A"); }
}
public class B extends A{
  private int x,y;
  public void func(){ super.func(); System.out.println("Hi from B"); }
}
public class Program{
  public static void main(String[] args){
    System.out.println(A.ADULT);
    B b = new B();
    b.x = 10;      
    A a = new A();
    a.ADULT = 21;       
  }
}
\`\`\``,
    answers: ['3', '1', '2', '4'],
    correctAnswer: 0,
  },

  // new questions

  {
    id: 61,
    question: `בהינתן התוכנית הבאה, מה יודפס? (כל מחלקה בקובץ נפרד)
\`\`\`
public class Super {
  public static final String MSG = "Hello";
  public Super() { System.out.print("S"); }
}
public class Sub extends Super {
  public Sub() { System.out.print("U"); }
}
public class Program {
  public static void main(String[] a) {
    Sub x = new Sub();
    System.out.print(Super.MSG + "!");
  }
}
\`\`\``,
    answers: ['SUHello!', 'USHello!', 'התוכנית לא תתקמפל.', 'Hello!SU'],
    correctAnswer: 0,
  },
  {
    id: 62,
    question: 'מי מה טענות הבאות אינה נכונה לגבי final?',
    answers: [
      'ניתן להכריז על מתודה כ-final כדי למנוע דריסה.',
      'מחלקה מסומנת final לא יכולה להיות יורשת של מחלקה אחרת.',
      'שדה final חייב לקבל ערך בדיוק פעם אחת.',
      'מחלקה final אינה יכולה להיות בסיס לירושה.',
    ],
    correctAnswer: 1,
  },
  {
    id: 63,
    question: `מה התיקון הנכון למימוש equals הבא?
\`\`\`
class P {
  private int id = 3;
  public boolean equals(Object o) {
    P p = (P)o;
    return id == p.id;
  }
}
\`\`\``,
    answers: [
      'להוסיף בדיקות: if (this==o) return true; if (!(o instanceof P)) return false;',
      'להחליף החתימה ל-boolean equals(P o).',
      'להפוך את id ל-public.',
      'להחזיר תמיד false אם o==null, בלי בדיקות נוספות.',
    ],
    correctAnswer: 0,
  },
  {
    id: 64,
    question: `מה יודפס?
\`\`\`
class A {
  private String s;
  A(String s){ this.s = s; }
  public boolean equals(Object o){ return o instanceof A && s.equals(((A)o).s); }
}
class B extends A { B(String s){ super(s); } }
public class Program {
  public static void main(String[] a){
    System.out.println(new A("x").equals(new B("x")));
  }
}
\`\`\``,
    answers: ['true', 'false', 'שגיאת זמן ריצה', 'שגיאת קומפילציה'],
    correctAnswer: 0,
  },
  {
    id: 65,
    question: 'האם ניתן מהמחלקה היורשת לגשת למתודת אב שהיא private?',
    answers: [
      'לא, לעולם אי אפשר לגשת ל-private מחוץ למחלקה המגדירה.',
      'כן, אם המתודה סטטית.',
      'כן, אם היורשת באותה חבילה.',
      'כן, אם נשתמש ב-super.',
    ],
    correctAnswer: 0,
  },
  {
    id: 66,
    question: `מה יודפס?
\`\`\`
class A { void f(A a){ System.out.println("A"); } }
class B extends A { void f(B b){ System.out.println("B"); } }
public class Program {
  public static void main(String[] a){
    A x = new B();
    B y = new B();
    x.f(y);
  }
}
\`\`\``,
    answers: ['A', 'B', 'שגיאת קומפילציה', 'שגיאת זמן ריצה'],
    correctAnswer: 0,
  },
  {
    id: 67,
    question: 'איזו טענה נכונה לגבי בנאים?',
    answers: [
      'אם לא הוגדר בנאי – קומפיילר ייצר בנאי ברירת מחדל ללא פרמטרים.',
      'שם הבנאי אינו חייב להיות כשם המחלקה.',
      'בנאי יכול להחזיר ערך int.',
      'בנאי יכול להיקרא ישירות כמו מתודה רגילה.',
    ],
    correctAnswer: 0,
  },
  {
    id: 68,
    question: 'למה משמשת המילה this?',
    answers: [
      'להפניה לאובייקט הנוכחי ולהבחנה בין שדות לפרמטרים.',
      'לקריאה למתודת אב.',
      'ליצירת מופע חדש.',
      'להגדרת משתנה סטטי.',
    ],
    correctAnswer: 0,
  },
  {
    id: 69,
    question: `מה התוצאה?
\`\`\`
class Base { public final void show(){ System.out.println("Base"); } }
class Der extends Base { public void show(int x){ System.out.println("Der"); } }
public class Program { public static void main(String[] a){ new Der().show(); } }
\`\`\``,
    answers: ['Base', 'Der', 'שגיאת קומפילציה', 'שגיאת זמן ריצה'],
    correctAnswer: 0,
  },
  {
    id: 70,
    question: `בהינתן: Graduate יורש Student, ו-Student יורש Person. מה עובר קומפילציה?
\`\`\`
Person p = new Person();
Student s = new Student();
Graduate g = new Graduate();
\`\`\``,
    answers: ['p = g;  // כן', 'g = s;  // כן', 's = p;  // כן', 'g = new Person(); // כן'],
    correctAnswer: 0,
  },
  {
    id: 71,
    question: `איזה קשר מתקיים?
\`\`\`
class A { void m(){} }
class B extends A { void m(){} void m(int x){} }
\`\`\``,
    answers: ['גם דריסה וגם העמסה', 'אין קשר', 'רק העמסה', 'רק דריסה'],
    correctAnswer: 0,
  },
  {
    id: 72,
    question: `מה יודפס?
\`\`\`
class X { X(){ System.out.print("X"); } }
class Y extends X { Y(){ System.out.print("Y"); } }
class Z extends Y { Z(){ System.out.print("Z"); } }
public class Program{ public static void main(String[] a){ new Z(); } }
\`\`\``,
    answers: ['XYZ', 'ZYX', 'Z', 'X'],
    correctAnswer: 0,
  },
  {
    id: 73,
    question: `מה יקרה?
\`\`\`
class C {
  private int r,i;
  C(int r,int i){ this.r=r; this.i=i; }
  C(C o){ this.r=o.r; this.i=o.i; }
  public String toString(){ return r+"+"+i+"i"; }
}
public class Program{
  public static void main(String[] a){
    C c1 = new C(1,2);
    C c2 = new C(c1);
    System.out.println(c2);
  }
}
\`\`\``,
    answers: ['1+2i', '0+0i', 'שגיאת קומפילציה', 'שגיאת זמן ריצה'],
    correctAnswer: 0,
  },
  {
    id: 74,
    question: `מה יודפס?
\`\`\`
class P { String n="p"; String msg(){ return "P"; } }
class C extends P { String n="c"; String msg(){ return "C"; } }
public class Program{
  public static void main(String[] a){
    P x = new C();
    System.out.println(x.n+" "+x.msg());
  }
}
\`\`\``,
    answers: ['p C', 'c C', 'p P', 'c P'],
    correctAnswer: 0,
  },
  {
    id: 75,
    question: `מה יודפס?
\`\`\`
class A{ String name="parent"; String m(){ return "from "+name; } }
class B extends A{
  static String name="child";
  String m(){ return "from "+this.name; }
}
public class Program{
  public static void main(String[] a){
    A ref = new B();
    System.out.println(ref.name+" "+ref.m());
  }
}
\`\`\``,
    answers: ['parent from child', 'child from child', 'parent from parent', 'child from parent'],
    correctAnswer: 0,
  },
  {
    id: 76,
    question: `לגבי הקוד הבא:
\`\`\`
class A{ public static int c; A(){ c++; } }
public class Program{
  public static void main(String[] a){
    new A(); new A();
    System.out.println(A.c);
  }
}
\`\`\``,
    answers: ['2', '1', 'שגיאת קומפילציה', '3'],
    correctAnswer: 0,
  },
  {
    id: 77,
    question: `בחרו את השורה התקינה היחידה:
\`\`\`
class A{ private int n; A(int n){this.n=n;} }
class B{ private abstract int f(); }
public class Program{
  public static void main(String[] a){
    A x = new A();
    A y = new A(5);
    private int z = 3;
    abstract void g();
  }
}
\`\`\``,
    answers: ['2', '1', '3', '4'],
    correctAnswer: 0,
  },
  {
    id: 78,
    question: `איזו טענה נכונה?
\`\`\`
class A{ String n="a"; String m(){return "A";} }
class B extends A{ String n="b"; String m(){return "B";} }
\`\`\``,
    answers: [
      'גישה לשדה דרך רפרנס מסוג A משתמשת ב-n של A, בעוד קריאה למתודה דינמית תשתמש במימוש של B.',
      'גם שדה וגם מתודה נבחרים דינמית בזמן ריצה.',
      'גם שדה וגם מתודה נבחרים סטטית בזמן קומפילציה.',
      'קריאה למתודה במצב זה תיקח את A תמיד.',
    ],
    correctAnswer: 0,
  },
  {
    id: 79,
    question: 'בחרו את הטענה הנכונה ביותר:',
    answers: [
      'בעת דריסה מומלץ לקרוא ל-super כדי להימנע משכפול קוד במידת הצורך.',
      'מתודה סטטית יכולה לגשת לשדות מופע ישירות.',
      'העמסה חוקית גם כאשר רק טיפוס ההחזרה שונה.',
      'שדה final חייב להיות גם static וגם public.',
    ],
    correctAnswer: 0,
  },
  {
    id: 80,
    question: `כמה שגיאות קומפילציה?
\`\`\`
class A{
  public static final int K = 5;
  public final void f(){ System.out.println("A"); }
}
class B extends A{
  private int t;
  public void f(){ System.out.println("B"); }
}
public class Program{
  public static void main(String[] a){
    System.out.println(A.K);
    B b = new B();
    b.t = 7;
    A.K = 9;
  }
}
\`\`\``,
    answers: ['3', '2', '1', '0'],
    correctAnswer: 0,
  },
  {
    id: 81,
    question: `מה יודפס? (כל מחלקה בקובץ נפרד)
\`\`\`
class A { A(){ System.out.print("A"); } }
class B extends A { B(){ System.out.print("B"); } }
class C extends B { C(){ System.out.print("C"); } }
public class Program { public static void main(String[] a){ new C(); } }
\`\`\``,
    answers: ['ABC', 'CBA', 'ACB', 'BAC'],
    correctAnswer: 0,
  },
  {
    id: 82,
    question: `איזו שורה לא תגרום לשגיאת קומפילציה?
\`\`\`
abstract class Shape { abstract double area(); }
class Circle extends Shape { double area(){ return 1; } }
public class Program {
  public static void main(String[] a){
    Shape s = new Shape();
    Circle c = new Shape();
    Shape s = new Circle();
    abstract Shape x;
  }
}
\`\`\``,
    answers: ['3', '1', '2', '4'],
    correctAnswer: 0,
  },
  {
    id: 83,
    question: `מה יודפס?
\`\`\`
class Printer{
  void print(Object o){ System.out.print("obj"); }
  void print(String s){ System.out.print("str"); }
}
public class Program{
  public static void main(String[] a){
    Object x = "hello";
    new Printer().print(x);
  }
}
\`\`\``,
    answers: ['obj', 'str', 'שגיאת קומפילציה', 'שגיאת זמן ריצה'],
    correctAnswer: 0,
  },
  {
    id: 84,
    question: `בהינתן שמימוש equals במחלקה A משתמש ב-getClass(), ו-B יורשת מ-A ולא דורסת:
מה יודפס?
\`\`\`
System.out.print(new A("t").equals(new B("t")));
System.out.print(new B("t").equals(new A("t")));
\`\`\``,
    answers: ['falsefalse', 'truetrue', 'truefalse', 'falsetrue'],
    correctAnswer: 0,
  },
  {
    id: 85,
    question: `מה יודפס?
\`\`\`
class A { static void f(){ System.out.print("A"); } }
class B extends A { static void f(){ System.out.print("B"); } }
public class Program{
  public static void main(String[] a){
    A ref = new B();
    ref.f();
  }
}
\`\`\``,
    answers: ['A', 'B', 'AB', 'שגיאת קומפילציה'],
    correctAnswer: 0,
  },
  {
    id: 86,
    question: `איזו טענה נכונה לגבי שדה final?
\`\`\`
class Id {
  private final int value;
  Id(int v){ value = v; }
  void set(int v){ /* ... */ }
}
\`\`\``,
    answers: [
      'ניתן לאתחל את value פעם אחת בלבד – בדרך כלל בבנאי.',
      'ניתן לשנות את value בכל מתודה מאותה מחלקה.',
      'final אומר שהאובייקט כולו לא ניתן לשינוי (immutable) תמיד.',
      'אסור לאתחל שדה final בתוך בנאי.',
    ],
    correctAnswer: 0,
  },
  {
    id: 87,
    question: `מה תוצאת הריצה?
\`\`\`
class Animal { }
class Dog extends Animal { }
public class Program{
  public static void main(String[] a){
    Animal x = new Animal();
    Dog d = (Dog)x;
    System.out.println("OK");
  }
}
\`\`\``,
    answers: [
      'שגיאת זמן ריצה.',
      'הודפס OK.',
      'שגיאת קומפילציה.',
      'לא יודפס דבר אך אין חריגה.',
    ],
    correctAnswer: 0,
  },
  {
    id: 88,
    question: `מה יודפס?
\`\`\`
interface I { void run(); }
abstract class Base implements I { }
class Impl extends Base { public void run(){ System.out.print("go"); } }
public class Program { public static void main(String[] a){ I i = new Impl(); i.run(); } }
\`\`\``,
    answers: ['go', 'שגיאת קומפילציה', 'שגיאת זמן ריצה', 'אין הדפסה'],
    correctAnswer: 0,
  },
  {
    id: 89,
    question: `מה יקרה בזמן ריצה?
\`\`\`
class A { }
class B extends A { }
public class Program{
  public static void main(String[] a){
    A[] arr = new B[2];
    arr[0] = new A();
  }
}
\`\`\``,
    answers: [
      'ArrayStoreException ייזרק בזמן ריצה.',
      'שגיאת קומפילציה.',
      'לא קורה דבר – חוקי לגמרי.',
      'NullPointerException ייזרק.',
    ],
    correctAnswer: 0,
  },
  {
    id: 90,
    question: `איזו קביעה נכונה?
\`\`\`
class Parent{ Parent(int x){} }
class Child extends Parent{
  Child(){ /* ... */ }
}
\`\`\``,
    answers: [
      'שגיאת קומפילציה כי חייבים לקרוא ל-super(int).',
      'הקוד יתקמפל – תמיד נקרא אוטומטית super().',
      'השורה Child() תיצור בנאי ברירת מחדל להורה.',
      'הקוד ירוץ אבל ידפיס אזהרה.',
    ],
    correctAnswer: 0,
  },
  {
    id: 91,
    question: `מה יודפס?
\`\`\`
class A { public String toString(){ return "A"; } }
class B extends A { public String toString(){ return super.toString()+"B"; } }
public class Program{ public static void main(String[] a){ System.out.print(new B()); } }
\`\`\``,
    answers: ['AB', 'BA', 'B', 'A'],
    correctAnswer: 0,
  },
  {
    id: 92,
    question: 'איזו טענה נכונה לגבי protected?',
    answers: [
      'מחלקת בן מחוץ לחבילה עדיין יכולה לגשת לשדות/מתודות protected של אביה.',
      'רק מחלקות באותה חבילה יכולות לגשת לשדות protected.',
      'protected שקול ל-private.',
      'אין הבדל בין protected ל-public.',
    ],
    correctAnswer: 0,
  },
  {
    id: 93,
    question: `מה יודפס?
\`\`\`
class Node{ int v; Node(int v){this.v=v;} }

import java.util.Arrays;

public class Program{
  public static void main(String[] a){
    Node[] arr = { new Node(1) };
    Node[] copy = Arrays.copyOf(arr, 1);
    System.out.println(arr[0] == copy[0]);
  }
}
\`\`\``,
    answers: ['true', 'false', 'שגיאת זמן ריצה', 'שגיאת קומפילציה'],
    correctAnswer: 0,
  },
  {
    id: 94,
    question: `איזו קביעה נכונה?
\`\`\`
class A { A make(){ return this; } }
class B extends A { B make(){ return this; } }
\`\`\``,
    answers: [
      'הקוד חוקי – החזרה קוֹוַרְיָאנְטִית מותרת.',
      'שגיאת קומפילציה – חייבים להחזיר בדיוק A.',
      'שגיאת זמן ריצה – פולימורפיזם אסור בהחזרות.',
      'רק אם B מסומן final זה חוקי.',
    ],
    correctAnswer: 0,
  },
  {
    id: 95,
    question: `סדר ההדפסות?
\`\`\`
class A{ { System.out.print("I"); } A(){ System.out.print("C"); } }
class B extends A{ { System.out.print("i"); } B(){ System.out.print("c"); } }
public class Program{ public static void main(String[] a){ new B(); } }
\`\`\``,
    answers: ['ICic', 'CIci', 'IiCc', 'icIC'],
    correctAnswer: 0,
  },
  {
    id: 96,
    question: `איזו שורה לא חוקית?
\`\`\`
import java.util.*;
public class Program{
  public static void main(String[] a){
    List<Number> x = new ArrayList<Number>();
    List<Integer> y = new ArrayList<Integer>();
    x = y;
    y = (List<Integer>) x;
  }
}
\`\`\``,
    answers: [
      'C לא חוקית.',
      'A לא חוקית.',
      'B לא חוקית.',
      'D תקינה לחלוטין ללא אזהרות.',
    ],
    correctAnswer: 0,
  },
  {
    id: 97,
    question: `מה יודפס?
\`\`\`
class T{
  void m(long x){ System.out.print("long"); }
  void m(Integer x){ System.out.print("Integer"); }
}
public class Program{ public static void main(String[] a){ new T().m(5); } }
\`\`\``,
    answers: ['long', 'Integer', 'שגיאת קומפילציה', 'שגיאת זמן ריצה'],
    correctAnswer: 0,
  },
  {
    id: 98,
    question: `מה יודפס?
\`\`\`
class A{
  A(){ this("X"); System.out.print("1"); }
  A(String s){ System.out.print(s); }
}
public class Program{ public static void main(String[] a){ new A(); } }
\`\`\``,
    answers: ['X1', '1X', 'שגיאת קומפילציה', 'אין הדפסה'],
    correctAnswer: 0,
  },
  {
    id: 99,
    question: `מה יודפס?
\`\`\`
class Init{
  static { System.out.print("S"); }
  { System.out.print("I"); }
  Init(){ System.out.print("C"); }
}
public class Program{ public static void main(String[] a){ new Init(); new Init(); } }
\`\`\``,
    answers: ['SICIC', 'SSICIC', 'I C I C', 'SC'],
    correctAnswer: 0,
  },
  {
    id: 100,
    question: 'איזה ממחלקות עליונות (top-level) ניתן להגדיר ב-Java?',
    answers: [
      'public או ללא מודיפייר (package-private) בלבד.',
      'private, protected או public.',
      'רק final.',
      'abstract אסור ל-top-level.',
    ],
    correctAnswer: 0,
  },
];
