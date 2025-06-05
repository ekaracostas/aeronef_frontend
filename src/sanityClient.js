import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "3emrsw9s",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
