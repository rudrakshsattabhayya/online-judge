import axios from "axios";

const postMethod = async (obj,route) => {
  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:8000${route}`,
      data: {
          ...obj,
      },
    });
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postMethod;