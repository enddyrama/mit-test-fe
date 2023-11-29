import { useState, useEffect } from "react";
import { getUserById, patchEditUser, postAddUser } from "../../../service/user";
import { UserType } from "../../../types/user";
import * as formik from "formik";
import * as yup from "yup";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useUserDetailHook = () => {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(true);
  const params = useParams();
  const nav = useNavigate();
  const { id } = params;
  const { Formik } = formik;
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.object().shape({
      firstname: yup.string().required(),
      lastname: yup.string().required(),
    }),
    address: yup.object().shape({
      city: yup.string(),
      street: yup.string(),
      number: yup.string(),
      zipcode: yup.string(),
      geolocation: yup.object().shape({
        lat: yup.string(),
        long: yup.string(),
      }),
    }),
    phone: yup.string(),
  });

  const handleOnSubmit = async (e: any) => {
    setLoading(true);

    if (id === "0") {
      const res = await postAddUser(e);
      if (res.code === 200 || res.code === 201) {
        nav("/user");
        setLoading(false);
        toast.success("Create User Success !");
      } else {
        toast.error("Create User Failed !");
      }
    } else {
      const res = await patchEditUser(e, id ? id : "");
      if (res.code === 200 || res.code === 201) {
        nav("/user");
        setLoading(false);
        toast.success("Edit User Success !");
      } else {
        toast.error("Edit User Failed !");
      }
    }
  };
  // const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    const res = await getUserById(id ? id : "0");
    if (res.code === 200 || res.code === 201) {
      setUser(res.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id !== "0") {
      fetchUser();
    } else {
      setEdit(false);
    }
  }, [id]);

  return {
    user,
    loading,
    Formik,
    schema,
    handleOnSubmit,
    edit,
    setEdit,
    id,
  };
};
