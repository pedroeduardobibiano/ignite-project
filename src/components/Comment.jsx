import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4D03AQHl7bOMTkq7Sw/profile-displayphoto-shrink_200_200/0/1657754985222?e=1665014400&v=beta&t=UV4fqnNbKN40wvpa6xFO4MjEt3jL4xM80XgdXxaOQ7g" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Eduardo</strong>
              <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">
                Cerda de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
    
      
        <footer className={styles.aplaudir}>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
