import React, { useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import { FaCropAlt } from "react-icons/fa";
import { ThemeProvider } from "styled-components";

import { AppTitle, ImageLabel, Paragraph, ThemedRow } from "./styledComponents";
import Switch from "./components/switch-theme";
import upload from "./utils/fileUploadService";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fileInput = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [srcImg, setSrcImg] = useState("");
  const storedTheme = localStorage.getItem("darkThemeEnabled");
  let persistedTheme = false;
  if (storedTheme) {
    persistedTheme = storedTheme === "true" ? true : false;
  }
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(persistedTheme);
  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };
  const uploadFile = () => {
    setProgress(0);
    let currentFile = selectedFiles[0];
    setCurrentFile(currentFile);
    upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setSrcImg("data:image/jpeg;base64," + response.data);
        setCurrentFile(undefined);
      })
      .catch((e) => {
        setProgress(0);
        setMessage(`Oops ! ${e.response.data} !`);
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };
  const handleThemeChange = () => {
    localStorage.setItem("darkThemeEnabled", JSON.stringify(!darkThemeEnabled));
    setDarkThemeEnabled(!darkThemeEnabled);
  };
  return (
    <>
      <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
        <ThemedRow className="App">
          <Col
            lg={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 12, offset: 0 }}
          >
            <AppTitle>
              <b>Face cropping app</b>
            </AppTitle>
            <Switch
              darkThemeEnabled={darkThemeEnabled}
              handleThemeChange={handleThemeChange}
            />
            <Paragraph style={{ marginBottom: 30 }}>
              Welcome to the face cropping app !
            </Paragraph>
            <Paragraph style={{ marginBottom: 30 }}>
              We will detect faces on your image, crop it and let you download
              it !
            </Paragraph>
            {currentFile && (
              <>
                <Paragraph>Uploading</Paragraph>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-info progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: progress + "%" }}
                  >
                    {progress}%
                  </div>
                </div>
              </>
            )}
            {message !== "" && <Alert variant="danger">{message}</Alert>}
            <form>
              <Form.Group style={{ marginBottom: 30 }}>
                <ImageLabel htmlFor="image">Drop your image here !</ImageLabel>
                <input
                  type="file"
                  ref={fileInput}
                  name="image"
                  onChange={selectFile}
                />
              </Form.Group>

              <Form.Group>
                <Button
                  variant="secondary"
                  type="button"
                  disabled={!selectedFiles}
                  onClick={uploadFile}
                >
                  Crop{" "}
                  <FaCropAlt style={{ color: "#DC143C", marginLeft: 10 }} />
                </Button>
              </Form.Group>
            </form>
            {srcImg !== "" && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={srcImg}
                  style={{ width: 200, height: 200 }}
                  alt="Hippity, hoppity, cropped !"
                />
                <Paragraph>Hippity, hoppity, cropped !</Paragraph>
              </div>
            )}
          </Col>
        </ThemedRow>
      </ThemeProvider>
    </>
  );
}

export default App;
