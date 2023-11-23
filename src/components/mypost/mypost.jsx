import firebase from "firebase/app";
import "firebase/firestore";
import React, { useEffect, useState } from "react";

//Firebase 설정 정보 설정: firebaseConfig 객체에 실제 Firebase 프로젝트의 설정 정보를 제공
//사용자 인증: firebase.auth().currentUser를 통해 현재 사용자를 가져오는 부분. 이전에 Firebase 인증이 설정되었는지 확인
//Firestore 쿼리: db.collection('posts')를 사용하여 'posts' 컬렉션에서 사용자의 글을 가져오기. 여기서 'userId' 필드를 사용하여 현재 사용자의 UID와 일치하는 문서를 가져오기

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Firebase 초기화
    const firebaseConfig = {
      // Firebase 설정 정보
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // 인증된 사용자의 UID 가져오기 (이 부분은 Firebase의 인증 메서드를 사용하여 얻을 수 있음)
    const user = firebase.auth().currentUser;
    const uid = user ? user.uid : null;

    if (uid) {
      // Firestore에서 해당 사용자의 글 가져오기g
      const db = firebase.firestore();
      db.collection("posts")
        .where("userId", "==", uid) // 'userId' 필드가 현재 사용자의 UID와 일치하는 문서들 가져오기
        .get()
        .then((querySnapshot) => {
          const posts = [];
          querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() });
          });
          setUserPosts(posts); // 사용자의 글을 상태에 업데이트
        })
        .catch((error) => {
          console.error("Error fetching user posts: ", error);
        });
    }
  }, []);

  return (
    <div>
      <div>
        {/* 사용자의 글을 보여주는 부분 */}
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
