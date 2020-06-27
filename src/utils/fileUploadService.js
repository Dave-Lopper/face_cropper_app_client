import http from "./http-common";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("image", file);
  formData.append("attachment", "true");
  formData.append("b64", "true");

  return http.post("/crop_largest_face", formData, {
    headers: {
      responseType: "arraybuffer",
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
    onUploadProgress,
  });
};
export default upload;
