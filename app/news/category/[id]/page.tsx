import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms"; // ✅ `getNewsList` を追加
import { notFound } from "next/navigation";
import NewsList from "@/app/_compornents/NewsList";
import Category from "@/app/_compornents/Category"; 
import Pagenation from "@/app/_compornents/Pagenation";
import {NEWS_LIST_LIMIT} from "@/app/_constants";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    let category;

    try {
        category = await getCategoryDetail(params.id);
    } catch (error) {
        console.error("カテゴリ取得エラー:", error);
        return notFound(); // ✅ カテゴリが取得できなかった場合は 404 にする
    }

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
        <p>
            <Category category={category} />の一覧
        </p>
        <NewsList news={news} />;
        <Pagenation
         totalCount={totalCount}
         basePath={'/news/category/${category.id}'}
         />
        </>
    );
}
