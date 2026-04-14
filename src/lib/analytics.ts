import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "./firebase";

export const trackEvent = async (eventName: string, eventParams?: Record<string, any>) => {
  try {
    const analytics = await getFirebaseAnalytics();
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
  } catch (error) {
    console.warn("Failed to log event to Firebase Analytics", error);
  }
};
