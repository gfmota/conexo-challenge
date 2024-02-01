import usePostChallenge from "@/services/usePostChallenge";
import { useForm } from "react-hook-form";

const useCreateChallenge = () => {
    const {register, handleSubmit} = useForm();
    const {mutate} = usePostChallenge({
        onSuccess: (data) => console.log(data),
        onError: (e) => console.log(e)
    });

    const onSubmit = handleSubmit((data: any) => {
        mutate(data);
    })

    return {
        register,
        onSubmit
    }
}

export default useCreateChallenge;