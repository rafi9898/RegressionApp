export const createTestGroup = (testGroup: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("testGroups")
      .add({
        groupName: testGroup.testGroupName,
        testCases: testGroup.testCaseList,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_TEST_GROUP", testGroup });
      })
      .catch((err: any) => {
        dispatch({ type: "CREATE_GROUP_ERROR", err });
      });
  };
};
