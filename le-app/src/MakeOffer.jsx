import {
  MantineProvider,
  TextInput,
  Paper,
  Title,
  Button,
  Code,
  Text,
} from "@mantine/core";
import { useForm, hasLength, isEmail } from "@mantine/form";
import React from "react";
import { useState } from "react";
// import styles from "./MakeOffer.module.css";

function MakeOffer() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: '', 
      email: '',
    },
    validate: {
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      email: isEmail("Invalid email"),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);
  
  return (
    <MantineProvider>
      <form onSubmit={form.onSubmit(setSubmittedValues)}>
        <TextInput
          {...form.getInputProps("name")}
          key={form.key("name")}
          label="Name"
          placeholder="Name"
        />
        <TextInput
          {...form.getInputProps("email")}
          key={form.key("email")}
          mt="md"
          label="Email"
          placeholder="Email"
        />
        <Button type="submit" mt="md">
          Submit
        </Button>

        <Text mt="md">Form values:</Text>
        <Code block>{JSON.stringify(form.values, null, 2)}</Code>

        <Text mt="md">Submitted values:</Text>
        <Code block>
          {submittedValues ? JSON.stringify(submittedValues, null, 2) : "–"}
        </Code>
      </form>
    </MantineProvider>
  );
}
export default MakeOffer;

/*<List size="xl">
                <List.Item> <TextInput label="Description" 
                description="Input description"
                placeholder="description"/> 
                </List.Item>
                <List.Item> <TextInput label="Input label" 
                description="Input description"
                placeholder="Input placeholder"/> 
                </List.Item>
                <List.Item> Location: </List.Item>
                <List.Item> Contact info.: </List.Item>
                <List.Item> Image: </List.Item>
            </List>*/
