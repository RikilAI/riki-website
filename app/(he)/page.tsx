import HomePage from "../components/pages/HomePage";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("he", "home");

export default function Page() {
  return <HomePage lang="he" />;
}