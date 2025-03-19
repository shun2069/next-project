import Hero from "@/app/_compornents/Hero";
import Sheet from "@/app/_compornents/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}