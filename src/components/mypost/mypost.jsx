// MyPosts.jsx

import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { db } from "../../common/firebase";
import { useRoot } from "../../context/root.context";

const PostsContainer = styled.div`
  /* 스타일 추가 */
`;

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userInfo } = useRoot();
  const history = useHistory();

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

  const handlePostButtonClick = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <PostsContainer>
      {/* Display user posts */}
      {userPosts.map((post) => (
        <button key={post.id} onClick={() => handlePostButtonClick(post.id)}>
          {post.title}
        </button>
      ))}
    </PostsContainer>
  );
};

export default MyPosts;
