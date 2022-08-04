import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Pedro Eduardo"
            content="
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus temporibus voluptates similique, minima neque, non officiis laudantium ut modi nobis totam ducimus sit ullam perferendis. Ipsam quas eos debitis."
          />
          <Post author="Pedro da silva" content="pos legal" />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
