async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const result = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!result.ok)
    throw new Error(`fetch failed for ${animal}${location}${breed}`);

  return result.json();
}

export default fetchSearch;
