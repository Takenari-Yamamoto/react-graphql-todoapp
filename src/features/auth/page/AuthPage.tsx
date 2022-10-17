import { useAuth0 } from '@auth0/auth0-react';
import { memo, useEffect, useState } from 'react';
import { useLoginUser } from '../api/loginUser';
import { useRegisterUser } from '../api/registerUser';
import style from '../page/authPage.module.css';

const AuthPage = () => {

  return <div className={style.container}></div>;
};

export default memo(AuthPage);
