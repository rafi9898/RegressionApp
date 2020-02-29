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
      window.location.href = `/testcase/${action.testGroup.projectId}`;
      return state;
    case "CREATE_GROUP_ERROR":
      console.log("Create group error", action.err);
      return state;
    case "UPDATED_TEST_GROUP":
      window.location.href = `/testcase/${action.testGroup.projectId}`;
      return state;
    case "UPDATE_GROUP_ERROR":
      console.log("Update group error", action.err);
      return state;
    case "DELETED_TEST_GROUP":
      return state;
    case "DELETE_GROUP_ERROR":
      console.log("Delete group error", action.err);
      return state;
    case "DELETED_TEST_GROUP_COLLECTION":
      return state;
    case "DELETE_GROUP_COLLECTION_ERROR":
      console.log("Delete project error", action.err);
      return state;
    default:
      return state;
  }
};

export default testCaseReducer;
