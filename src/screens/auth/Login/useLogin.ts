import { useState } from "react";
import { login } from "@src/features/user/user.api";
import { useAuthStore } from "@src/state/useAuthStore";
import { useApiMutation } from "@src/hooks/api/useApiMutation";

type LoginForm = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const mutation = useApiMutation({
    mutationFn: login,

    onSuccess: (data) => {
      // save token in zustand + mmkv
      setToken(data.token);
    },

    onError: (error: any) => {
      console.log("Login error:", error.message);
    },
  });

  // Validation logic
  const validate = (values: LoginForm) => {
    const newErrors: Partial<LoginForm> = {};

    if (!values.email) {
      newErrors.email = "Email is required";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const loginUser = (values: LoginForm) => {
    const isValid = validate(values);

    if (!isValid) return;

    mutation.mutate(values);
  };

  return {
    loginUser,
    loading: mutation.isPending,
    errors,
  };
};