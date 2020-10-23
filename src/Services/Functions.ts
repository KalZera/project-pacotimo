import moment from 'moment';

export const convertDate = (date:number) => {
  // dessa forma será feita a conversão para 10/05/2020 sendo o correto 05/10/2020
  const dateString = moment(date).format("L").split('/');
  const formatBR = `${dateString[1]}/${dateString[0]}/${dateString[2]}`;
  return formatBR;
}