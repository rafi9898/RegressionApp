const initState = {
  testCases: [
    {
      id: "1",
      groupName: "Wyszukiwarka",
      testCases: ["Raz", "Dwa", "Trzy", "Cztery"]
    },
    {
      id: "2",
      groupName: "Wyszukiwarka 2",
      testCases: ["Raz", "Dwa", "Cztery"]
    },
    {
      id: "3",
      groupName: "Wyszukiwarka",
      testCases: ["Raz", "Dwa", "Trzy", "Cztery", "Pięć"]
    }
  ]
};

const testCaseReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_TEST_GROUP":
      console.log("created test group", action.testGroup);
      window.location.href = "/testcase/1";
      return state;
    case "CREATE_GROUP_ERROR":
      console.log("Create group error", action.err);
      return state;
    default:
      return state;
  }
};

export default testCaseReducer;
