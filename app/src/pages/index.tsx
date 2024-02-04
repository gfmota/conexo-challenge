import Dialog from '@/containers/Dialog';
import styles from '../styles/CreateChallenge.module.scss';
import useCreateChallenge from '@/hooks/useCreateChallenge';
import CopyButton from '@/containers/CopyButton';

const CreateChallenge = () => {
  const { register, onSubmit, errors, link } = useCreateChallenge();
  console.log(errors)

  return (
    <>
    {link && <Dialog>
      <p>Conexo criado com sucesso, envie os links para seus amigos</p>
        <p>{link}</p>
        <CopyButton copyMessage={link} />
      </Dialog>}
    <p className={styles.title}>Criar desafio</p>
    <form onSubmit={onSubmit}>
      {[1, 2, 3, 4].map(topicValue => (
        <div className={styles.topicForms} key={topicValue}>
          <input
            className={styles.textInput}
            {...register(`topic${topicValue}`, { required: true })}
            placeholder={`Tópico ${topicValue}`}
          />
          <div className={styles.wordForms}>
            {[1, 2, 3, 4].map(wordValue => (
              <input
                className={styles.textInput}
                key={wordValue}
                {...register(`word${topicValue}${wordValue}`, { required: true })}
                placeholder={`Palavra ${wordValue}`}
              />
            ))}
          </div>
        </div>
      ))}
      {Object.keys(errors).length > 0 && <p>É preciso preecher todos os campos</p>}
      <input type="submit" value="Criar" className={styles.submitButton} />
    </form>
    </>
  );
};

export default CreateChallenge;
