export const createTestGroup = (testGroup: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    firestore
      .collection("testGroups")
      .add({
        groupName: testGroup.testGroupName,
        testCases: testGroup.testCaseList,
        authorFirstName: "Rafał",
        authorLastName: "Podraza",
        authorId: 12345,
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
