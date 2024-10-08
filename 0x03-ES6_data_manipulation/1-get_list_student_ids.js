const getListStudentIds = (listOfStudents) => {
  let listStudentIds = [];
  if (!(listOfStudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listOfStudents.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
