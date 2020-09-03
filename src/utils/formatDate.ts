import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

const formatDate = (date: Date): string =>
  format(parseISO(String(date)), 'P', {
    locale: pt,
  });

export default formatDate;
