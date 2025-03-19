import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_compornents/NewsList";
import Pagenation from "@/app/_compornents/Pagenation";
import SearchField from "@/app/_compornents/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";

export default async function Page() {
    const current = 1; // もしくは、動的に取得する

    const {contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} current={current} />
    </>
    );
}