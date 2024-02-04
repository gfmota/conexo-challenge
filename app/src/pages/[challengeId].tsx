import Challenge from '@/containers/Challenge';
import { ChallengeProvider } from '@/containers/Challenge/context';
import { useLoading } from '@/containers/Loading';
import useGetChallenge from '@/services/useGetChallenge';
import { useRouter } from 'next/router';

const ChallengePage = () => {
  const { query } = useRouter();
  const { setIsLoading } = useLoading()
  const { data, isLoading, isSuccess, isError } = useGetChallenge(
    query?.challengeId as string | undefined,
  );
  setIsLoading(isLoading);

  if (isError) {
    return <div>Challenge not found</div>;
  }

  return isSuccess && (
    <ChallengeProvider challengeData={data}>
      <Challenge />
    </ChallengeProvider>
  );
};

export default ChallengePage;
