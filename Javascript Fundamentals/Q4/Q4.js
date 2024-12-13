function extractDateComponents(pattern, string) {
  const regex = new RegExp(pattern);
  const match = string.match(regex);

  if (match) {
    return {
      day: match[1],
      month: match[2],
      year: match[3],
    };
  } else {
    return null;
  }
}

const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
console.log(extractDateComponents(datePattern, "Today's date is 13-12-2024."));
