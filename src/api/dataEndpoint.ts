export const getBrewStatus = async (brewId: number) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/brew/${brewId}`).then(
    (response) => response.json()
  );
};
