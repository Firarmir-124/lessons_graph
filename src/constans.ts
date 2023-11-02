export const MONTHS = ['Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек', 'Янв', 'Февр', 'Март'];
export const MONTH_NUMBER = [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2];
export const RANGE_CHECK = (range: number, number: number) => {
  if (range > 30) {
    return true;
  }

  return !(range === number || range < number || number <= 0);
};
export const SET_CLASS = (type: number) => {
  if (type === 1) return `class${type}`;
  else if (type === 2) return `class${type}`;
  else if (type === 3) return `class${type}`;
  else if (type === 4) return `class${type}`;
  else return '';
};
