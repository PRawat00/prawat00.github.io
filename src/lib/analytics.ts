import { analytics } from "./posthog";

// Predefined events for type safety
export const Events = {
  // Blog events
  BLOG_POST_VIEWED: "blog_post_viewed",
  BLOG_POST_SHARED: "blog_post_shared",

  // Component events
  COMPONENT_COPIED: "component_copied",
  COMPONENT_PREVIEWED: "component_previewed",

  // Navigation events
  EXTERNAL_LINK_CLICKED: "external_link_clicked",

  // Contact events
  CONTACT_FORM_SUBMITTED: "contact_form_submitted",

  // Chat events
  CHAT_MESSAGE_SENT: "chat_message_sent",
} as const;

// Type-safe event tracking
export function trackEvent(
  event: keyof typeof Events,
  properties?: Record<string, any>
) {
  analytics.track(Events[event], properties);
}

// Convenience functions
export function trackBlogView(slug: string, title: string) {
  trackEvent("BLOG_POST_VIEWED", { slug, title });
}

export function trackComponentCopy(componentName: string) {
  trackEvent("COMPONENT_COPIED", { component: componentName });
}

export function trackExternalLink(url: string, location: string) {
  trackEvent("EXTERNAL_LINK_CLICKED", { url, location });
}

export function trackComponentPreview(componentName: string) {
  trackEvent("COMPONENT_PREVIEWED", { component: componentName });
}

export function trackContactSubmit(email: string) {
  trackEvent("CONTACT_FORM_SUBMITTED", { email });
}

export function trackChatMessage(messageLength: number) {
  trackEvent("CHAT_MESSAGE_SENT", { length: messageLength });
}
