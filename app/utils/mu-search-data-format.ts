export const parseMuSearchDateToDate = (
  input: string | string[] | undefined
): Date | undefined => {
  // Check if input is undefined or an empty array
  if (!input || (Array.isArray(input) && input.length === 0)) {
    return undefined;
  }

  // Always take the first element if input is an array
  if (Array.isArray(input)) {
    return parseMuSearchDateToDate(input[0]);
  }

  // Attempt to parse the input string into a Date
  const date = new Date(input);

  // Check if the parsed date is valid
  if (isNaN(date.getTime())) {
    return undefined;
  }

  return date;
};