import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "3emrsw9s",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: true,
});
