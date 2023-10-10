const admin = require("firebase-admin");

const checkUserTextInputCount = async (userId) => {
  const userRef = admin.firestore().collection("users").doc(userId);
  const userDoc = await userRef.get();

  if (userDoc.exists) {
    return userDoc.data().textInputCount || 0;
  }
  return 0; // default to 0 if user not found
};

const updateUserTextInputCount = async (userId) => {
  const userRef = admin.firestore().collection("users").doc(userId);
  try {
    await userRef.update({
      textInputCount: admin.firestore.FieldValue.increment(1),
    });
    console.log(`Successfully incremented textInputCount for user: ${userId}`);
  } catch (error) {
    console.error(
      `Failed to update textInputCount for user: ${userId}. Error:`,
      error
    );
  }
};

const checkUserSubscriptionStatus = async (userId) => {
  const userRef = admin.firestore().collection("users").doc(userId);
  const userDoc = await userRef.get();

  if (userDoc.exists) {
    return userDoc.data().subscriptionStatus || "inactive";
  }
  return "inactive"; // default to inactive if user not found
};

module.exports = {
  checkUserTextInputCount,
  updateUserTextInputCount,
  checkUserSubscriptionStatus,
};
