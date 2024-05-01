import { useState } from "react";
import {
  Button,
  Code,
  MantineProvider,
  Text,
  TextInput,
  Paper,
  Title,
  Center,
  Notification,
} from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import React from "react";
import styles from "./MakeOffer.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MakeRequest() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [showSuccessNotif, setSucessNotif] = useState(false);
  const [showFailureNotif, setFailureNotif] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http:localhost:8080/post/save-offer", {
        title: title,
        description: description,
        location: location,
        contactInfo: contactInfo,
        imageURL: imageURL,
        author: author /*should be automatic*/,
        publishedDate: publishedDate /*needs to be automatic*/,
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
  };
  /*const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);*/

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
            Request Form Fill-out
          </Text>
          <form onSubmit={handleSubmit}>
            <TextInput
              required
              mt="md"
              radius="md"
              label="Author"
              placeholder="name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <TextInput
              required
              mt="md"
              radius="md"
              label="Published Date"
              placeholder="published date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
            />
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
              mt="md"
              radius="md"
              label="location"
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
            <TextInput
              mt="md"
              radius="md"
              label="Image URL"
              placeholder="Image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <Center>
              <Button type="submit" mt="md">
                Submit
              </Button>
            </Center>

            {showSuccessNotif && (
              <Notification
                className={styles.notif}
                title="Registered"
                color="teal"
                onClose={() => setSucessNotif(false)}
              >
                Thank you for registering an account!<br></br>
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
                Request failed.<br></br>
                Make sure all required fields are completed.<br></br>
                Try again please.
              </Notification>
            )}
          </form>
        </Paper>
      </Center>
    </MantineProvider>
  );
}
export default MakeRequest;
