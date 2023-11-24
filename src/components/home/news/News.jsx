import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../common/firebase";

function News() {
  const [news, setNews] = useState([]);

  const [tag, setTag] = useState([
    "#국내",
    "#해외",
    "#프론트엔드",
    "#백엔드",
    "#인공지능",
    "#제품",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "news_feed"));

      const initialNews = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };

        initialNews.push(data);
      });
      setNews(initialNews);
    };
    fetchData();
  }, []);

  // const tagFiltered = news.filter((n) => {
  //   const filter = n.tag_name_list.filter((item) => tag.includes(item));
  //   return tag.includes(...filter);
  // });

  return <></>;
}

export default News;
