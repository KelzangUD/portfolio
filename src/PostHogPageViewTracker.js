import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePostHog } from "posthog-js/react";

const PostHogPageViewTracker = () => {
  const location = useLocation();
  const postHog = usePostHog();

  useEffect(() => {
    if (postHog) {
      postHog.capture("$pageview");
    }
  }, [location, postHog]);
  return null;
};

export default PostHogPageViewTracker;
