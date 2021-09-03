import { helper } from '@ember/component/helper';
import format from 'date-fns/format';
import * as locales from 'date-fns/locale';

export default helper(function formatDate(positional /*, named*/) {
  let locale = positional.length === 3 ? locales[positional[2]] : locales['en'];
  return format(positional[0], positional[1], { locale });
});
