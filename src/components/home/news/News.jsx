import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { db } from "../../../common/firebase";
<<<<<<< HEAD
import { useRoot } from "../../../context/root.context";
import profileImg from "../assets/profileImg.jpg";
import * as St from "./news.style";
function News({ news, setNews, searchFilter }) {
  const { userInfo } = useRoot();
  const { nickname, imgStorage } = userInfo;
  const { tags } = useRoot();
=======

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

>>>>>>> 334d68931fdcb12436c24e5f61ba4333b3f12006
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
    if (tags == "#전체") {
      return news;
    } else {
      const filter = n.tag_name_list.filter((item) => tags.includes(item));
      return tags.includes(...filter);
    }
  });
  const filterNews = searchFilter || tagFiltered;

  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  return <></>;
>>>>>>> 334d68931fdcb12436c24e5f61ba4333b3f12006
}

export default News;
