import { memo } from "react";
import { useGetAllUsers } from "../api/fetchAllUser";
import style from "./user.module.css";

const UserPage = () => {
  const { data, fetching, error } = useGetAllUsers();

  if (fetching) return <div>ユーザー取得中</div>;
  if (error) return <div>読み込みに失敗しました</div>;

  return (
    <>
      {data?.users.map((user, i) => {
        return (
          <div className={style.card} key={i}>
            <p>ユーザーID: {user.id}</p>
            <p>作成日: {user.created_at}</p>
            <p>名前: {user.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default memo(UserPage);
