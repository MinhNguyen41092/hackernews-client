export function getSourceUrl(url) {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/;
  let match = regex.exec(url);

  if (!match) return "";

  let sourceUrl = match[1] ? match[1] : "#";

  return sourceUrl;
}
