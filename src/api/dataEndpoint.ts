// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getBrewStatus = async (brewId: number) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/brew/${brewId}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
