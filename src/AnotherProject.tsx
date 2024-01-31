// import Input from "./components2/Input";

import Button from "./components2/Button";

export default function AnotherProject() {
  return (
    <>
      {/* <Input label="Your Name" id="name" />
      <Input label="Your Age" id="age" type="text" /> */}

      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://www.google.com" target="_blank">
          A Link
        </Button>
      </p>
    </>
  );
}
