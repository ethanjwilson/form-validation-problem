import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { styled } from "./styles/stitches.config";
import { RadioGroup, RadioGroupIndicator, RadioGroupRadio } from "./components/Radio";
import { ToggleGroup, ToggleGroupItem } from "./components/Toggle";
import { blue } from "@radix-ui/colors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  color: yup.string().required(),
  animal: yup.string().required(),
});

export const Section = styled("section", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$blue2",
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: "12px",
  width: 480,
  padding: 16,
  boxShadow: `0 2px 10px rgba(0 0 0 / 0.1)`,
  "&:focus-within": { boxShadow: `0 2px 10px rgba(0 0 0 / 0.05)` },
});

const Label = styled(LabelPrimitive.Root, {
  fontSize: 16,
  fontWeight: 500,
  color: "$blue12",
  userSelect: "none",
});

const Flex = styled("div", {
  display: "flex",
});

const InputGroup = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  my: 10,
  variants: {
    radio: {
      true: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
  },
});

const FormTitle = styled("h1", {
  fontSize: 42,
  fontWeight: 800,
  color: "$blue12",
  textAlign: "center",
});

const FormHeading = styled("h2", {
  my: 10,
  marginTop: 16,
  fontSize: 16,
  fontWeight: 800,
  color: "$blue12",
});

const Input = styled("input", {
  width: "100%",
  borderRadius: 4,
  padding: "0 10px",
  marginTop: 10,
  height: 36,
  fontSize: 16,
  lineHeight: 1,
  color: "$blue12",
  backgroundColor: "gray.500",
  outline: "none",
  boxShadow: `0 0 0 1px ${blue.blue3}`,
  "&:focus": { boxShadow: `0 0 0 2px ${blue.blue10}` },
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema)
  });

  return (
    <div className="App">
      <Section>
        <Form onSubmit={handleSubmit((data) => console.log(data))}>
          <FormTitle>Contact Form</FormTitle>
          {/* Email field */}
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Email ..." type="email" id="email" {...register("email")} />
            {errors.email && <div>{errors.email.message}</div>}
          </InputGroup>
          {/* Password field */}
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input placeholder="Password ..." type="password" id="password" {...register("password")} />
            {errors.password && <div>{errors.password.message}</div>}
          </InputGroup>
          <Flex css={{ justifyContent: "space-around" }}>
            <div>
              {/* Color Options `Blue`, `Green`, `Red`, `Black` and `Brown`. */}
              <FormHeading>Pick a Colour</FormHeading>
              <RadioGroup defaultValue="blue" aria-label="Colours" {...register("color")}>
                <InputGroup radio>
                  <RadioGroupRadio color="blue" value="blue" id="r-color-blue">
                    <RadioGroupIndicator color="blue" />
                  </RadioGroupRadio>
                  <Label htmlFor="r-color-blue">Blue</Label>
                </InputGroup>
                <InputGroup radio>
                  <RadioGroupRadio color="green" value="green" id="r-color-green">
                    <RadioGroupIndicator color="green" />
                  </RadioGroupRadio>
                  <Label htmlFor="r-color-green">Green</Label>
                </InputGroup>
                <InputGroup radio>
                  <RadioGroupRadio color="red" value="red" id="r-color-red">
                    <RadioGroupIndicator color="red" />
                  </RadioGroupRadio>
                  <Label htmlFor="r-color-red">Red</Label>
                </InputGroup>
                <InputGroup radio>
                  <RadioGroupRadio color="black" value="black" id="r-color-black">
                    <RadioGroupIndicator color="black" />
                  </RadioGroupRadio>
                  <Label htmlFor="r-color-black">Black</Label>
                </InputGroup>
                <InputGroup radio>
                  <RadioGroupRadio color="brown" value="brown" id="r-color-brown">
                    <RadioGroupIndicator color="brown" />
                  </RadioGroupRadio>
                  <Label htmlFor="r-color-brown">Brown</Label>
                </InputGroup>
              </RadioGroup>
              {errors.color && <div>{errors.color.message}</div>}
            </div>
            <div>
              {/* Animal Options `Bear`, `Tiger`, `Snake`, and `Donkey`. */}
              <FormHeading>Pick an Animal</FormHeading>
              <ToggleGroup type="multiple" defaultValue="center" aria-label="Animals" {...register("animal")}>
                <ToggleGroupItem value="bear" aria-label="Bear">
                  🧸 Bear
                </ToggleGroupItem>
                <ToggleGroupItem value="tiger" aria-label="Tiger">
                  🐯 Tiger
                </ToggleGroupItem>
                <ToggleGroupItem value="snake" aria-label="Snake">
                  🐍 Snake
                </ToggleGroupItem>
                <ToggleGroupItem value="donkey" aria-label="Donkey">
                  🐴 Donkey
                </ToggleGroupItem>
              </ToggleGroup>
              {errors.animal && <div>{errors.animal.message}</div>}
            </div>
          </Flex>
          <button type="submit">Submit</button>
        </Form>
      </Section>
    </div>
  );
}

export default App;
