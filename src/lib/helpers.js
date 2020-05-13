import itemBg1B from '../assets/images/itemBg-1B.png';
import itemBg2B from '../assets/images/itemBg-2B.png';
import itemBg3B from '../assets/images/itemBg-3B.png';
import itemBg4B from '../assets/images/itemBg-4B.png';
import itemBg1W from '../assets/images/itemBg-1W.png';
import itemBg2W from '../assets/images/itemBg-2W.png';
import itemBg3W from '../assets/images/itemBg-3W.png';
import itemBg4W from '../assets/images/itemBg-4W.png';

/**
 * @description Generates UUIDv4(GUID)
 * @return {string}
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0; const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
/**
 * Returns dark option icon
 * @param {number} number
 * @return {undefined}
 */
export function getBlackBackground(number) {
  switch (number) {
    case 0:
      return itemBg1B;
    case 1:
      return itemBg2B;
    case 2:
      return itemBg3B;
    case 3:
      return itemBg4B;
    default:
      return undefined;
  }
}
/**
 * Returns white option icon
 * @param {number} number
 * @return {undefined}
 */
export function getWhiteBackground(number) {
  switch (number) {
    case 0:
      return itemBg1W;
    case 1:
      return itemBg2W;
    case 2:
      return itemBg3W;
    case 3:
      return itemBg4W;
    default:
      return undefined;
  }
}
