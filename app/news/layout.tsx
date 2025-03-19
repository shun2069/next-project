import Hero from "@/app/_compornents/Hero";
import Sheet from "@/app/_compornents/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function NewsLayout({children }: Props) {
    return (
        <>
        <Hero title="News" sub="ニュース"　/>
        <Sheet>{children}</Sheet>
        </>
    )
}