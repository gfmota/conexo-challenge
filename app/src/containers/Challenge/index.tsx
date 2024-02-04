import { useMemo } from 'react';
import styles from '../../styles/Challenge.module.scss';
import { useChallengeContext } from './context';
import { getEmojiMessage, shuffleIndexes } from './utils';

const Challenge = () => {
  const { topics, selected, select, diselect, triesMessage , solved} = useChallengeContext();

  const shuffledIndexes = useMemo(() => shuffleIndexes(16), []);

  const words = topics.reduce(
        (
          acc: { word: string; solved: boolean; topicInd: number }[],
          { words, solved },
          ind,
        ) => [...acc, ...words.map(word => ({ word, solved, topicInd: ind }))],
        [],
      );

  const onCardClick = (word: string, isSelected: boolean) =>
    isSelected ? diselect(word) : select(word);

  return (
    <div className={styles.container}>
      Tentativas: {triesMessage.length}
      <div className={styles.cardContainer}>
        {shuffledIndexes.map(ind => {
          const { word, solved, topicInd } = words[ind];
          const isSelected = !!selected.find(s => s == word);
          return (
            <div
              key={word}
              className={`
          ${styles.card} 
          ${isSelected && styles.selected} 
          ${solved && styles[`solvedCard${topicInd}`]}`}
              onClick={() => onCardClick(word, isSelected)}
            >
              {word}
            </div>
          );
        })}
      </div>
      {topics.map(({ name, solved }, ind) => (
        <div
          key={name}
          className={solved ? styles[`solvedTopic${ind}`] : styles.hide}
        >
          {name}
        </div>
      ))}
      {solved && getEmojiMessage(triesMessage)}
    </div>
  );
};

export default Challenge;
