export function prependZeros(id: number, maxLength: number): string {
  let transformedId = id.toString();

  for (let i = 1; i < maxLength; i++) {
    transformedId = 0 + transformedId;
  }

  return transformedId;
}

export function truncateText(text: string, maxLength = 30): string {
  let truncatedString = "";

  if (text.length <= maxLength) return text;

  truncatedString = text.slice(0, maxLength);

  return truncatedString + "...";
}
