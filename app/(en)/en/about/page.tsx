import { AboutPage } from "../../../components/pages/InnerPages";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("en", "about");

export default function Page() {
  return <AboutPage lang="en" />;
}