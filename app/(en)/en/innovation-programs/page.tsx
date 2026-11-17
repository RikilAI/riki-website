import { InnovationPage } from "../../../components/pages/InnerPages";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("en", "innovation");

export default function Page() {
  return <InnovationPage lang="en" />;
}