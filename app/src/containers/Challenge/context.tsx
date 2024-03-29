import { ChallengeResponseDTO } from '@/services/types';
import React, { useContext, useReducer } from 'react';
import { includesAll } from './utils';

export interface ChallengeState {
  topics: {
    name: string;
    words: string[];
    solved: boolean;
  }[];
  selected: string[];
  triesMessage: string;
}

enum ActionsType {
  SELECT,
  DISELECT,
  CLEAN_SELECTED,
  SOLVE_CHALLENGE,
}

interface Action {
  type: ActionsType;
  payload?: {
    word?: string;
    topic?: string;
  };
}

const ChallengeContext = React.createContext<{
  state: ChallengeState;
  dispatch: React.Dispatch<Action>;
}>({
  state: {
    topics: [],
    selected: [],
    triesMessage: "",
  },
  dispatch: () => null,
});

export const challengeReducer = (
  state: ChallengeState,
  action: Action,
): ChallengeState => {
  switch (action.type) {
    case ActionsType.SELECT:
      if (!action.payload?.word) throw new Error('word should not be null');
      return {
        ...state,
        selected: [...state.selected, action.payload.word],
      };
    case ActionsType.DISELECT:
      if (!action.payload?.word) throw new Error('word should not be null');
      return {
        ...state,
        selected: state.selected.filter(word => word !== action.payload?.word),
      };
    case ActionsType.CLEAN_SELECTED:
      return {
        ...state,
        selected: [],
        triesMessage: `${state.triesMessage}X`,
      };
    case ActionsType.SOLVE_CHALLENGE:
      if (!action.payload?.topic) throw new Error('topic should not be null');
      const topicIndex = state.topics.findIndex(topic => topic.name === action.payload?.topic);
      const newTopics = state.topics;
      newTopics[topicIndex].solved = true;
      return {
        ...state,
        topics: newTopics,
        selected: [],
        triesMessage: `${state.triesMessage}${topicIndex}`,
      };
    default:
      return state;
  }
};

interface ChallengeProvider extends React.PropsWithChildren {
  challengeData: ChallengeResponseDTO;
}

export const ChallengeProvider = ({
  challengeData,
  children,
}: ChallengeProvider) => {
  const [state, dispatch] = useReducer(challengeReducer, {
    topics: challengeData.topics.map(topic => ({ ...topic, solved: false })),
    selected: [],
    triesMessage: "",
  });

  return (
    <ChallengeContext.Provider value={{ state, dispatch }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallengeContext = () => {
  const { state, dispatch } = useContext(ChallengeContext);

  const select = (word: string) => {
    if (state.selected.length < 3) {
      dispatch({
        type: ActionsType.SELECT,
        payload: { word },
      });
      return;
    }
    const newSelected = [...state.selected, word];
    const topicFound = state.topics.find(({ words }) =>
      includesAll(words, newSelected),
    );
    if (topicFound) {
      dispatch({
        type: ActionsType.SOLVE_CHALLENGE,
        payload: { topic: topicFound.name },
      });
      return;
    }
    dispatch({
      type: ActionsType.CLEAN_SELECTED,
    });
  };

  const diselect = (word: string) =>
    dispatch({
      type: ActionsType.DISELECT,
      payload: { word },
    });

  return {
    ...state,
    select,
    diselect,
    solved: !state.topics.find(({ solved }) => !solved)
  };
};
