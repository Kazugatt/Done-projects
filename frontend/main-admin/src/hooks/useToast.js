import { useContext } from 'react';
import { ToastContext } from '../contexts';

export const useToast = () => {
  const { setType, setMessage, setOpen } = useContext(ToastContext);

  const showToast = (msg = 'Alert message!', type = 'success') => {
    setType(type);
    setMessage(msg);
    setOpen(true);
  };

  return showToast;
};
