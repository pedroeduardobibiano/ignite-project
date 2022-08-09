import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarURL:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHl7bOMTkq7Sw/profile-displayphoto-shrink_200_200/0/1657754985222?e=1665014400&v=beta&t=UV4fqnNbKN40wvpa6xFO4MjEt3jL4xM80XgdXxaOQ7g",
      name: "Pedro Eduardo",
      role: "Dev front-end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL:
        "https://media-exp1.licdn.com/dms/image/C5603AQHbCb8Fp57G2w/profile-displayphoto-shrink_800_800/0/1648495523855?e=1665619200&v=beta&t=YWbfftNm2SgtSShlCfs2TANgSq0dCUw40z0uIEmBmm0",
      name: "Isabelle",
      role: "Dev back end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-07-10 20:00:00'),
  },
];

//iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
