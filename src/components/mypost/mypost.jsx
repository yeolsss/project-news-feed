import "firebase/firestore";
import React, { useState } from "react";
import { useRoot } from "../../context/root.context";

const MyPost = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userInfo } = useRoot();

  return (
    <div>
      <div>
        {/* Display user posts */}
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

export default MyPost;
