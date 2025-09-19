export interface QuestionPart {
  type: 'text' | 'code' | 'image';
  content: string;
  language?: string;
  imagePath?: string;
}

export function parseQuestionContent(questionText: string, hasImage?: string): QuestionPart[] {
  const parts: QuestionPart[] = [];
  const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(questionText)) !== null) {
    // Add text before the code block
    if (match.index > lastIndex) {
      const textContent = questionText.slice(lastIndex, match.index).trim();
      if (textContent) {
        parts.push({
          type: 'text',
          content: textContent
        });
      }
    }

    // Add the code block
    const language = match[1] || 'java'; // Default to java if no language specified
    const codeContent = match[2].trim();
    
    if (codeContent) {
      parts.push({
        type: 'code',
        content: codeContent,
        language
      });
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last code block
  if (lastIndex < questionText.length) {
    const textContent = questionText.slice(lastIndex).trim();
    if (textContent) {
      parts.push({
        type: 'text',
        content: textContent
      });
    }
  }

  // If no code blocks were found, return the entire text as a single text part
  if (parts.length === 0) {
    parts.push({
      type: 'text',
      content: questionText
    });
  }

  // Add image if hasImage is provided
  if (hasImage) {
    // Extract the image name from the hasImage string (e.g., "{IMG-12}" -> "IMG-12")
    const imageName = hasImage.replace(/[{}]/g, '');
    const imagePath = `/src/assets/${imageName}.png`;
    
    // Only add image part if imageName is valid
    if (imageName.trim()) {
      parts.push({
        type: 'image',
        content: imageName,
        imagePath: imagePath
      });
    }
  }

  return parts;
}
