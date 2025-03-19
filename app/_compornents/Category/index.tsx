import type { Category } from "@/app/_libs/microcms"; // 型のインポート
import styles from "./index.module.css";

type Props = {
    category: Category;
};

export default function Category({ category }: Props) { // 名前を変更
    return <span className={styles.tag}>{category.name}</span>;
}
