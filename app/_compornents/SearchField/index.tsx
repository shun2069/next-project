"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Suspense} from "react";

function SearchFieldComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState("");

    useEffect(() => {
        setQuery(searchParams.get("q") ?? ""); // クエリパラメータから取得
    }, [searchParams]); // searchParams が変わるたびに query を更新

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem('q');
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set('q', q.value.trim());
            router.push(`/news/search?${params.toString()}`);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.search}>
                <Image src="/search.svg" alt="検索" width={16} height={16} loading="eager" />
                <input
                    type="text"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </label>
        </form>
    );
}

export default function SearchField (){
    return (
        <Suspense>
        <SearchFieldComponent />
        </Suspense>
    )
}