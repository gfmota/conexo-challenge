import { UseMutationOptions, useMutation } from "@tanstack/react-query";

const postChallenge = async (challengeBody: any) => {
    const body = JSON.stringify(challengeBody);
    const response = await fetch("http://localhost:8080/challenge", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': body.length.toString(),
          host: 'localhost',
        },
        body,
    });
    return await response.json();
}

const usePostChallenge = (options?: UseMutationOptions<unknown, Error, any, unknown>) => 
    useMutation({
        mutationFn: postChallenge,
        mutationKey: ['postChallenge'],
        ...options,
    })

export default usePostChallenge;