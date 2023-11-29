import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postLogin } from "../../service/auth";
import { setAuthInfo } from "../../utils";
import * as formik from 'formik';
import * as yup from 'yup';

export const useLoginHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { Formik } = formik;
  const nav = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const handleOnSubmit = async (e: any) => {
    setLoading(true);
    const res = await postLogin(e);
    if (res.code === 200 || res.code === 201) {
      setLoading(false);
      toast.success("Login Success");
      setAuthInfo(res.data.token);
      nav("/user");
      location.reload();
    } else {
      toast.error(res.message);
      setLoading(false);
    }
  };
  return {
    handleOnSubmit,
    schema,
    nav,
    loading,
    setLoading,
    Formik
  };
};
