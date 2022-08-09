import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
("phosphor-react");

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="imagem"
      />
      <div className={styles.profile}>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHl7bOMTkq7Sw/profile-displayphoto-shrink_200_200/0/1657754985222?e=1665014400&v=beta&t=UV4fqnNbKN40wvpa6xFO4MjEt3jL4xM80XgdXxaOQ7g"
        />

        <strong>Pedro Eduardo</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
