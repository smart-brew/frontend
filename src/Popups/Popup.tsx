import React from 'react';

import PopupButtons from './PopupComponents/PopupButtons';
import { closePopup } from './PopupFunctions';

interface Props {
  title: string;
  description: string;
  onConfirm: () => void;
}

const Popup = React.forwardRef<HTMLDivElement, Props>(
  ({ title, description, onConfirm }: Props, reference) => {
    const ref = reference as React.MutableRefObject<HTMLDivElement>;

    return (
      <div className="modal-bg" ref={ref} style={{ margin: 0 }}>
        <div className="w-3/5 rounded-2xl p-10 items-center justify-center content-center modal">
          <h2 className="font-bold text-2xl p-3 pb-10">{title}</h2>
          <div className="justify-items-center text-xl">{description}</div>

          <div className="pt-8">
            <PopupButtons
              onConfirm={onConfirm}
              closePopup={() => closePopup(ref)}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Popup;
