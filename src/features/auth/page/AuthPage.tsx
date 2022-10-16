import { memo, useState } from 'react';
import style from '../page/authPage.module.css';

type Props = {
  handleChange: () => void;
};

const AuthPage = ({ handleChange }: Props) => {
  const [formType, setType] = useState<'login' | 'register'>('login');
  const handleSetType = () => {
    if (formType === 'login') {
      setType('register');
    } else {
      setType('login');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <label htmlFor="login" className={style.form}>
          ユーザーID
          <input type="text" name="login" />
        </label>
        <label htmlFor="password" className={style.form}>
          パスワード
          <input type="text" name="password" />
        </label>
        <button onClick={() => handleChange()}>
          {formType === 'login' ? 'ログイン' : '会員登録'}
        </button>
        <p className={style.text} onClick={() => handleSetType()}>
          {formType === 'login' ? 'アカウントないよ！' : 'アカウントあるよ！'}
        </p>
      </div>
    </div>
  );
};

export default memo(AuthPage);
