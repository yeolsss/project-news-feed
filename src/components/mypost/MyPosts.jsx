import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../common/firebase";
import { useRoot } from "../../context/root.context";
import News from "../home/news/News";
import * as St from "./myPost.style";

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userInfo } = useRoot();
  const { uid } = userInfo;

  useEffect(() => {
    if (uid) {
      (async () => {
        const q = query(collection(db, "news_feed"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUserPosts(posts);
      })();
    }
  }, [uid]);

  return (
    <St.Main>
      <St.MyPostsWrapper>
        <News news={userPosts} searchFilter={""} callerType={"MyPost"} />
      </St.MyPostsWrapper>
    </St.Main>
  );
};

export default MyPosts;
