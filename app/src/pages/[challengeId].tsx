import Challenge from '@/containers/Challenge';
import { ChallengeProvider } from '@/containers/Challenge/context';
import useGetChallenge from '@/services/useGetChallenge';
import { useRouter } from 'next/router';

const ChallengePage = () => {
  const { query } = useRouter();
  const { data, isLoading, isError } = useGetChallenge(
    query?.challengeId as string | undefined,
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Challenge not found</div>;
  }

  return (
    <ChallengeProvider challengeData={data}>
      <Challenge />
    </ChallengeProvider>
  );
};

export default ChallengePage;
