module.exports = (query) => {
  let listOption = [
    {
      name: "ALL",
      value: "",
      class: "",
    },
    {
      name: "active",
      value: "active",
      class: "",
    },
    {
      name: "inactive",
      value: "inactive",
      class: "",
    },
  ];
  if (query.status) {
    const index = listOption.findIndex((items) => {
      return items.value == query.status;
    });
    listOption[index].class = "active";
  }
  return listOption;
};
