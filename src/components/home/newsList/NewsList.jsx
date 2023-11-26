import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../common/firebase";
import News from "../news/News";
import Search from "../search/Search";
import SelectBtn from "../selectBtn/SelectBtn";
import WriteBtn from "../wrtieBtn/WriteBtn";
import * as St from "./newsList.style";
import { getUsersInfo } from "../../../api/firebase";

function NewsList() {
  const [news, setNews] = useState([]);
  const [tag, setTag] = useState("#전체");
  const [searchInput, setSearchInput] = useState("");
  const searchFilter =
    news.length !== 0
      ? news.filter((n) => {
          return (
            n.title.toUpperCase().includes(searchInput.toUpperCase()) ||
            n.content.toUpperCase().includes(searchInput.toUpperCase())
          );
        })
      : [];

  useEffect(() => {
    (async () => {
      const col = collection(db, "news_feed");
      let querySnapshot;
      let q;
      if (tag === "#전체") {
        q = query(col, orderBy("created_at", "desc"));
      } else {
        q = query(
          col,
          where("tag_name_list", "array-contains-any", [tag]),
          orderBy("created_at", "desc")
        );
      }
      querySnapshot = await getDocs(q);
      const userInfoList = await getUsersInfo();
      const newsWithUserInfo = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const { uid } = doc.data();
          const user = await userInfoList.find(({ uid: _uid }) => _uid === uid);
          return { id: doc.id, ...doc.data(), ...user };
        })
      );

      setNews([...newsWithUserInfo]);
    })();
  }, [tag]);

  return (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <St.Container>
        <SelectBtn handleTags={{ tag, setTag }} />
        <St.List>
          <News
            news={news}
            setNews={setNews}
            searchFilter={searchFilter}
            callerType={"newList"}
          />
        </St.List>

        <WriteBtn />
      </St.Container>
    </>
  );
}

export default NewsList;
