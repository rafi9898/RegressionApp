const initState = {
  testCases: [
    {
      regressionTitle: "Regression Title",
      regressionProject: "Regression Project",
      regressionStatus: 0,
      regressionTestCases: ["123213213", "213213213"],
      authorId: "123456789",
      createdAt: new Date()
    }
  ]
};

const projectReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_NEW_REGRESSION":
      window.location.href = "/regression";
      return state;
    case "CREATE_REGRESSION_ERROR":
      console.log("Create project error", action.err);
      return state;
    case "UPDATED_REGRESSION":
      window.location.href = "/regression";
      return state;
    case "UPDATE_REGRESSION_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
