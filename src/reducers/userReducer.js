const initState = {
  users: [
    {
      id: 1,
      name: "Zain",
      email: "zain@gmail.com",
    },
    {
      id: 2,
      name: "Arslan",
      email: "arslan@gmail.com",
    },
  ],
};

const userReducer = (state = initState, action) => {
  return state;
};

export default userReducer;
