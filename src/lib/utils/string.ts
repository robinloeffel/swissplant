const segmenter = new Intl.Segmenter();
const segment = (input: string) =>
  [...segmenter.segment(input)]
    .map(item => item.segment);

export const reverse = (input: string) =>
  segment(input)
    .toReversed()
    .join("");
