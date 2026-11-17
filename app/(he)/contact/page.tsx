import { ContactPage } from "../../components/pages/InnerPages";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("he", "contact");

export default function Page() {
  return <ContactPage lang="he" />;
}