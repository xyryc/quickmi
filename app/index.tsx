import { Redirect } from "expo-router";

export default function Index() {
  // You can add your auth logic here later
  const hasCompletedOnboarding = false;
  const isAuthenticated = false;

  if (!hasCompletedOnboarding) {
    return <Redirect href="/(onboarding)/step1" />;
  }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/signup" />;
  }

  return <Redirect href="/(user)/home" />;
}
