export const fetchData = async (url) => {
    try {
      const resp = await fetch(url);
      return await resp.json();
    } catch (error) {
      console.error(error);
    }
  };