export const conjuctJoin = (words:string[]) =>
  [words.slice(0, words.length - 1).join(', '), words.slice(words.length - 1)].filter(sentence => sentence !== '').join(' and ')