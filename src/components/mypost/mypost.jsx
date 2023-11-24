import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../common/firebase";

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUserPosts = async () => {
      const q = query(collection(db, "news_feed"));
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
  }, []);
  //경로 설정 필요
  const handlePostClick = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <div>
      {/* Display user posts */}
      {userPosts.map((post) => (
        <button key={post.id} onClick={() => handlePostClick(post.id)}>
          {post.title}
        </button>
      ))}
    </div>
  );
};

export default MyPosts;
