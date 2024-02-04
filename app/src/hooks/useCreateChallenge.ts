import { useLoading } from '@/containers/Loading';
import usePostChallenge from '@/services/usePostChallenge';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useCreateChallenge = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [link, setLink] = useState<string>("")
  const {setIsLoading} = useLoading();
  const { mutate } = usePostChallenge({
    onSuccess: ({id}) => {
      setLink(`https://conexo-challenge.vercel.app/${id}`);

    },
    onError: e => console.log(e),
    onSettled: () => setIsLoading(false)
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log(errors)
    mutate(data);
    setIsLoading(true);
  });

  return {
    register,
    onSubmit,
    errors,
    link
  };
};

export default useCreateChallenge;
