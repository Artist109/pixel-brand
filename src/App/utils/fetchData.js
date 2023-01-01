export const fetchData = async (url) => {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
};

// "eslint": "^8.31.0",
// "eslint-config-standard": "^17.0.0",
// "eslint-plugin-import": "^2.26.0",
// "eslint-plugin-n": "^15.6.0",
// "eslint-plugin-promise": "^6.1.1",
// "eslint-plugin-react": "^7.31.11"
