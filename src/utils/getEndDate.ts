import dayjs from 'dayjs';

export const getEndDate = () => {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 5);
  return dayjs(endDate).format('YYYY-MM-DD');
};
