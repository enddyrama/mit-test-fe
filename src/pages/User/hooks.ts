import { useState, useEffect } from "react";
import { deleteUser, getAllUser } from "../../service/user";
import { UserType } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUserHook = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sort, setSort] = useState<string>("asc");
  const nav = useNavigate();
  // const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await getAllUser(limit, sort);
    if (res.code === 200 || res.code === 201) {
      setUsers(res.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    const res = await deleteUser(id);
    if (res.code === 200 || res.code === 201) {
      toast.success("Success Delete User");
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Delete User Failed");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [limit, sort]);

  return {
    users,
    loading,
    nav,
    page,
    setPage,
    limit,
    setLimit,
    sort,
    setSort,
    handleDelete,
  };
};
