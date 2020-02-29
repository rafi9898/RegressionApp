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

export const deleteProject = (project: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const authorId = project.authorId;
    const projectId = project.projectId;
    firestore
      .collection("projects")
      .doc(authorId)
      .collection("projectItems")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETED_PROJECT", project });
      })
      .catch((err: any) => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
};
