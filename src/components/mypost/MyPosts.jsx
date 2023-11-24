import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../common/firebase";
import { useRoot } from "../../context/root.context";

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userInfo } = useRoot();

  useEffect(() => {
    const fetchUserPosts = async () => {
      const q = query(
        collection(db, "news_feed"),
        where("uid", "==", userInfo.uid)
      );
      const querySnapshot = await getDocs(q);
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserPosts(posts);
    };

    fetchUserPosts();
  }, [userInfo.uid]);

  return (
    <div>
      <div>
        {userPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
