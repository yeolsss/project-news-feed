import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../../../common/firebase";
import * as St from "./news.style";

function News() {
  const [news, setNews] = useState([]);

  const [tag, setTag] = useState("#전체");

  const onActiveTag = (event) => {
    if (event.target === event.currentTarget) return;
    setTag(event.target.textContent);
  };

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

  const navigate = useNavigate();

  return (
    <St.Container>
      <St.BtnContainer onClick={onActiveTag}>
        <St.SelectBtn $activeTag={tag}>#전체</St.SelectBtn>
        <St.SelectBtn $activeTag={tag}>#국내</St.SelectBtn>
        <St.SelectBtn $activeTag={tag}>#해외</St.SelectBtn>
        <St.SelectBtn $activeTag={tag}>#프론트엔드</St.SelectBtn>
        <St.SelectBtn $activeTag={tag}>#백엔드</St.SelectBtn>
        <St.SelectBtn $activeTag={tag}>#인공지능</St.SelectBtn>
        <St.SelectBtn $activeTag={tag}>#제품</St.SelectBtn>
      </St.BtnContainer>

      <ul>
        {tagFiltered.length === 0 ? (
          <St.NewsContainer>
            <St.NoneText>해당 카테고리에는 아직 기사가 없어요!</St.NoneText>
          </St.NewsContainer>
        ) : (
          tagFiltered.map((n) => {
            return (
              <St.NewsContainer
                key={n.id}
                onClick={() => {
                  navigate(`/detail/${n.id}`);
                }}
              >
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
              </St.NewsContainer>
            );
          })
        )}
      </ul>
      <St.WriteContainer>
        <St.Notice>⭐거창하지 않아도 괜찮아요</St.Notice>
        <St.Notice>⭐뉴스 링크 & 코멘트 OK</St.Notice>
        <St.Notice>⭐뉴스 전문 스크랩 OK</St.Notice>
        <St.WriteBtn
          onClick={() => {
            navigate("/write");
          }}
        >
          기사쓰기
        </St.WriteBtn>
      </St.WriteContainer>
    </St.Container>
  );
}

export default News;
