export const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.error(`Invalid date string: ${dateString}`);
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
};
