import React from 'react';
import Popup, { PopupProps } from '../Popups/Popup';
import { closePopup, openPopup } from '../Popups/PopupFunctions';

const PopupContext = React.createContext<State | null>(null);

interface State {
  open: ({ title, description, onConfirm }: PopupProps) => void;
  close: () => void;
}

const PopupContextProvider: React.FC = ({ children }) => {
  const reference = React.useRef<HTMLDivElement>(null);

  const [value, setValue] = React.useState<State | null>(null);

  const [popup, setPopup] = React.useState<JSX.Element | null>(null);

  // first render - define open and close
  React.useEffect(() => {
    const close = (): void => {
      closePopup(reference);
    };

    const open = ({ title, description, onConfirm }: PopupProps): void => {
      setPopup(
        <Popup
          title={title}
          description={description}
          onConfirm={() => {
            onConfirm();
            close();
          }}
          ref={reference}
        />
      );
    };

    setValue({ open, close });
  }, []);

  // on change Popup -> open
  React.useEffect(() => {
    openPopup(reference);
  }, [popup]);

  return (
    <PopupContext.Provider value={value}>
      {children}
      {popup}
    </PopupContext.Provider>
  );
};

export const usePopup = (): State | null => React.useContext(PopupContext);

export default PopupContextProvider;
