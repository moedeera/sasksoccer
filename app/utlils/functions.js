const generateSlug = (name, userId) => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const userPrefix = userId.substring(0, 2);
  return `${name}${hours}${minutes}${userPrefix}`;
};

export { generateSlug };
