const initState = {
  testCases: [
    {
      id: "1",
      projectName: "Allegro",
      projectDesc: "bla bla bla",
      authorId: "123456"
    }
  ]
};

const projectReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created test group", action.testGroup);
      window.location.href = "/testcases";
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Create group error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
