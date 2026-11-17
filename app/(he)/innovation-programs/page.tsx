import { InnovationPage } from "../../components/pages/InnerPages";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("he", "innovation");

export default function Page() {
  return <InnovationPage lang="he" />;
}