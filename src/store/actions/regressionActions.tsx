export const createRegression = (regression: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("regression")
      .doc(authorId)
      .collection("regressionItem")
      .add({
        regressionTitle: regression.regressionTitle,
        regressionProject: regression.regressionProject,
        regressionProjectName: regression.regressionProjectName,
        regressionStatus: 0,
        choosedTestCases: regression.allTestCases,
        statusChoosedTestCases: regression.statusChoosedTestCases,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_NEW_REGRESSION", regression });
      })
      .catch((err: any) => {
        dispatch({ type: "CREATE_REGRESSION_ERROR", err });
      });
  };
};

export const updateRegression = (regression: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const regressionId = regression.regressionId;
    firestore
      .collection("regression")
      .doc(authorId)
      .collection("regressionItem")
      .doc(regressionId)
      .update({
        regressionStatus: 1,
        statusChoosedTestCases: regression.statusTestCases
      })
      .then(() => {
        dispatch({ type: "UPDATED_REGRESSION", regression });
      })
      .catch((err: any) => {
        dispatch({ type: "UPDATE_REGRESSION_ERROR", err });
      });
  };
};
