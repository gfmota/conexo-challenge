import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { ChallengeResponseDTO } from './types';

const getChallenge = async (challengeId?: string) => {
  if (!challengeId) throw new Error('challengeId is not valid');
  const response = await fetch(
    `http://localhost:8080/challenge/${challengeId}`,
  );
  return await response.json();
};

const useGetChallenge = (
  challengeId?: string,
  options?: UseQueryOptions<ChallengeResponseDTO, Error, any>,
) =>
  useQuery({
    queryFn: () => getChallenge(challengeId),
    queryKey: ['getChallenge', challengeId],
    ...options,
  });

export default useGetChallenge;
