import React from 'react';

// eslint-disable-next-line
export const StartBrewingPopup = (props: any) => {
  const { infoGroup, show, selectedRecipeId } = props;
  // eslint-disable-next-line
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed z-10 inset-0 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            Je potrebne pripravit tieto ingredencie
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 ">
          <div className="">{infoGroup}</div>

          <div className="grid justify-items-stretch mt-8">
            <button
              type="button"
              className="mt-3 w-full inline-flex bg-green-200 justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-green-300  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => alert(selectedRecipeId)}
            >
              Confirm
            </button>
            <button
              type="button"
              // eslint-disable-next-line
              onClick={props.onClose}
              className="mt-3 w-full bg-red-200 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-300  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
