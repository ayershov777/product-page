export const BOOTSTRAP_XS = 576;
export const BOOTSTRAP_MD = 768;
export const BOOTSTRAP_LG = 992;

export const defaultUrl = "https://via.placeholder.com/350?text=No+Image";
export const defaultAlt = "A placeholder to replace a missing product image.";

export function removeTrailingSpace(text) {
  const match = text.match(/(.*\s*)*\w+/g);
  return match && match[0];
}
