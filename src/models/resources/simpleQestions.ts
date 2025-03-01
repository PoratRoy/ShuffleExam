export const rawQuestions = [
  {
    question:
      'במשק "אליפלט" קיימים 2 סוגי עובדים: 10 עובדים מסוג א – כל עובד מסוגל לייצר 4 יחידות X או 4 יחידות Y. ולא ידוע כמה עובדים מסוג ב קיימים במשק, אך כל עובד מסוג ב מסוגל לייצר A יחידות ממוצר X או 4 יחידות ממוצר Y. אם ידוע כי במשק מייצרים 16 יחידות X וכן כי עובדים מסוג א מחולקים כך שעובד 1 מייצר X ו- 9 עובדים מייצרים Y.',
    correctRes: 'אם במשק ישנם 6 עובדים מסוג ב אז A=4.',
    results: [
      'אם במשק ישנם 6 עובדים מסוג ב אז A=2.',
      "לא יתכן כי במשק ישנו רק עובד אחד מסוג ב'.",
      'לא יתכן A גדול מ- 4.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      "במשק ''חפלה-בחלה'' מייצרים שני מוצרים X ו- Y. לרשות המשק ישנם 100 עובדים ו- 100 עובדות. כל עובד מסוגל לייצר יחידה אחת ממוצר X או 2 יחידות ממוצר Y. כל עובדת מסוגלת לייצר 2 יחידות ממוצר X או 8 יחידות ממוצר Y. ידוע כי בנקודת הייצור של המשק העלות האלטרנטיבית הממוצעת לייצור X קטנה מהעלות האלטרנטיבית השולית לייצור X.",
    correctRes: 'המשק מייצר פחות מ- 800 יחידות Y.',
    results: [
      'יתכן כי העלות האלטרנטיבית השולית לייצור X הינה 2 יחידות Y.',
      'המשק מייצר פחות מ- 100 יחידות X.',
      'המשק מייצר יותר מ- 200 יחידות X.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question: 'סמנו את הטענה הנכונה בנוגע לעקומת התמורה:',
    correctRes: 'כל התשובות האחרות לא נכונות.',
    results: [
      'העלאת שכר המינימום תזיז את עקומת התמורה שמאלה ולמטה (תקטין אותה).',
      'גידול בשיעור האבטלה במשק יזיז את עקומת התמורה שמאלה ולמטה (יקטין אותה).',
      'פתיחת המשק למסחר יזיז את עקומת התמורה ימינה ולמעלה (יגדיל אותה).',
      'משק בו הפועלים מייצרים מוצר אחד בלבד לא יוכל לקיים מסחר.',
    ],
  },
  {
    question:
      "משק אלפא הוא משק סגור שבו מייצרים שני מוצרים X ו Y ביעילות. במשק יש שני סוגים של עובדים: 10 עובדים מסוג א' ו- 5 עובדים מסוג ב. כל עובד מסוג א' יכול לייצר בזמן נתון 1 יחידות של X או 2 יחידות של Y כל עובד מסוג ב' יכול לייצר בזמן נתון 3 יחדות של X או 2 יחידות של Y במשק מקפידים לצרוך X ו Y בפרופורציות קבועות לפי הקשר X2=Y להלן טענות: טענה 1: העלות הממוצעת ביצור Y במונחי ויתור על X היא נמוכה מ 1/2 . טענה 2: המשק ייצר יותר מ 20 יחידות של Y. טענה 3: העלות האלטרנטיבית הממוצעת ביצור X במונחי ויתור על Y גדולה מ- 2/3.",
    correctRes: 'רק טענה 2 נכונה.',
    results: [
      'רק טענות 2 ו3- נכונות.',
      'רק טענות 1 ו- 3 נכונות.',
      'רק טענה 1 נכונה.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'במשק אלפא הוא משק פתוח למסחר בינלאומי בו ישנם 10 עובדים. כל עובד מסוגל לייצר A יחידות X או B יחידות מ- Y. במצב המוצא המשק מקיים מסחר ומייצר X בלבד. סמנו את התשובה הנכונה:',
    correctRes: 'אם כל עובד במשק יוכל לייצר יותר מ- B יחידות Y אז יתכן שהמשק ייצר רק Y.',
    results: [
      'אם כל עובד במשק יוכל לייצר יותר מ- B יחידות Y אז בהכרח שהמשק ייצר רק Y.',
      'אם מחיר העולמי של יחידת X יעלה, אז יתכן שהמשק ייצר רק Y.',
      'אם כמות העובדים במשק תגדל, יתכן שהמשק ייצר רק Y.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'ידוע כי גבינה הינה מוצר נורמלי. במצב המוצא ההוצאה של הצרכנים על גבינה הינה 1,000 ₪ בחודש. חלו שני השינויים הבאים: תחילה הכנסת הצרכנים עלתה ולאחר מכן מחיר החלב (המהווה גורם ייצור משתנה בייצור גבינה) עלה. ידוע כי לאחר שני שינויים אלה ההוצאה של הצרכנים על גבינה הינה 800 ₪. לאור זאת ניתן להסיק כי:',
    correctRes: 'גמישות הביקוש של הצרכנים לגבינה גדולה מ- 1 בערך מוחלט.',
    results: [
      'גמישות הביקוש של הצרכנים לגבינה קטנה מ- 1 בערך מוחלט.',
      'גמישות הביקוש של הצרכנים לגבינה שווה ל- 1 בערך מוחלט.',
      'לא ניתן לקבוע את תחום גמישות הביקוש, אך היא בהכרח שונה מ- 1 בערך מוחלט.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'בקבוקים של מים מינרליים נסחרים בשוק תחרותי וסגור. גלית, מעיין, ותמר צורכות בקבוקים של מים מינרליים גלית קונה תמיד כמות קבועה של בקבוקים ללא תלות במחירם. מעיין מוציאה סכום כספי קבוע על בקבוקי מים מינרליים (ללא קשר למחיר הבקבוק) במצב המוצא, מחיר כל בקבוק הוא 4 שקלים לבקבוק, ובמחיר זה כל אחת מהן צורכת 10 בקבוקים. ולתמר פונקציית ביקוש הבאה לבקבוקי מים P=14-X.',
    correctRes:
      'אם מחיר השוק של בקבוקי מים מינרליים יעלה בשקל אחד, תמר תקנה רק 9 בקבוקים, וההוצאה הכספית של מעיין על בקבוקי מים תהיה הנמוכה ביותר.',
    results: [
      'אם המחיר ירד בשקל, מעיין תגדיל את הביקוש ביחידה אחת.',
      'אם המחיר של בקבוק מים ירד, ההוצאה הכספית של גלית לא תשתנה.',
      'גמישות הביקוש של גלית גדולה מאחד בערך המוחלט.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'ידוע כי הביקוש המצרפי בשוק להמבורגר מורכב משתי קבוצות צרכנים חיילים ואזרחים: המבורגר הינו מוצר נחות עבור אזרחים ונורמאלי עבור חיילים. בהתאם להחלטת משרד האוצר הוחלט לעלות את הכנסת החיילים ולטובת כך גובים יותר מס הכנסה מהאזרחים (קיטון בהכנסת האזרחים). בחרו את הטענה הנכונה לגבי שיווי המשקל לאחר השינוי :',
    correctRes:
      'המחיר יעלה, הכמות המצרפית תעלה, אך לא ניתן לדעת מה יקרה לכמות ההמבורגרים שיקנו החיילים.',
    results: [
      'המחיר יעלה וכמות ההמבורגרים שיקנו החיילים תעלה.',
      'המחיר ירד והכמות המצרפית תעלה.',
      'יתכן כי הכמות והמחיר ישארו ללא שינוי.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'בשוק למוצר X פועלת פירמה תחרותית. להלן גרף פונקציית העלויות של הפירמה. להלן טענות: טענה 1: אם מחיר השוק הוא 13 ₪ הרווח של הפירמה אם הייתה מייצרת 12 יחידות גדול מהרווח אם הייתה מייצרת 7 יחידות. טענה 2: העלות הקבועה של הפירמה היא 28 ₪. טענה 3: אם מחיר השוק הוא גבוה מ 9 ₪ ונמוך מ 13 ₪ הכמות המיוצרת בענף בטווח הקצר תהיה גבוהה מ 7 יחידות, ונמוכה מ- 12 יחידות.',
    correctRes: 'רק טענות 2 ו- 3 נכונות.',
    results: [
      'רק טענות 1 ו2- נכונות.',
      'רק טענות 1 ו3- נכונות.',
      'רק טענה 2 נכונה.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'השוק למוצר Y הוא תחרותי וסגור (אין יבוא ואין יצוא). השוק למוצר X הוא תחרותי ופתוח לייבוא. עקומת הביקוש ל- X נתונה על ידי הקשר: P=100-0.5X עקומת ההיצע ל-X נתונה על ידי הקשר: P=20+0.5X. במצב המוצא, המחיר העולמי של X בדולרים הוא 10$, ושער החליפן הוא E=3 (כלומר 3 ₪ לכל דולר).',
    correctRes:
      'אם X ו Y מוצרים משלימים, ואם חל פיחות של השקל, כך שכעת שער חליפין הוא E=4 (כלומר 4 ₪ לכל דולר), אז היבוא יקטן ב- 40 יחידות והמחיר של Y ירד.',
    results: [
      'אם X ו Y מוצרים תחליפים, ואם חל פיחות של השקל, כך שכעת שער חליפין הוא E=4 (כלומר 4 ₪ לכל דולר), אז היבוא יקטן ב- 30 יחידות והמחיר של Y ירד.',
      'אם X ו Y מוצרים בלתי תלויים, ואם חל פיחות של השקל, כך שכעת שער חליפין הוא E=5 (כלומר 5 ₪ לכל דולר), אז המחיר של Y לא ישתנה, ולא יהיה יבוא של X.',
      'אם חל תיסוף כלשהו של השקל (כלומר המחיר של כל דולר בשקלים יורד), היבוא יקטן.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'שוק מוצר X הוא שוק תחרותי פתוח בו מתקיים יבוא עם מכס t ₪ על כל יחידה מיובאת. הממשלה מעלה את המכס על כל יחידה מיובאת ב- 4 ש"ח, וכתוצאה מכך הכמות המיובאת קטנה ב- 8 יחידות. לאור זאת ניתן להגיד:',
    correctRes: 'הכמות הנצרכת ירדה בפחות מ- 8 יחידות.',
    results: [
      'הכמות המיוצרת בארץ גדלה ב- 4 יחידות.',
      'הכנסות הממשלה ממכס השתנו ב- 32 ₪.',
      'הכנסות הממשלה מהמכס עלו, אך לא ניתן לדעת בכמה.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'במצב המוצא עקומת הביקוש בשוק מוצר X הינה P=300-2Q עקומת ההיצע הינה P=30+Q. ידוע כי לאחר הטלת מס בסכום קבוע על כל יחידה מיוצרת, הכמות הנמכרת בשוק ירדה ב- 20 יחידות, מה תקבולי הממשלה ממיסים?',
    correctRes: '4,200.',
    results: ['70.', '5,400.', '11,200.', 'כל התשובות האחרות לא נכונות.'],
  },
  {
    question:
      'ארוחות "מזון מהיר" וכלים חד פעמיים הם מוצרים משלימים. עתה הממשלה החליטה לבטל את המס הקיים על כלים חד פעמיים. כתוצאה מביטול המס?',
    correctRes:
      'הוצאות של הצרכנים על "מזון מהיר" יעלו ולא ניתן לדעת מה יקרה להוצאות הצרכנים על כלים חד פעמיים.',
    results: [
      'הן המחיר של כלים חד פעמיים והן המחיר של "מזון מהיר" ירדו.',
      'עודף הצרכן בשני השווקים יעלה.',
      'לא ניתן לדעת מה יקרה לרווח היצרן בשוק הכלים החד פעמיים.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'מוצר X מיוצר ונמכר בארץ בלבד. במשק ישנן שתי קבוצות צרכנים: כלכלנים ורואי חשבון. השנה חלה עליה בהכנסת כל הצרכנים במשק. ידוע כי X מוצר נורמלי עבור כלכלנים ונחות עבור רואי החשבון, וכן כי עקומת ההיצע קשיחה לחלוטין. בשיווי משקל החדש ניתן להסיק כי:',
    correctRes: 'הכמות הנרכשת על ידי הכלכלנים תעלה בדיוק בירידה בכמות הנרכשת על ידי רואי החשבון.',
    results: [
      'מחיר מוצר X יישאר ללא שינוי.',
      'הוצאת הכלכלנים תישאר ללא שינוי.',
      'אם הכנסת היצרנים נשארה ללא שינוי אז עקומת הביקוש המצרפית יחידתית.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'להלן טבלת מבנה עלויות (בש"ח) של פירמה תחרותית (בטבלה חסרים נתונים). לאור טבלת עלויות זו הועלו מספר טענות: טענה א - העלות הקבועה של הפירמה היא 56 ₪ . טענה ב- אם מחיר השוק הוא 10 ₪ הפירמה תייצר בטווח קצר אך לא בטווח ארוך. טענה ג- אם מחיר השוק הוא 23 ₪ הפירמה תייצר 6 יחידות הן בטווח קצר והן בטווח ארוך. סמנו את הטענה הנכונה:',
    correctRes: 'כל הטענות נכונות.',
    results: [
      'רק טענות א ו- ג נכונות.',
      'רק טענה ג נכונה.',
      'רק טענות א ו- ב נכונות.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'משק אלפא נמצא בשיווי משקל בו הכמות הנרכשת הינה 10 יחידות במחיר 10 ₪. ידוע כי במחיר 8 ₪ הכמות המבוקשת הינה 12 יחידות. לשוק הגיעו יצרנים חדשים המוכנים לייצר 4 יחידות בכל מחיר, ונקודת שיווי המשקל של השוק השתנתה והינה בכמות של 12 יחידות. כתוצאה מכך בשיווי משקל החדש:',
    correctRes: 'פדיון היצרנים הותיקים (ללא החדשים) הינו 64 ₪.',
    results: [
      'מחיר שיווי משקל נמוך מ- 10 ₪ אך גבוה מ- 8 ₪.',
      'הוצאות הצרכנים ועודף הצרכנים עלו.',
      'אם לאחר כניסת היצרנים החדשים, הממשלה תטיל מס של 2 ₪ הצרכנים יחזרו למצב המוצא.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'מוצר X מיוצר בתנאי תחרות משוכללת ע"י שתי קבוצות יצרנים: יצרני עיר א ויצרני עיר ב הצרכנים בענף מעוניינים להוציא סכום קבוע לרכישת המוצר. עתה חל שיפור טכנולוגי אצל יצרני עיר א בלבד. כתוצאה מכך:',
    correctRes: 'פדיון יצרני עיר א יגדל ואילו פדיון יצרני עיר ב יקטן.',
    results: [
      'מחיר המוצר בשוק ירד והוצאות הצרכנים על רכישת המוצר ירדו.',
      'הכמות המיוצרת בעיר א תגדל ואילו הכמות המיוצרת בעיר ב תישאר ללא שינוי.',
      'לא ניתן לדעת לגבי פדיון היצרנים בעיר א, אולם פדיון יצרני עיר ב יגדל.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'משק אלפא הוא משק קטן ופתוח למסחר בינלאומי. במשק יש שני סוגים של מכונות: 10 מכונות מסוג A ו- 20 מכונות מסוג B. כל מכונה מסוג A מייצרת בזמן נתון 2 יחידות של X (אך לא מייצרת Y) כל מכונה מסוג B מייצרת בזמן נתון 3 יחידות של Y (אך לא מייצרת X). במשק מעדיפים לצרוך כמות קבועה של M יחידות של X, וכמה שיותר יחידות של Y. מכאן ש:',
    correctRes: 'אם M=0 אז המשק יצרוך 60+20(Px/Py) יחידות של Y.',
    results: [
      'אם M=40, ואם המחיר היחסי העולמי של X קטן מ-1 (כלומר Px/Py<1) אז המשק ייצא יותר מ-20 יחידות של Y.',
      'אם M=10, ואם המחיר היחסי העולמי של X גדול מ- 2 (כלומר Px/Py>2), המשק ייצא 15 יחידות של X.',
      'אם M=20 אז ככל שיחס המחירים העולמי יקטן המשק יצרוך יותר יחידות מ- Y.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
  {
    question:
      'בשוק X עקומות ביקוש והיצע רגילות, ידוע כי בעקבות שינוי באחת העקומות בשוק מחיר המוצר ירד ב- 5% והוצאות הצרכן ירדו ב- 2%. מה ניתן לומר מנתון זה?',
    correctRes: 'עקומת הביקוש בתחום הרלוונטי קשיחה (גמישות הביקוש בערך מוחלט קטנה מ- 1).',
    results: [
      'יתכן שהכנסת הצרכנים עלתה וX מוצר נחות.',
      'עקומת הביקוש בתחום הרלוונטי יחידתית (גמישות הביקוש בערך מוחלט שווה ל- 1).',
      'יתכן שהכנסת הצרכנים עלתה ו X מוצר נורמלי.',
      'יתכן שעקומת הביקוש בתחום הרלוונטי גמישה או קשיחה, אך בטוח לא יחידתית.',
    ],
  },
  {
    question:
      'בשוק הדלק קיים מס על כל יחידה מיוצרת, כעת הממשלה שוקלת להקטין את המס. כתוצאה מהפחתת המס מה יקרה בשיווי המשקל החדש?',
    correctRes: 'מחיר צרכן ירד ומחיר יצרן יעלה.',
    results: [
      'הפער בין מחיר צרכן ומחיר יצרן יעלה.',
      'לא ניתן לדעת מה יקרה לעודף הצרכן.',
      'הנטל העודף יגדל.',
      'כל התשובות האחרות לא נכונות.',
    ],
  },
];
