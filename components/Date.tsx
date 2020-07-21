import { parseISO, format } from 'date-fns';
const Date: React.FC<{ dateString: string; dateFormat?: string }> = ({ dateString, dateFormat = 'LLLL dd, yyyy' }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>;
};

export default Date;
