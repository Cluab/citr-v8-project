import { useEffect, useState } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const requestBreedAnimal = async () => {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    };
    if (!animal) setBreedList([]);
    else if (localCache[animal]) setBreedList(localCache[animal]);
    else {
      requestBreedAnimal();
    }
  }, [animal]);
  return [breedList, status];
};

export default useBreedList;
