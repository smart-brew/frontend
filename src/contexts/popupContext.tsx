/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Popup, { PopupProps } from '../components/popup/Popup';
import { closePopup, openPopup } from '../components/popup/PopupFunctions';

const PopupContext = React.createContext<State>({
  close: () => {},
  open: () => {},
});

interface State {
  open: (props: PopupProps) => void;
  close: () => void;
}

const PopupContextProvider: React.FC = ({ children }) => {
  const reference = React.useRef<HTMLDivElement>(null);

  const [value, setValue] = React.useState<State>({
    close: () => {},
    open: () => {},
  });

  const [popup, setPopup] = React.useState<JSX.Element | null>(null);

  // first render - define open and close
  React.useEffect(() => {
    const close = (): void => {
      closePopup(reference);
    };

    const open = ({
      title,
      description,
      onConfirm,
      buttonText,
      buttonType,
      popupType,
    }: PopupProps): void => {
      setPopup(
        <Popup
          title={title}
          description={description}
          onConfirm={() => {
            onConfirm();
            close();
          }}
          buttonText={buttonText}
          buttonType={buttonType}
          popupType={popupType}
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

export const usePopup = (): State => React.useContext(PopupContext);

export default PopupContextProvider;
