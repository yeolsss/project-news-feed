import React from "react";
import { useNavigate } from "react-router";
import { useRoot } from "../../../context/root.context";
import profileImg from "../assets/profileImg.jpg";
import * as St from "./news.style";

function News({ news, setNews, searchFilter }) {
  const { tags } = useRoot();

  const tagFiltered = news.filter((n) => {
    if (tags === "#전체") {
      return news;
    } else {
      const filter = n.tag_name_list.filter((item) => tags.includes(item));
      return tags.includes(...filter);
    }
  });
  const filterNews = searchFilter || tagFiltered;

  const navigate = useNavigate();
  return (
    <>
      {filterNews.length === 0 ? (
        <St.NewsContainer>관련 기사가 아무것도 없어요!</St.NewsContainer>
      ) : (
        filterNews.map((news) => (
          <St.NewsContainer
            key={news.id}
            onClick={() => {
              navigate(`/detail/${news.id}`);
            }}
          >
            <St.StProfileArea>
              <St.ProfileImg
                src={news.image_path !== "" ? news.image_path : profileImg}
              />
              <div>
                <St.Name>{news.nickname}</St.Name>
                <St.Time>{news.created_at}</St.Time>
              </div>
            </St.StProfileArea>

            <St.NewsArea>
              <div>
                <St.Title>{news.title}</St.Title>
                {news.content.length < 200 ? (
                  <St.Content>{news.content}</St.Content>
                ) : (
                  <St.Content>
                    {news.content.slice(0, 200)}
                    <St.SeeMore>...더보기</St.SeeMore>
                  </St.Content>
                )}
              </div>
            </St.NewsArea>
          </St.NewsContainer>
        ))
      )}
    </>
  );
}

export default News;
