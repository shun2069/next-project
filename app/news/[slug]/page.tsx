import { notFound } from "next/navigation";
import ButtonLink from "@/app/_compornents/ButtonLink";
import Article from "@/app/_compornents/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";


type Props = {
    params: { // ✅ 小文字にする
        slug: string;
    };
    searchParams: {
        dk?: string;
    }
};

export default async function Page({params, searchParams}:Props) {
    const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
        <Article data={data} />
        <div className={styles.footer}>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </div>
        </>
    );
}
