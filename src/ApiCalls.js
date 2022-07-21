export const getHoroscope = async (sign, day) => {
  const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;

  const response = await fetch(URL, { method: "POST" });
  return await response.json();
};
