const authHeader = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    const parsedToken = JSON.parse(token);
    console.log(parsedToken)
    return {
      Authorization: `Bearer ${parsedToken}`,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
};

export default authHeader;
