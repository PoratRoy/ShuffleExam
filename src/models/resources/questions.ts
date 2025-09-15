import { Question } from '../types/exam';

export const Questions: Question[] = [
  {
    id: 1,
    question:
      'מה יקרה כאשר נריץ את הקוד הבא?\n```java\nclass Parent {\n    public void show() {\n        System.out.println("Parent");\n    }\n}\n\nclass Child extends Parent {\n    public void show() {\n        System.out.println("Child");\n    }\n}\n\nPublic class Main {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        obj.show();\n    }\n}\n```',
    answers: ["יודפס 'Parent'", "יודפס 'Child'", 'שגיאה בזמן קומפיילציה', 'שגיאה בזמן ריצה'],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 2,
    question:
      'איזה מן העקרונות הבאים של OOP מתאר את היכולת של מחלקה אחת לרשת מאפיינים ושיטות ממחלקה אחרת?',
    answers: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'],
    correctAnswer: 2,
    difficulty: 1,
  },
  {
    id: 3,
    question:
      'מה התוצאה של הקוד הבא?\n```java\nclass Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}\n\nCalculator calc = new Calculator();\nSystem.out.println(calc.add(5, 3));\n```',
    answers: [
      'שגיאה - לא ניתן להגדיר מספר מתודות עם אותו שם',
      'יודפס 8',
      'יודפס 8.0',
      'שגיאה בזמן ריצה',
    ],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 4,
    question: 'איזה מילת מפתח נדרשת כדי ליצור מחלקה שלא ניתן לרשת ממנה (inherit)?',
    answers: ['static', 'abstract', 'final', 'private'],
    correctAnswer: 2,
    difficulty: 1,
  },
  {
    id: 5,
    question:
      'מה יקרה כאשר ננסה להריץ את הקוד הבא?\n```java\nabstract class Animal {\n    abstract void makeSound();\n    \n    public void sleep() {\n        System.out.println("Sleeping...");\n    }\n}\n\nAnimal a = new Animal();\na.sleep();\n```',
    answers: [
      "יודפס 'Sleeping...'",
      'שגיאת קומפיילציה - לא ניתן ליצור instance של abstract class',
      'יודפס שום דבר',
      'שגיאה בזמן ריצה',
    ],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 6,
    question: 'מה ההבדל העיקרי בין interface ל-abstract class ב-Java?',
    answers: [
      'interface יכול להכיל רק מתודות abstract, abstract class יכול להכיל גם מתודות רגילות',
      'abstract class יכול להכיל רק מתודות abstract, interface יכול להכיל גם מתודות רגילות',
      'אין הבדל ביניהם',
      'interface נמצא רק ב-Java 8 ומעלה',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 7,
    question:
      'מה התוצאה של הקוד הבא?\n```java\nclass Test {\n    private int x = 10;\n    \n    public void printX() {\n        System.out.println(x);\n    }\n}\n\nTest t = new Test();\nSystem.out.println(t.x);\n```',
    answers: ['יודפס 10', 'יודפס 0', 'שגיאת קומפיילציה - השדה x הוא private', 'שגיאה בזמן ריצה'],
    correctAnswer: 2,
    difficulty: 2,
  },
  {
    id: 8,
    question: 'איזה מהמושגים הבאים מתאר את העיקרון של הסתרת הפרטי יישום ופתיחת ממשק ציבורי בלבד?',
    answers: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Composition'],
    correctAnswer: 2,
    difficulty: 1,
  },
  {
    id: 9,
    question:
      'מה יקרה כאשר נריץ את הקוד הבא?\n```java\nclass Parent {\n    public Parent() {\n        System.out.println("Parent Constructor");\n    }\n}\n\nclass Child extends Parent {\n    public Child() {\n        System.out.println("Child Constructor");\n    }\n}\n\nChild c = new Child();\n```',
    answers: [
      "יודפס רק 'Child Constructor'",
      "יודפס רק 'Parent Constructor'",
      "יודפס 'Parent Constructor' ואחר כך 'Child Constructor'",
      "יודפס 'Child Constructor' ואחר כך 'Parent Constructor'",
    ],
    correctAnswer: 2,
    difficulty: 2,
  },
  {
    id: 10,
    question: 'איזה מהדברים הבאים נכון לגבי מתודות static ב-Java?',
    answers: [
      'ניתן לקרוא להן רק דרך instance של המחלקה',
      'הן יכולות לגשת לשדות non-static של המחלקה ישירות',
      'ניתן לקרוא להן ישירות דרך שם המחלקה בלי ליצור instance',
      'הן נוצרות מחדש לכל instance של המחלקה',
    ],
    correctAnswer: 2,
    difficulty: 2,
  },
  {
    id: 11,
    question:
      'מה יקרה כאשר נריץ את הקוד הבא?\n```java\ninterface Drawable {\n    void draw();\n}\n\ninterface Colorable {\n    void setColor(String color);\n}\n\nclass Circle implements Drawable, Colorable {\n    public void draw() {\n        System.out.println("Drawing circle");\n    }\n    \n    public void setColor(String color) {\n        System.out.println("Setting color: " + color);\n    }\n}\n\nCircle c = new Circle();\nc.draw();\n```',
    answers: [
      'שגיאה - מחלקה לא יכולה לממש יותר מ-interface אחד',
      "יודפס 'Drawing circle'",
      'שגיאת קומפיילציה - חסרה מתודה',
      'שגיאה בזמן ריצה',
    ],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 12,
    question: 'איזה מהמשפטים הבאים נכון לגבי constructor ב-Java?',
    answers: [
      'Constructor חייב להחזיר ערך',
      'Constructor יכול להיות static',
      'Constructor לא יכול להיות private',
      'Constructor לא יכול להחזיר ערך ולא צריך לציין return type',
    ],
    correctAnswer: 3,
    difficulty: 2,
  },
  {
    id: 13,
    question:
      'מה התוצאה של הקוד הבא?\n```java\nclass Animal {\n    protected String name = "Animal";\n    \n    protected void makeSound() {\n        System.out.println(name + " makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    protected String name = "Dog";\n    \n    protected void makeSound() {\n        super.makeSound();\n        System.out.println(name + " barks");\n    }\n}\n\nDog d = new Dog();\nd.makeSound();\n```',
    answers: [
      "יודפס: 'Animal makes a sound' ו'Dog barks'",
      "יודפס: 'Dog makes a sound' ו'Dog barks'",
      "יודפס רק: 'Dog barks'",
      'שגיאה בזמן קומפיילציה',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 14,
    question: 'מה ההבדל בין method overriding ל-method overloading?',
    answers: [
      'Overriding - אותו שם מתודה עם פרמטרים שונים, Overloading - אותו שם עם אותם פרמטרים במחלקת בת',
      'Overloading - אותו שם מתודה עם פרמטרים שונים, Overriding - אותו שם עם אותם פרמטרים במחלקת בת',
      'אין הבדל ביניהם',
      'Overriding קורה רק ב-interfaces, Overloading רק ב-classes',
    ],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 15,
    question:
      'מה יקרה כאשר נריץ את הקוד הבא?\n```java\nclass Test {\n    public static void print(Object obj) {\n        System.out.println("Object version");\n    }\n    \n    public static void print(String str) {\n        System.out.println("String version");\n    }\n}\n\nTest.print(null);\n```',
    answers: [
      "יודפס 'Object version'",
      "יודפס 'String version'",
      'שגיאה - ambiguous method call',
      'יודפס null',
    ],
    correctAnswer: 1,
    difficulty: 3,
  },
  {
    id: 16,
    question:
      'איזה access modifier מאפשר גישה לשדה או מתודה רק ממחלקות בעלות קשר inheritance או מאותו package?',
    answers: ['private', 'public', 'protected', 'default (package-private)'],
    correctAnswer: 2,
    difficulty: 2,
  },
  {
    id: 17,
    question:
      'מה התוצאה של הקוד הבא?\n```java\nclass Singleton {\n    private static Singleton instance;\n    \n    private Singleton() {}\n    \n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n\nSingleton s1 = Singleton.getInstance();\nSingleton s2 = Singleton.getInstance();\nSystem.out.println(s1 == s2);\n```',
    answers: ['יודפס false', 'יודפס true', 'שגיאת קומפיילציה', 'שגיאה בזמן ריצה'],
    correctAnswer: 1,
    difficulty: 3,
  },
  {
    id: 18,
    question: 'איזה מהמשפטים הבאים נכון לגבי inner classes ב-Java?',
    answers: [
      'Inner class לא יכולה לגשת לשדות private של outer class',
      'Inner class יכולה להיות static',
      'Inner class חייבת להיות public',
      'אי אפשר ליצור instance של inner class מחוץ ל-outer class',
    ],
    correctAnswer: 1,
    difficulty: 3,
  },
  {
    id: 19,
    question:
      'מה יקרה כאשר נריץ את הקוד הבא?\n```java\nclass Parent {\n    public final void display() {\n        System.out.println("Parent display");\n    }\n}\n\nclass Child extends Parent {\n    public void display() {\n        System.out.println("Child display");\n    }\n}\n```',
    answers: [
      "הקוד יעבוד תקין ויודפס 'Child display' כאשר נקרא מ-Child instance",
      'שגיאת קומפיילציה - לא ניתן לעשות override למתודה final',
      "יודפס תמיד 'Parent display'",
      'שגיאה בזמן ריצה',
    ],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 20,
    question: 'איזה מהדברים הבאים נכון לגבי composition לעומת inheritance?',
    answers: [
      "Composition מתאר 'is-a' relationship, Inheritance מתאר 'has-a' relationship",
      "Inheritance מתאר 'is-a' relationship, Composition מתאר 'has-a' relationship",
      'שניהם מתארים אותו סוג של relationship',
      'Composition זמין רק מ-Java 8 ומעלה',
    ],
    correctAnswer: 1,
    difficulty: 2,
  },
  {
    id: 21,
    question:
      'בהינתן התוכנית הבאה, בחרו את האפשרות המדויקת ביותר:\n```java\npublic class Animal {\n    protected static String sound = "Generic sound";\n    \n    public Animal() {\n        System.out.print("A");\n    }\n    \n    public void makeSound() {\n        System.out.print(sound);\n    }\n}\n\npublic class Dog extends Animal {\n    public Dog() {\n        System.out.print("D");\n    }\n    \n    public void makeSound() {\n        System.out.print("Woof");\n    }\n}\n\npublic class Program {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.makeSound();\n        System.out.print(Animal.sound);\n    }\n}\n```',
    answers: [
      'ADWoofGeneric sound',
      'התוכנית לא תרוץ מכיוון שיש שגיאת קומפילציה',
      'DWoofGeneric sound',
      'DAWoofGeneric sound',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 22,
    question: 'מה המטרה של המילה השמורה abstract ב-Java?',
    answers: [
      'להגדיר מחלקה שלא ניתן ליצור ממנה אובייקטים ישירות',
      'לציין שמחלקה לא יכולה להיות יורשת',
      'לקבוע שכל המתודות במחלקה חייבות להיות סטטיות',
      'לקבוע שהמחלקה חייבת להכיל לפחות מתודה abstract אחת',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 23,
    question:
      'בהינתן הקוד הבא, איזו שורת קוד לא תגרום לשגיאת קומפילציה?\n```java\npublic abstract class Shape {\n    protected int sides;\n    \n    public Shape(int sides) {\n        this.sides = sides;\n    }\n    \n    public abstract double area();\n}\n\npublic class Square extends Shape {\n    private double sideLength;\n    \n    public Square(double sideLength) {\n        super(4);\n        this.sideLength = sideLength;\n    }\n    \n    public double area() {\n        return sideLength * sideLength;\n    }\n}\n```',
    answers: [
      'Shape[] arr = new Square[5];',
      'Rectangle rectangle = new Rectangle[1];',
      'Square square = new Rectangle(4);',
      'Shape shape = new shape(3);',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 24,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class Parent {\n    public void show() {\n        System.out.print("Parent");\n    }\n}\n\npublic class Child extends Parent {\n    public void show() {\n        System.out.print("Child");\n    }\n}\n\npublic class Program {\n    public static void main(String[] args) {\n        Parent[] p = new Parent[5];\n        for(int i=0; i<5; i++) {\n            if (i%2==0)\n                p[i] = new Child();\n            else\n                p[i] = new Parent();\n        }\n        for (Parent obj: p) {\n            obj.show();\n        }\n    }\n}\n```',
    answers: [
      'ChildParentChildParentChild',
      'ParentChildParentChildParent',
      'ChildChildChildChildChild',
      'ParentParentParentParentParent',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 25,
    question: 'איזו מהפעולות הבאות אינה חוקית על המשתנה str מטיפוס מחרוזת ב-Java?',
    answers: ["str[0] = 'A';", 'str.charAt(0);', 'str.length();', 'str.toUpperCase();'],
    correctAnswer: 0,
    difficulty: 1,
  },
  {
    id: 26,
    question: 'מה המטרה של המילה השמורה super בשפת Java?',
    answers: [
      'לגשת לחברים (שדות ומתודות) של מחלקת האב',
      'לגשת למתודות וקבועים סטטיים של המחלקה הנוכחית',
      'ליצור אובייקט חדש של מחלקת האב',
      'לאפשר דריסה של מתודות בין מחלקת האב למחלקת הבן',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 27,
    question: 'איזו מהפעולות הבאות אינה חוקית על ArrayList בשפת Java?',
    answers: ['list.add(0, 5);', 'list.set(0, element);', 'list.clear();', 'list.get(0);'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 28,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass A {\n    private int value;\n    \n    public A(int value) {\n        this.value = value;\n    }\n    \n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || !(obj instanceof A)) return false;\n        A a = (A) obj;\n        return value == a.value;\n    }\n}\n\nclass B extends A {\n    private int extraValue;\n    \n    public B(int value, int extraValue) {\n        super(value);\n        this.extraValue = extraValue;\n    }\n    \n    @Override\n    public boolean equals(Object obj) {\n        if (!super.equals(obj)) return false;\n        B b = (B) obj;\n        return extraValue == b.extraValue;\n    }\n}\n\nA a1 = new A(10);\nA a2 = new A(10);\nB b1 = new B(10, 20);\nB b2 = new B(10, 20);\nB b3 = new B(10, 30);\nSystem.out.print(a1.equals(a2)); // Line 1\nSystem.out.print(b1.equals(b2)); // Line 2\nSystem.out.print(b1.equals(b3)); // Line 3\nSystem.out.print(a1.equals(b1)); // Line 4\n```',
    answers: ['truetruefalsfalse', 'truetruefalsetrue', 'שגיאת זמן ריצה', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 29,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Vehicle {\n    public void print() {\n        System.out.println("Vehicle");\n    }\n}\n\nclass Car extends Vehicle {\n    public void print() {\n        System.out.println("Car");\n    }\n}\n\nVehicle v1 = new Car();\nVehicle v2 = new Vehicle();\nCar c = (Car) v1;\nv1.print(); // Line 1\nv2.print(); // Line 2\nc.print(); // Line 3\n((Car) v2).print(); // Line 4\n```',
    answers: [
      'Car\\nVehicle\\nCar\\nRuntime error',
      'Car\\nVehicle\\nVehicle\\nCar',
      'Car\\nVehicle\\nCar\\nVehicle',
      'Compilation error',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 30,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass A {\n    public int getValue() {\n        return 10;\n    }\n}\n\nclass B extends A {\n    @Override\n    public int getValue() {\n        return 20;\n    }\n}\n\nclass C extends B {\n    @Override\n    public int getValue() {\n        return super.getValue() + 10;\n    }\n}\n\nA a = new C();\nSystem.out.println(a.getValue());\n```',
    answers: ['30', '20', '10', 'Compilation error'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 31,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Base {\n    public static void display() {\n        System.out.print("Base");\n    }\n}\n\nclass Derived extends Base {\n    public static void display() {\n        System.out.print("Derived");\n    }\n}\n\npublic class Program {\n    public static void main(String[] args) {\n        Base b = new Derived();\n        b.display();\n        Derived.display();\n    }\n}\n```',
    answers: ['BaseDerived', 'DerivedDerived', 'BaseBase', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 32,
    question: 'איזה מהמשפטים הבאים נכון לגבי final methods ב-Java?',
    answers: [
      'לא ניתן לעשות override למתודות final במחלקות יורשות',
      'מתודות final חייבות להיות static',
      'מתודות final יכולות להיות abstract',
      'מתודות final חייבות להיות private',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 33,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Parent {\n    private int x = 5;\n    \n    public Parent() {\n        System.out.print("P" + x);\n    }\n}\n\nclass Child extends Parent {\n    private int x = 10;\n    \n    public Child() {\n        System.out.print("C" + x);\n    }\n}\n\nChild c = new Child();\n```',
    answers: ['P5C10', 'P10C10', 'P5C0', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 34,
    question:
      'איזו מהפעולות הבאות תגרום לשגיאת קומפילציה?\n```java\ninterface Flyable {\n    void fly();\n}\n\ninterface Swimmable {\n    void swim();\n}\n\nclass Duck implements Flyable, Swimmable {\n    // קוד כאן\n}\n```',
    answers: [
      'Duck duck = new Duck(); // ללא מימוש המתודות fly() ו-swim()',
      'Duck duck = new Duck(); // עם מימוש המתודות fly() ו-swim()',
      'Flyable f = new Duck();',
      'Swimmable s = new Duck();',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 35,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Calculator {\n    public int calculate(int a) {\n        return a * 2;\n    }\n    \n    public double calculate(double a) {\n        return a * 3;\n    }\n    \n    public int calculate(int a, int b) {\n        return a + b;\n    }\n}\n\nCalculator calc = new Calculator();\nSystem.out.print(calc.calculate(5));\nSystem.out.print(calc.calculate(2.0));\nSystem.out.print(calc.calculate(3, 4));\n```',
    answers: ['106.07', '156.07', 'שגיאת קומפילציה', 'שגיאת זמן ריצה'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 36,
    question:
      'כמה שגיאות קומפילציה יש בקוד הבא?\n```java\npublic final class FinalClass {\n    public static final int CONSTANT = 100;\n    \n    public final void method() {\n        System.out.println("Final method");\n    }\n}\n\npublic class ExtendedClass extends FinalClass {\n    public void method() {\n        System.out.println("Overridden method");\n    }\n    \n    public void test() {\n        CONSTANT = 200;\n    }\n}\n```',
    answers: ['3', '1', '2', '0'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 37,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nabstract class Animal {\n    abstract void makeSound();\n    \n    public void sleep() {\n        System.out.print("Sleeping");\n    }\n}\n\nclass Cat extends Animal {\n    void makeSound() {\n        System.out.print("Meow");\n    }\n}\n\nAnimal a = new Cat();\na.makeSound();\na.sleep();\n```',
    answers: [
      'MeowSleeping',
      'שגיאת קומפילציה - makeSound() חייבת להיות public',
      'שגיאת זמן ריצה',
      'Sleeping',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 38,
    question: 'איזו מהטענות הבאות נכונה לגבי constructors ב-Java?',
    answers: [
      'אם לא מגדירים constructor, Java יוצרת default constructor ריק',
      'Constructor יכול להחזיר ערך',
      'Constructor חייב להיות public',
      'Constructor יכול להיות abstract',
    ],
    correctAnswer: 0,
    difficulty: 1,
  },
  {
    id: 39,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Test {\n    public void print(Object o) {\n        System.out.print("Object");\n    }\n    \n    public void print(String s) {\n        System.out.print("String");\n    }\n    \n    public void print(Integer i) {\n        System.out.print("Integer");\n    }\n}\n\nTest t = new Test();\nt.print(null);\nt.print("Hello");\nt.print(42);\n```',
    answers: [
      'StringStringInteger',
      'ObjectStringInteger',
      'שגיאת קומפילציה - ambiguous method call',
      'ObjectStringObject',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 40,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Outer {\n    private int x = 10;\n    \n    class Inner {\n        public void display() {\n            System.out.print(x);\n        }\n    }\n    \n    public void createInner() {\n        Inner i = new Inner();\n        i.display();\n    }\n}\n\nOuter o = new Outer();\no.createInner();\nOuter.Inner inner = o.new Inner();\ninner.display();\n```',
    answers: [
      '1010',
      'שגיאת קומפילציה - Inner class לא יכולה לגשת ל-private members',
      'שגיאת קומפילציה - לא ניתן ליצור instance של Inner class מחוץ ל-Outer',
      '10',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 41,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class Base {\n    public static final String STR = "Super Class";\n    public Base() {\n        System.out.print("1");\n    }\n}\n\npublic class Derived extends Base {\n    public Derived() {\n        System.out.print("2");\n        super();\n    }\n}\n\nDerived obj = new Derived();\nSystem.out.print(Base.STR);\n```',
    answers: [
      'שגיאת קומפילציה - לא ניתן לקרוא ל-super() לא בתחילת הקונסטרקטור',
      '21Super Class',
      'Super Class 21',
      '12Super Class',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 42,
    question: 'איזה מהמשפטים הבאים נכון ביותר לגבי הקשר בין subclass למחלקה superclass?',
    answers: [
      'מחלקת subclass יכולה לגשת לכל המתודות והשדות protected של מחלקת superclass',
      'כל תכונות מחלקת אב נמחקות במחלקת הבן',
      'מחלקת subclass אינה יכולה לגשת לאף חבר בעל גישה עקיפה',
      'החסמים באופן עקיף שמחלקת subclass לא יכולה לגשת אליהם',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 43,
    question: 'איזה מהטענות הבאות נכונה לגבי superclass ו-subclass?',
    answers: [
      'אם ה-superclass הוא abstract אז כל subclass יכול לרשת רק מ-superclass אחד',
      'superclass יכול לרשת לכל היותר מ-superclass אחד',
      'אם ה-superclass מוסף כ-superclass אז subclass יכול לרשת מ-פעם אחת בלבד מאותו השם',
      'אם ה-subclass מוגדר כ-final אז subclass לא יכול לרשת ממנו',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 44,
    question:
      'איזה מהפעולות הבאות תקינה במחלקה subclass הנוכחת מהמחלקה superclass בעלת גישה protected בהשוואה למחלקה מחוץ לחבילה?',
    answers: [
      'ניתן לקרוא לה ישירות רק מקודחילה שבה הם נמצאים',
      'אם ה-subclass מסומן כ-"final"',
      'הגישה protected לא זמינה לsubclass-ים',
      'כל עוד הם באותה החבילה (package)',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 45,
    question: 'מה המטרה של המילה השמורה final בנוגע ל-Java?',
    answers: [
      'לציין שלא ניתן לרשת את המחלקה',
      'לכתוב מחלקה בתוך ה-(superclass) המחלקה האב',
      'לציין שמחלקה תכולה לרשת מ-כל מחלקה',
      'כל התשובות לא נכונות',
    ],
    correctAnswer: 0,
    difficulty: 1,
  },
  {
    id: 46,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class ClassA {\n    public void getDetails() {\n        System.out.print("ClassA");\n    }\n}\n\npublic class ClassB extends ClassA {\n    public void getDetails() {\n        System.out.print("ClassB");\n        super.getDetails();\n    }\n}\n\nClassA obj = new ClassB();\nobj.getDetails();\n```',
    answers: ['ClassBClassA', 'ClassAClassB', 'ClassA', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 47,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class Base {\n    public Base() {\n        System.out.print("Base");\n    }\n}\n\npublic class Derived extends Base {\n    public Derived() {\n        this("Exam");\n        System.out.print("Derived");\n    }\n    \n    public Derived(String s) {\n        System.out.print(s);\n    }\n}\n\nnew Derived();\n```',
    answers: ['BaseExamDerived', 'ExamDerived', 'ExamBaseDerived', 'ExamDerivedBase'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 48,
    question: 'בחרו את הטענה המדויקת ביותר העוסקת במשתנים שטריים ומתודות get ו-set ונגישות:',
    answers: [
      'נכון לעשות get ו-set למחלקה לפי הצורך ולא תמיד נגדיר משתני מחלקה כפרטיים',
      'נגדיר משתני מחלקה כפרטיים רק במידה ויש צורך לבצע בדיקת תקינות בבנאי',
      'תמיד נגדיר משתני מחלקה כ-protected למקרה שמחלקה כלשהי תרצה לרשת את המחלקה',
      'לא ניתן לבצע בדיקת תקינות בבנאי למשתנה של מחלקה פרטי ללא מתודת set ציבורית',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 49,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class A {\n    private int num;\n    \n    public A() {\n        num = 8;\n    }\n    \n    public boolean equals(Object obj) {\n        return num == ((A)obj).num;\n    }\n}\n\npublic class B {\n    private int num;\n    \n    B() {\n        num = 7;\n    }\n}\n\nA a = new A();\nB b = new B();\nSystem.out.println(a.equals(b));\n```',
    answers: [
      'שגיאת זמן ריצה - קיים casting לא תקין',
      'שגיאת קומפילציה - לא ניתן לעשות casting',
      'תודפס true',
      'תודפס false',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 50,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class A {\n    protected int num;\n    \n    public int func() {\n        return num+2;\n    }\n    \n    public String toString() {\n        return ""+func();\n    }\n}\n\npublic class B extends A {\n    public int func() {\n        return super.func()*2;\n    }\n}\n\nB b = new B();\nA a = b;\nSystem.out.print(b);\nSystem.out.print(a);\n```',
    answers: ['44', '22', '42', '24'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 51,
    question:
      'בהינתן התוכנית הבאה, בחרו את האפשרות שגורמת ליצירת שגיאות קומפילציה:\n```java\npublic abstract class A {\n    protected int num;\n    public A() {num=1;}\n}\n\npublic class B extends A {\n}\n\npublic class C extends A {\n}\n\npublic class D extends C {\n}\n```',
    answers: [
      'קיימת שגיאת קומפילציה בשורה 21',
      'A a = new A();',
      'C c = new B();',
      'B b = new D();',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 52,
    question:
      'איזה מתוך הקוד הבא גורם לשגיאת קומפילציה לצורך יצירת constructor עבור קלאס בנוגע למחלקה?\n```java\nclass A {\n    private String str;\n    \n    A(String str) {\n        this.str = str;\n    }\n}\n\nclass B extends A {\n    B() {}\n    \n    B(String s) {\n        super(s);\n    }\n}\n```',
    answers: ['אין הוגה נכונה', 'A a = new B();', 'B b = new B(5);', 'A a = new A("my String");'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 53,
    question:
      'בחרו את שורת הקוד שיש למלא במקום XXX כדי שתתקיים השוואה מוצלחת עם תרומת true בממש:\n```java\npublic class A {\n    private String name;\n    \n    public A(String name) {\n        this.name = name;\n    }\n    \n    public boolean equals(Object obj) {\n        if (XXX)\n            return name.equals(((A)obj).name);\n        return false;\n    }\n}\n\nclass B extends A {\n    public B(String name) {\n        super(name);\n    }\n}\n\nSystem.out.println((new A("Alice")).equals(new B("Alice")));\nSystem.out.println((new A("Alice")).equals(new A("Alice")));\n```',
    answers: [
      'obj instanceof A',
      'obj instanceof B',
      'getClass() == obj.getClass()',
      'this == obj',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 54,
    question:
      'בחרו את קטע הקוד שיש לכתוב במקום XXX כדי שתתקיים העתקה עמוקה בבנאי העתקה של המחלקה B:\n```java\npublic class A {\n    private int x,y;\n    \n    public A(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\npublic class B {\n    private A[] arr;\n    \n    public B(int n) {\n        arr = new A[n];\n    }\n    \n    public B(B b) {\n        arr = new A[b.arr.length];\n        for (int i=0; i<arr.length; i++) {\n            XXX\n        }\n    }\n}\n```',
    answers: [
      'arr[i] = new A(b.arr[i].x, b.arr[i].y);',
      'לא ניתן למנוע העתקה עמוקה בקוד מכיוון שלא קיים בנאי העתקה במחלקה של A',
      'arr[i] = new A(b.arr[i].x, b.arr[i].y);',
      'arr[i] = b.arr[i];',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 55,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class A {\n    public static int myVar;\n    \n    public A() {\n        myVar++;\n    }\n}\n\nA a1 = new A();\nA a2 = new A();\nA a3 = new A();\nSystem.out.println(a1.myVar);\nA.myVar = 5;\n```',
    answers: ['3', '1', 'שגיאת קומפילציה', 'קיימים 3 משתני myVar בשם המחלקה בכללי'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 56,
    question:
      'בהינתן הקוד הבא, בחרו את שורות הקוד הגורמות לשגיאות קומפילציה:\n```java\n1. public class A {\n2.     private int num;\n3.     public A(int num) {\n4.         this.num = num;\n5.     }\n6.     @Override\n7.     public int toString() {\n8.         return num;\n9.     }\n10. }\n11. public class B {\n12.     private abstract int func();\n13. }\n14. public class Program {\n15.     public static void main(String[] args) {\n16.         A a1 = new A(1,2);\n17.         A a2 = new A();\n18.         A a3 = new A(3);\n19.     }\n20. }\n```',
    answers: ['שורה 18', 'שורה 16', 'שורה 11', 'שורה 7'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 57,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class Parent {\n    String name = "parent";\n    \n    String message() {\n        return "from parent";\n    }\n}\n\npublic class Child extends Parent {\n    String name = "child";\n    \n    String message() {\n        return "from child";\n    }\n}\n\nParent p = new Child();\nSystem.out.println(p.name + " " + p.message());\n```',
    answers: ['parent from child', 'parent from parent', 'child from child', 'child from parent'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 58,
    question: 'בחרו את הטענה המדויקת ביותר העוסקת בעשיות לפקיחת למתודות שטרטיות ב-Java:',
    answers: [
      'אם נקרא למחלקת אב הזקן עד הפעמים לזכר האב במחלקת הבסיס האבו מה נקרא לבסיס חוזר פולימורפיזם',
      'מערכת מחלקה שכנית צובעים לעוח לששת לככספים וקבועים סטטיים של המחלקה הנוכחית',
      'ניתן לבצע הזופסון פולימורפיזם באמצעות צורות הזווערות ע היברטור קוד השכרקות הפדטיעות',
      'כל המשתנה משתן תמיד final גרג ב-static ובגם ב-public',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 59,
    question:
      'כמה טעויות קומפילציה יש בקוד הבא?\n```java\npublic class A {\n    public static final int ADULT = 18;\n    \n    public final void func() {\n        System.out.println("Hi from A");\n    }\n}\n\npublic class B extends A {\n    private int x,y;\n    \n    public void func() {\n        super.func();\n        System.out.println("Hi from B");\n    }\n}\n\nSystem.out.println(A.ADULT);\nB b = new B();\nb.x=10;\nA a = new A();\na.ADULT = 21;\n```',
    answers: ['3', '1', '2', '4'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 60,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class SuperClass {\n    protected static String msg = "Base";\n    \n    public SuperClass() {\n        System.out.print("S");\n    }\n    \n    public void show() {\n        System.out.print(msg);\n    }\n}\n\npublic class SubClass extends SuperClass {\n    public SubClass() {\n        super();\n        System.out.print("Sub");\n    }\n}\n\nSubClass obj = new SubClass();\nobj.show();\nSystem.out.print(SuperClass.msg);\n```',
    answers: ['SSubBaseBase', 'SubSBaseBase', 'SSubBase', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 61,
    question: 'איזה מהמשפטים הבאים נכון לגבי protected access modifier?',
    answers: [
      'protected members נגישים למחלקות יורשות גם אם הן נמצאות בחבילות שונות',
      'protected זהה ל-package-private בכל המקרים',
      'protected members לא נגישים למחלקות יורשות',
      'protected members נגישים רק בתוך אותה החבילה',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 62,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class Parent {\n    public Parent(String name) {\n        System.out.print("P" + name);\n    }\n}\n\npublic class Child extends Parent {\n    public Child() {\n        this("Test");\n        System.out.print("C1");\n    }\n    \n    public Child(String s) {\n        super(s);\n        System.out.print("C2");\n    }\n}\n\nnew Child();\n```',
    answers: ['PTestC2C1', 'PC1C2Test', 'TestPC2C1', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 63,
    question:
      'כמה שגיאות קומפילציה יש בקוד הבא?\n```java\npublic final class Vehicle {\n    public final int speed = 120;\n    \n    public final void drive() {\n        System.out.println("Driving");\n    }\n}\n\npublic class Car extends Vehicle {\n    public void drive() {\n        super.drive();\n        System.out.println("Car driving");\n    }\n    \n    public void test() {\n        speed = 150;\n    }\n}\n```',
    answers: ['3', '1', '2', '4'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 64,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass X {\n    public void method(Object o) {\n        System.out.print("Object");\n    }\n    \n    public void method(String s) {\n        System.out.print("String");\n    }\n}\n\nclass Y extends X {\n    public void method(Object o) {\n        System.out.print("Y-Object");\n    }\n}\n\nX x = new Y();\nx.method("Hello");\nx.method((Object)"World");\n```',
    answers: ['StringY-Object', 'Y-ObjectY-Object', 'StringString', 'ObjectObject'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 65,
    question:
      'איזה מהקודים הבאים יגרום לשגיאת קומפילציה?\n```java\nabstract class Shape {\n    protected int sides;\n    \n    public Shape(int sides) {\n        this.sides = sides;\n    }\n    \n    public abstract void draw();\n}\n\nclass Triangle extends Shape {\n    public Triangle() {\n        super(3);\n    }\n    \n    public void draw() {\n        System.out.println("Drawing triangle");\n    }\n}\n```',
    answers: [
      'אף קוד לא יגרום לשגיאה',
      'Shape s = new Shape(4);',
      'Triangle t = new Triangle();',
      'Shape s = new Triangle();',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 66,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Counter {\n    private static int count = 0;\n    \n    public Counter() {\n        count++;\n    }\n    \n    public static int getCount() {\n        return count;\n    }\n}\n\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nCounter c3 = new Counter();\nSystem.out.print(Counter.getCount());\nSystem.out.print(c1.getCount());\n```',
    answers: ['33', '13', '31', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 67,
    question:
      'מה קורה כאשר מנסים לעשות override למתודה final?\n```java\nclass Base {\n    public final void display() {\n        System.out.println("Base display");\n    }\n}\n\nclass Derived extends Base {\n    public void display() {\n        System.out.println("Derived display");\n    }\n}\n```',
    answers: [
      'שגיאת קומפילציה - לא ניתן לעשות override למתודה final',
      "הקוד יעבוד ויודפס 'Derived display'",
      "הקוד יעבוד ויודפס 'Base display'",
      'שגיאה בזמן ריצה',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 68,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass A {\n    public void test() {\n        System.out.print("A");\n    }\n}\n\nclass B extends A {\n    public void test() {\n        super.test();\n        System.out.print("B");\n    }\n}\n\nclass C extends B {\n    public void test() {\n        super.test();\n        System.out.print("C");\n    }\n}\n\nC obj = new C();\nobj.test();\n```',
    answers: ['ABC', 'CBA', 'ACB', 'BAC'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 69,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Animal {\n    public String name = "Animal";\n    \n    public void makeSound() {\n        System.out.print(name + " makes sound");\n    }\n}\n\nclass Dog extends Animal {\n    public String name = "Dog";\n    \n    public void makeSound() {\n        System.out.print(super.name + " barks");\n    }\n}\n\nAnimal a = new Dog();\na.makeSound();\nSystem.out.print(" " + a.name);\n```',
    answers: ['Animal barks Animal', 'Dog barks Dog', 'Animal barks Dog', 'Dog barks Animal'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 70,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic class Base {\n    protected static int value = 5;\n    \n    public Base() {\n        System.out.print("B");\n        value++;\n    }\n    \n    public void display() {\n        System.out.print(value);\n    }\n}\n\npublic class Derived extends Base {\n    public Derived() {\n        System.out.print("D");\n        super.display();\n    }\n}\n\nDerived d1 = new Derived();\nDerived d2 = new Derived();\nSystem.out.print(Base.value);\n```',
    answers: [
      'BD6BD78',
      'BD5BD67',
      'שגיאת קומפילציה - super.display() לא יכול להיקרא אחרי System.out.print',
      'BD6BD68',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 71,
    question: 'איזה מהמשפטים הבאים נכון לגבי abstract classes ו-interfaces?',
    answers: [
      'abstract class יכולה להכיל constructors, interface לא',
      'interface יכולה להכיל constructors, abstract class לא',
      'שניהם יכולים להכיל constructors',
      'אף אחד מהם לא יכול להכיל constructors',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 72,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Vehicle {\n    public Vehicle(String type) {\n        System.out.print("V" + type);\n    }\n}\n\nclass Car extends Vehicle {\n    public Car() {\n        this("Sedan");\n        System.out.print("C1");\n    }\n    \n    public Car(String model) {\n        super("Car");\n        System.out.print("C2" + model);\n    }\n}\n\nnew Car();\n```',
    answers: ['VCarC2SedanC1', 'C1C2SedanVCar', 'VCarC1C2Sedan', 'שגיאת קומפילציה'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 73,
    question:
      'כמה שגיאות קומפילציה קיימות בקוד הבא?\n```java\npublic abstract class Animal {\n    public abstract void makeSound();\n    \n    public final void sleep() {\n        System.out.println("Sleeping");\n    }\n}\n\npublic class Dog extends Animal {\n    public void makeSound() {\n        System.out.println("Woof");\n    }\n    \n    public void sleep() {\n        System.out.println("Dog sleeping");\n    }\n}\n\nAnimal a = new Animal();\nDog d = new Dog();\n```',
    answers: ['2', '1', '3', '0'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 74,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass A {\n    public void method(int x) {\n        System.out.print("A-int");\n    }\n    \n    public void method(double x) {\n        System.out.print("A-double");\n    }\n}\n\nclass B extends A {\n    public void method(int x) {\n        System.out.print("B-int");\n    }\n}\n\nA a = new B();\na.method(5);\na.method(5.0);\na.method((int)5.5);\n```',
    answers: [
      'B-intA-doubleB-int',
      'A-intA-doubleA-int',
      'B-intB-doubleB-int',
      'A-intA-doubleB-int',
    ],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 75,
    question:
      'איזה מהקודים הבאים יגרום לשגיאת קומפילציה?\n```java\ninterface Drawable {\n    void draw();\n    int SIZE = 100;\n}\n\nclass Circle implements Drawable {\n    public void draw() {\n        System.out.println("Drawing circle");\n    }\n}\n```',
    answers: [
      'Circle.SIZE = 200;',
      'Drawable d = new Circle();',
      'System.out.println(Drawable.SIZE);',
      'Circle c = new Circle(); c.draw();',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 76,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Parent {\n    protected String name = "Parent";\n    \n    public Parent() {\n        System.out.print(getName());\n    }\n    \n    public String getName() {\n        return name;\n    }\n}\n\nclass Child extends Parent {\n    protected String name = "Child";\n    \n    public String getName() {\n        return name;\n    }\n}\n\nChild c = new Child();\nSystem.out.print("-" + c.name);\n```',
    answers: ['Child-Child', 'Parent-Child', 'Child-Parent', 'Parent-Parent'],
    correctAnswer: 0,
    difficulty: 3,
  },
  {
    id: 77,
    question:
      'מה קורה כאשר מחלקה יורשת ממחלקה שהוגדרה כ-final?\n```java\nfinal class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}\n\nclass ScientificCalculator extends Calculator {\n    public double sqrt(double x) {\n        return Math.sqrt(x);\n    }\n}\n```',
    answers: [
      'שגיאת קומפילציה - לא ניתן לרשת ממחלקה final',
      'הקוד יעבוד תקין',
      'שגיאה בזמן ריצה',
      'אזהרה אך הקוד יעבוד',
    ],
    correctAnswer: 0,
    difficulty: 1,
  },
  {
    id: 78,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nclass Counter {\n    private static int globalCount = 0;\n    private int instanceCount = 0;\n    \n    public Counter() {\n        globalCount++;\n        instanceCount++;\n    }\n    \n    public void printCounts() {\n        System.out.print(globalCount + "," + instanceCount);\n    }\n}\n\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nc1.printCounts();\nc2.printCounts();\n```',
    answers: ['2,12,1', '1,12,1', '2,22,2', '1,11,1'],
    correctAnswer: 0,
    difficulty: 2,
  },
  {
    id: 79,
    question:
      'מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\nabstract class Shape {\n    protected String color;\n    \n    public Shape(String color) {\n        this.color = color;\n        System.out.print("Shape-" + color);\n    }\n    \n    public abstract void draw();\n}\n\nclass Rectangle extends Shape {\n    public Rectangle(String color) {\n        super(color);\n        System.out.print("Rect-" + color);\n    }\n    \n    public void draw() {\n        System.out.print("Drawing");\n    }\n}\n\nShape s = new Rectangle("Red");\ns.draw();\n```',
    answers: [
      'Shape-RedRect-RedDrawing',
      'Rect-RedShape-RedDrawing',
      'Shape-RedDrawingRect-Red',
      'שגיאת קומפילציה',
    ],
    correctAnswer: 0,
    difficulty: 2,
  },

  // -- not sure if good
  {
    id: 80,
    question: "בהינתן מחלקת User עם שדות username, password ו-validID, איזה מהבדיקות הבאות צריכה להתבצע במתודת validID?",
    answers: [
      "בדיקה שהמזהה מכיל 8 ספרות בלבד ובאורך נתונים מתאימים",
      "בדיקה שהמזהה מכיל אותיות ומספרים",
      "בדיקה שהמזהה ארוך יותר מ-10 תווים",
      "בדיקה שהמזהה מכיל רק תווים מיוחדים"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 81,
    question: "איזה מהמשפטים הבאים נכון לגבי exceptions ב-Java?",
    answers: [
      "checked exceptions חייבות להיטפל בהן או להוסיף throws ב-method signature",
      "unchecked exceptions חייבות להיטפל בהן בכל מקרה",
      "לא ניתן ליצור custom exceptions",
      "כל exception חייבת להיות מטופלת ב-try-catch"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 82,
    question: "מה נקבל כשננסה להריץ את התוכנית הבאה?\n```java\npublic interface Product {\n    double getPrice();\n    double getQuality();\n    boolean isBetter(Product other);\n}\n\nclass Diamond implements Product {\n    private double price = 158.0;\n    private double quality = 4.5;\n    \n    public double getPrice() { return price; }\n    public double getQuality() { return quality; }\n    public boolean isBetter(Product other) {\n        return this.getQuality() > other.getQuality();\n    }\n}\n\nDiamond d1 = new Diamond();\nDiamond d2 = new Diamond();\nSystem.out.println(d1.isBetter(d2));\n```",
    answers: [
      "false",
      "true",
      "שגיאת קומפילציה",
      "שגיאה בזמן ריצה"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 83,
    question: "במחלקת Orange המממשת את ה-interface Product, אם price=2.8 ו-quality=5.6, מה יחזיר הביטוי הבא?\n```java\nOrange orange = new Orange();\nboolean result = orange.isBetter(orange);\n```",
    answers: [
      "false",
      "true", 
      "שגיאת קומפילציה",
      "תלוי במימוש של isBetter"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 84,
    question: "איזה מהקודים הבאים יגרום לשגיאת קומפילציה?\n```java\npublic class ClassA extends Thread {\n    public void run() {\n        System.out.println(Thread.currentThread().getPriority());\n    }\n}\n\npublic class ClassB {\n    int n;\n    String str;\n    \n    public ClassB(int n, String str) {\n        if (n < Thread.MIN_PRIORITY)\n            this.n = Thread.MIN_PRIORITY;\n        else if (n > Thread.MAX_PRIORITY)\n            this.n = Thread.MAX_PRIORITY;\n        else\n            this.n = n;\n        this.str = str;\n    }\n}\n```",
    answers: [
      "הקוד לא יגרום לשגיאת קומפילציה",
      "ClassA לא יכולה לרשת מ-Thread",
      "לא ניתן לגשת ל-Thread.currentThread()",
      "ClassB לא יכולה להשתמש ב-Thread constants"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 85,
    question: "מה יקרה אם ננסה להריץ את הקוד הבא?\n```java\ninterface IA {\n    int NUM = 65;\n    void funcIA();\n}\n\ninterface IB {\n    void funcIB();\n}\n\ninterface IC extends IA {\n    void funcIC();\n}\n\nabstract class ClassA implements IA, IB {\n    private int x;\n    \n    public void funcA() {\n        System.out.println(\"funcA in ClassA\");\n    }\n    \n    public void funcIA() {\n        funcA();\n        System.out.println(\"funcIA in ClassA\");\n    }\n}\n\nclass ClassB extends ClassA {\n    public void funcA() {\n        System.out.println(\"funcA in ClassB\");\n    }\n    \n    public void funcIB() {\n        System.out.println(\"funcIB in ClassB\");\n    }\n}\n\nIA[] arr = new IA[3];\narr[0] = new ClassB();\narr[1] = new ClassC();\n```",
    answers: [
      "שגיאת קומפילציה - ClassC לא מוגדרת",
      "הקוד יעבוד ללא בעיות",
      "שגיאה בזמן ריצה",
      "שגיאת קומפילציה - IA הוא interface"
    ],
    correctAnswer: 0,
    difficulty: 3
  },
  {
    id: 86,
    question: "איזה מהמשפטים הבאים נכון לגבי מעבר פרמטרים ב-Java?",
    answers: [
      "Java עוברת אובייקטים by reference וטיפוסים פרימיטיביים by value",
      "Java עוברת הכל by value",
      "Java עוברת הכל by reference", 
      "Java עוברת מערכים by value ואובייקטים by reference"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 87,
    question: "מה תדפיס התוכנית הבאה?\n```java\nclass Counter {\n    private static int count = 0;\n    \n    public Counter() {\n        count++;\n    }\n    \n    public static void printCount() {\n        System.out.println(\"Count: \" + count);\n    }\n}\n\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nCounter.printCount();\nCounter c3 = new Counter();\nCounter.printCount();\n```",
    answers: [
      "Count: 2\\nCount: 3",
      "Count: 1\\nCount: 2",
      "Count: 3\\nCount: 3",
      "Count: 0\\nCount: 1"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 88,
    question: "איזה מהמשפטים הבאים נכון לגבי interface constants?",
    answers: [
      "כל המשתנים ב-interface הם אוטומטית public static final",
      "משתנים ב-interface יכולים להיות private",
      "משתנים ב-interface חייבים להיות מוגדרים כ-final במפורש",
      "interface לא יכול להכיל משתנים"
    ],
    correctAnswer: 0,
    difficulty: 2
  },
  {
    id: 89,
    question: "מה יקרה כשננסה להריץ את הקוד הבא?\n```java\nabstract class Vehicle {\n    protected String type;\n    \n    public Vehicle(String type) {\n        this.type = type;\n        System.out.println(\"Vehicle: \" + type);\n    }\n    \n    public abstract void start();\n}\n\nclass Car extends Vehicle {\n    public Car() {\n        super(\"Car\");\n        System.out.println(\"Car created\");\n    }\n    \n    public void start() {\n        System.out.println(\"Car started\");\n    }\n}\n\nVehicle v = new Car();\nv.start();\n```",
    answers: [
      "Vehicle: Car\\nCar created\\nCar started",
      "Car created\\nVehicle: Car\\nCar started",
      "Vehicle: Car\\nCar started",
      "שגיאת קומפילציה"
    ],
    correctAnswer: 0,
    difficulty: 2
  }
  // -- end


];
