import { ProjectsPage } from "../../../components/pages/InnerPages";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("en", "projects");

export default function Page() {
  return <ProjectsPage lang="en" />;
}