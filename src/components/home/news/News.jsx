import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { db } from "../../../common/firebase";
import { useRoot } from "../../../context/root.context";
import profileImg from "../assets/profileImg.jpg";
import * as St from "./news.style";

function News({ news, setNews, searchFilter, tag }) {
  const { userInfo } = useRoot();
  const { nickname, imgStorage } = userInfo;

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

  const tagFiltered = news.filter((n) => {
    if (tag == "#전체") {
      return news;
    } else {
      const filter = n.tag_name_list.filter((item) => tag.includes(item));
      return tag.includes(...filter);
    }
  });
  const filterNews = searchFilter && tagFiltered;

  const navigate = useNavigate();

  return (
    <>
      {filterNews.length === 0 ? (
        <St.NewsContainer>관련 기사가 아무것도 없어요!</St.NewsContainer>
      ) : (
        filterNews.map((n) => {
          return (
            <St.NewsContainer
              key={n.id}
              onClick={() => {
                navigate(`/detail/${n.id}`);
              }}
            >
              <St.StProfileArea>
                <St.ProfileImg src={imgStorage ? imgStorage : profileImg} />
                <div>
                  <St.Name>{nickname}</St.Name>
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
            </St.NewsContainer>
          );
        })
      )}
    </>
  );
}

export default News;
