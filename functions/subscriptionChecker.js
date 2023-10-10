const {
  checkUserTextInputCount,
  updateUserTextInputCount,
  checkUserSubscriptionStatus,
} = require("./firebaseHelpers");

const { createCheckoutSession } = require("./stripeHandler");

const verifyAccess = async (userId) => {
  let stripeSessionId = null;

  // Check if the user has an active subscription
  const subscriptionStatus = await checkUserSubscriptionStatus(userId);

  // If the user's subscription is not active
  if (subscriptionStatus !== "active") {
    // Increment the text input count
    await updateUserTextInputCount(userId);
    const updatedCount = await checkUserTextInputCount(userId);

    // If after incrementing, the count is 3 or more, create a Stripe checkout session
    if (updatedCount >= 3) {
      const sessionResponse = await createCheckoutSession({ body: { userId } }); // This might need adjustment based on the actual structure of createCheckoutSession
      stripeSessionId = sessionResponse.sessionId;
      return {
        accessGranted: false,
        stripeSessionId,
      };
    }
  }

  // If the user has an active subscription or the count is less than 3
  return { accessGranted: true };
};

module.exports = {
  verifyAccess,
};
