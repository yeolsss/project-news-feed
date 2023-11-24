import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../common/firebase";
import News from "../news/News";
import Search from "../search/Search";
import SelectBtn from "../selectBtn/SelectBtn";
import WriteBtn from "../wrtieBtn/WriteBtn";
import * as St from "./newsList.style";

function NewsList() {
  const [news, setNews] = useState([]);
  const [tag, setTag] = useState("#전체");
  const [searchInput, setSearchInput] = useState("");

  const searchFilter = news.filter((n) => {
    return (
      n.title.toUpperCase().includes(searchInput.toUpperCase()) ||
      n.content.toUpperCase().includes(searchInput.toUpperCase())
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      const col = collection(db, "news_feed");
      let querySnapshot;
      if (tag === "#전체") {
        querySnapshot = await getDocs(col);
      } else {
        const q = query(
          col,
          where("tag_name_list", "array-contains-any", [tag])
        );
        querySnapshot = await getDocs(q);
      }

      const initialNews = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        initialNews.push(data);
      });

      setNews([...initialNews]);
    };
    fetchData();
  }, [tag]);

  return (
    <>
      {/* TODO: 검색 */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <St.Container>
        <SelectBtn handleTags={{ tag, setTag }} />
        <St.List>
          <News news={news} setNews={setNews} searchFilter={searchFilter} />
        </St.List>

        <WriteBtn />
      </St.Container>
    </>
  );
}

export default NewsList;
