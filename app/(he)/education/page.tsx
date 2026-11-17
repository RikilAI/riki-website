import { EducationPage } from "../../components/pages/InnerPages";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("he", "education");

export default function Page() {
  return <EducationPage lang="he" />;
}