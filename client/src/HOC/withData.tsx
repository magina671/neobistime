import React from "react";

const withDataContainer = (Component: any) => {
  const departments = [
    { value: "8", label: "Android" },
    { value: "6", label: "C#" },
    { value: "7", label: "Design" },
    { value: "5", label: "Frontend" },
    { value: "9", label: "IOS" },
    { value: "4", label: "Java/Kotlin" },
    { value: "2", label: "NodeJS" },
    { value: "3", label: "PM" },
    { value: "1", label: "Python" },
  ];
  const selectDepartments = [
    { value: "1,2,3,4,5,6,7,8,9", label: "All" },
    ...departments,
  ];
  const yearsMonth = [
    { value: "0", label: "Январь" },
    { value: "1", label: "Февраль" },
    { value: "2", label: "Марь" },
    { value: "3", label: "Апрель" },
    { value: "4", label: "Май" },
    { value: "5", label: "Июнь" },
    { value: "6", label: "Июль" },
    { value: "7", label: "Август" },
    { value: "8", label: "Сентябрь" },
    { value: "9", label: "Остябрь" },
    { value: "10", label: "Ноябрь" },
    { value: "11", label: "Декабрь" },
  ];
  const withData = (props: any) => {
    return (
      <Component
        departments={departments}
        selectDepartments={selectDepartments}
        yearsMonth={yearsMonth}
      />
    );
  };
  return withData;
};

export default withDataContainer;
