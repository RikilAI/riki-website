import { TalksPage } from "../../components/pages/InnerPages";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("he", "talks");

export default function Page() {
  return <TalksPage lang="he" />;
}