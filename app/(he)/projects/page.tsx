import { ProjectsPage } from "../../components/pages/InnerPages";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("he", "projects");

export default function Page() {
  return <ProjectsPage lang="he" />;
}