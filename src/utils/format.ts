export const formatOptionText = (text: string): string => {
    const prefixes = ['א.', 'ב.', 'ג.', 'ד.', 'ה.', 'ו.', 'ז.', 'ח.', 'ט.', 'י.', 'כ.', 'ל.', 'מ.', 'נ.', 'ס.', 'ע.', 'פ.', 'צ.', 'ק.', 'ר.', 'ש.', 'ת.', 'א,', 'ב,', 'ג,', 'ד,', 'ה,', 'ו,', 'ז,', 'ח,', 'ט,', 'י,', 'כ,', 'ל,', 'מ,', 'נ,', 'ס,', 'ע,', 'פ,', 'צ,', 'ק,', 'ר,', 'ש,', 'ת,'];
    for (const prefix of prefixes) {
      if (text.startsWith(prefix)) {
        return text.substring(prefix.length).trim();
      }
    }
    return text.trim();
  };