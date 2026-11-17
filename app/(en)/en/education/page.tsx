import { EducationPage } from "../../../components/pages/InnerPages";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("en", "education");

export default function Page() {
  return <EducationPage lang="en" />;
}