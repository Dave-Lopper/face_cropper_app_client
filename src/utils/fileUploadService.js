import http from "./http-common";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("image", file);
  formData.append("attachment", "true");
  formData.append("b64", "true");

  return http.post("/crop_largest_face", formData, {
    headers: {
      responseType: "arraybuffer",
    },
    onUploadProgress,
  });
};
export default upload;
