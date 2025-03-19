import { notFound } from "next/navigation";
import ButtonLink from "@/app/_compornents/ButtonLink";
import Article from "@/app/_compornents/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export const revalidate = 0;

type Props = {
    params: { // ✅ 小文字にする
        slug: string;
    };
    searchParams: {
        dk?: string;
    }
};

export default async function Page({ params, searchParams }: Props) {
    console.log("Slug:", params.slug);  // ✅ 追加
    console.log("Draft Key:", searchParams.dk);  // ✅ Draft Key の確認用

    const data = await getNewsDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch((error) => {
        console.error("API fetch error:", error);
        notFound();
    });

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}
