// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c225c2f8e42541562297bab67258fca3@sentry.joinelevatenow.co.in/6",
  environment: process.env.NODE_ENV,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // fitler local errors
  beforeSend(event) {
    if (event.request?.url?.includes('localhost') || process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' || process.env.NEXT_PUBLIC_ENVIRONMENT === "staging") {
      return null;
    }
    return event;
  },

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
