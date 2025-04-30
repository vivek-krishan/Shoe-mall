export function removeHtmlTags(str) {
  // Handle null or undefined input
  if (!str) return "";

  // Regular expression to match HTML tags
  return str.replace(/<[^>]*>/g, "");
}
