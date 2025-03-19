import Sheet from "@/app/_compornents/Sheet";
import Hero from "@/app/_compornents/Hero";

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
 return (
 <>
 <Hero title="Members" sub="メンバー"　/>
 <Sheet>{children}</Sheet>
 </>
 );
}