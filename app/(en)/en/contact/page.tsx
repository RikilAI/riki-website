import { ContactPage } from "../../../components/pages/InnerPages";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return <ContactPage lang="en" />;
}