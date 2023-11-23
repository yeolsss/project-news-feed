import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../common/firebase";
import * as St from "./news.style";

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

  return (
    <>
      {news.map((n) => {
        return (
          <St.Container key={n.id}>
            <St.StProfileArea>
              <St.ProfileImg src={n.image_path} />
              <div>
                <St.Name>{n.uid}</St.Name>
                <St.Time>{n.created_at}</St.Time>
              </div>
            </St.StProfileArea>

            <St.NewsArea>
              <div>
                <St.Title>{n.title}</St.Title>
                {n.content.length < 200 ? (
                  <St.Content>{n.content}</St.Content>
                ) : (
                  <St.Content>
                    {n.content.slice(0, 200)}
                    <St.SeeMore>...더보기</St.SeeMore>
                  </St.Content>
                )}
              </div>
            </St.NewsArea>
          </St.Container>
        );
      })}
    </>
  );
}

export default News;
