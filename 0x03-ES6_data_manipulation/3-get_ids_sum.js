const getStudentIdsSum = (studentsList) => studentsList.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum;
