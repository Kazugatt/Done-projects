import { useContext } from 'react';
import { DialogContext, ToastContext } from '../contexts';

export const useDialog = () => {
  const { setOpen } = useContext(DialogContext);

  const showDialog = () => {
    setOpen(true);
  };

  return showDialog;
};
