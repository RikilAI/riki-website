import RootDoc from "../lib/RootDoc";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDoc lang="en">{children}</RootDoc>;
}
