export const createTestGroup = (testGroup: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const projectId = testGroup.projectId;
    firestore
      .collection("testGroups")
      .doc(projectId)
      .collection("testItems")
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

export const updateTestGroup = (testGroup: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const projectId = testGroup.projectId;
    const testItemId = testGroup.testItemId;
    firestore
      .collection("testGroups")
      .doc(projectId)
      .collection("testItems")
      .doc(testItemId)
      .update({
        groupName: testGroup.testCaseGroupName,
        testCases: testGroup.testCaseList
      })
      .then(() => {
        dispatch({ type: "UPDATED_TEST_GROUP", testGroup });
      })
      .catch((err: any) => {
        dispatch({ type: "UPDATE_GROUP_ERROR", err });
      });
  };
};

export const deleteTestGroup = (testGroup: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const projectId = testGroup.idTestGroup;
    const testItemId = testGroup.idItem;
    firestore
      .collection("testGroups")
      .doc(projectId)
      .collection("testItems")
      .doc(testItemId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETED_TEST_GROUP", testGroup });
      })
      .catch((err: any) => {
        dispatch({ type: "DELETE_GROUP_ERROR", err });
      });
  };
};

export const deleteTestGroupCollection = (testGroup: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firestore = getFirestore();
    const projectId = testGroup.projectId;
    firestore
      .collection("testGroups")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETED_TEST_GROUP_COLLECTION", testGroup });
      })
      .catch((err: any) => {
        dispatch({ type: "DELETE_GROUP_COLLECTION_ERROR", err });
      });
  };
};
