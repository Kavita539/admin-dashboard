const sortEmployees = (sortBy, data) => {
    let tempData = [...data];
    if (sortBy === "first-name") {
        tempData.sort((a, b) => {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        });
    }

    if (sortBy === "last-name") {
        tempData.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            }
            if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        });
    }

    if (sortBy === "age-ascending") {
        tempData.sort((a, b) => a.age - b.age);
    }

    if (sortBy === "age-descending") {
        tempData.sort((a, b) => b.age - a.age);
    }
    return tempData;
};


const selectFilteredEmployees = (state, data) => {
    let tempData = [...data];
  
  
    if (state.bloodGroup.length > 0) {
      tempData = tempData.filter(employee => state.bloodGroup.includes(employee.bloodGroup));
    }

    if (state.gender.length > 0) {
        tempData = tempData.filter(employee => state.gender.includes(employee.gender));
    }

    if (state.university.length > 0) {
        tempData = tempData.filter(employee => state.university.includes(employee.university));
      }

  
    return tempData;
  };

export {
    sortEmployees,
    selectFilteredEmployees
}