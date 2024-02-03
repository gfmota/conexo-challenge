import styles from '../styles/CreateChallenge.module.scss';
import useCreateChallenge from '@/hooks/useCreateChallenge';

const CreateChallenge = () => {
  const { register, onSubmit } = useCreateChallenge();

  return (
    <form onSubmit={onSubmit}>
      <p>Criar desafio</p>
      {[1, 2, 3, 4].map(topicValue => (
        <div className={styles.topicForms} key={topicValue}>
          <input
            className={styles.textInput}
            {...register(`topic${topicValue}`)}
            placeholder={`Tópico ${topicValue}`}
          />
          <div className={styles.wordForms}>
            {[1, 2, 3, 4].map(wordValue => (
              <input
                className={styles.textInput}
                key={wordValue}
                {...register(`word${topicValue}${wordValue}`)}
                placeholder={`Palavra ${wordValue}`}
              />
            ))}
          </div>
        </div>
      ))}
      <input type="submit" value="Criar" className={styles.submitButton} />
    </form>
  );
};

export default CreateChallenge;
