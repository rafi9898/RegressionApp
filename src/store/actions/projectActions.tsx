export const createProject = (project: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .doc(authorId)
      .collection("projectItems")
      .add({
        projectName: project.projectName,
        projectDesc: project.projectDesc,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err: any) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
