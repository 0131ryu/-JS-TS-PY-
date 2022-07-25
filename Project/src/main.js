//const { default: axios } = require("axios");

// axios({
//   method: "post",
//   url: "http://127.0.0.1:3000/sign-in",
//   headers: {},
//   data: { email: "aaaa@naver.com", password: "Aaaa1234!" },
// });

async function dummy() {
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/sign-in",
      headers: {},
      data: { email: "aaaa@naver.com", password: "Aaaa1234!" },
    });
    console.log(res);
  } catch (error) {
    console.log(err);
  }
}

dummy();
