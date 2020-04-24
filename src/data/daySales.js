const startHour = 7;
const endHour = 22;
const minVisitors = 20;
const maxVisitors = 100; 

const createLabels = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

export const labels = createLabels(startHour, endHour);

const createSales = (min, max) => {
  let result = [];
  for (let i = 0; i < (endHour - startHour + 1); i++) {
    result.push(parseInt(Math.random() * (max - min) + min));
  }
  return result;
};

export const hourlyVisitors = createSales(minVisitors, maxVisitors);
