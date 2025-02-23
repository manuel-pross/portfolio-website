export function prependZeros(id: number, maxLength: number): string {
  let transformedId = id.toString();

  for (let i = 1; i < maxLength; i++) {
    transformedId = 0 + transformedId;
  }

  return transformedId;
}
