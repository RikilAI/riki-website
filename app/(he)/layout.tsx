import RootDoc from "../lib/RootDoc";

export default function HebrewLayout({ children }: { children: React.ReactNode }) {
  return <RootDoc lang="he">{children}</RootDoc>;
}
