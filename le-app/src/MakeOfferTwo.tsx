import { useState, useRef } from "react";
import {
  Button,
  MantineProvider,
  Text,
  TextInput,
  Paper,
  Title,
  Center,
  Notification,
  Group
} from "@mantine/core";
import React from "react";
import styles from "./css/MakeOffer.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Dropzone, IMAGE_MIME_TYPE  } from '@mantine/dropzone';
import ErrorPage from "./ErrorPage"
import { nanoid } from 'nanoid';
function MakeOfferTwo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [imageUrl, setImageURL] = useState('');
  const [imageData, setImageData] = useState(new FormData());
  const [imageName, setImageName] = useState('')
  const [showSuccessNotif, setSucessNotif] = useState(false);
  const [showFailureNotif, setFailureNotif] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const openRef = useRef<() => void>(null);
  let date = new Date().toLocaleDateString();


  const handleDrop = async (file) => {
    const fileWithDifferentName = new File([file[0]], nanoid(10), {type: file[0].type});
    const str = file[0].name
    setIsLoading(true)
    const imageFormData = new FormData();
    imageFormData.append('file', fileWithDifferentName);
    setImageURL("http://localhost:8080/file/" + fileWithDifferentName.name);
    setImageData(imageFormData);
    setImageName(str.substring(0,10) + '...')
    setIsLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/post/save-offer", {
        title: title,
        description: description,
        location: location,
        contactInfo: contactInfo,
        imageUrl: imageUrl,
        author: localStorage.getItem("username") /*should be automatic*/,
        publishedDate: date /*needs to be automatic*/,
        offerId: nanoid()
      })
      .then((e) => {
        console.log(e.data);
        console.log("Success");
        setSucessNotif(true);
        setTimeout(() => {
          navigate("/mainpage");
        }, 3000);
      })
      .catch((error) => {
        console.log(error.data);
        console.log(error);
        setFailureNotif(true);
      });

    axios
      .post('http://localhost:8080/file/upload', imageData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((resp) => {
        console.log("image uploaded", resp.data);
      })
      .catch((error) => {
        console.error('error uploading image', error)
      })
  };
  /*const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);*/
  if (localStorage.getItem("username")) {
    return (
      <MantineProvider>
        <div className={styles.wrapper}>
          <Paper className={styles.form} radius={0} p={2}>
            <Title order={2} className={styles.site} ta="center" mt="md" mb={2}>
              SharingIsCaring
            </Title>
          </Paper>
        </div>
        <Center>
          <Paper radius="md" p="xl" withBorder className={styles.paper}>
            <Text size="lg" fw={500}>
              Offer Form Fill-out
            </Text>
            <form onSubmit={handleSubmit}>
              <TextInput
                required
                mt="md"
                radius="md"
                label="Title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextInput
                required
                mt="md"
                radius="md"
                label="Description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextInput
                required
                mt="md"
                radius="md"
                label="Location"
                placeholder="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <TextInput
                required
                mt="md"
                radius="md"
                label="Contact Information"
                placeholder="Contact information"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />

              <Dropzone loading={isLoading} openRef={openRef} maxFiles={1} maxSize={15 * 1024 ** 2} accept={IMAGE_MIME_TYPE} onDrop={handleDrop} activateOnClick={false} style={{marginTop: "16px"}}>
                <Group justify="space-between">
                  <Title order={4}>Upload Image</Title>
                  <Text size='xs'>{imageName}</Text>
                  <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }} color="gray">
                    Select files
                  </Button>
                </Group>
              </Dropzone>
              <Center>
                <Button type="submit" mt="md" size='xl'>
                  Submit
                </Button>
              </Center>

              {showSuccessNotif && (
                <Notification
                  className={styles.notif}
                  title="Offer Made"
                  color="teal"
                  onClose={() => setSucessNotif(false)}
                >
                  Thank you for making an offer!<br></br>
                  Redirecting to main page...
                </Notification> // TODO: redirect to main page.
              )}

              {showFailureNotif && (
                <Notification
                  className={styles.errorNotif}
                  title="Form Error!"
                  color="red"
                  onClose={() => setFailureNotif(false)}
                >
                  Offer failed.<br></br>
                  Make sure all required fields are completed.<br></br>
                  Try again please.
                </Notification>
              )}
            </form>
          </Paper>
        </Center>
      </MantineProvider>
    );
  } else {
    return (
      <MantineProvider>
        <ErrorPage />
      </MantineProvider>
    )
  }
}
export default MakeOfferTwo;
