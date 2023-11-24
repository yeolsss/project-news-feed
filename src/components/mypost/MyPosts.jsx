// import "firebase/firestore";
// import React from "react";

// //Firebase 설정 정보 설정: firebaseConfig 객체에 실제 Firebase 프로젝트의 설정 정보를 제공
// //사용자 인증: firebase.auth().currentUser를 통해 현재 사용자를 가져오는 부분. 이전에 Firebase 인증이 설정되었는지 확인
// //Firestore 쿼리: db.collection('posts')를 사용하여 'posts' 컬렉션에서 사용자의 글을 가져오기. 여기서 'userId' 필드를 사용하여 현재 사용자의 UID와 일치하는 문서를 가져오기

// const MyPosts = () => {
//   const [userPosts, setUserPosts] = useState([]);

// import { collection, getDocs, query, where } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { db } from "../../common/firebase";
// import { useRoot } from "../../context/root.context";

// const MyPosts = () => {
//   const [userPosts, setUserPosts] = useState([]);
//   const { userInfo } = useRoot();

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       const q = query(
//         collection(db, "news_feed"),
//         where("uid", "==", userInfo.uid)
//       );
//       const querySnapshot = await getDocs(q);
//       const posts = [];
//       querySnapshot.forEach((doc) => {
//         posts.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//       setUserPosts(posts);
//     };

//     fetchUserPosts();
//   }, [userInfo.uid]);

//   return (
//     <div>
//       <div>
//         {userPosts.map((post) => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyPosts;
