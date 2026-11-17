import { AboutPage } from "../../components/pages/InnerPages";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("he", "about");

export default function Page() {
  return <AboutPage lang="he" />;
}