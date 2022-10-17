import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from '../features/auth/types/type';

export const useAuth = () => useAuth0<Profile>();
