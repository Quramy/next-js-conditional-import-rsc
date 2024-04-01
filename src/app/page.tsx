import { awesomeFn } from "#util"

import { Form } from "./Form";
import { Shared } from "./Shared";

export default function Home() {
  const value = awesomeFn();
  return (
    <main>
      <div>
        <Shared />
      </div>
      <Form />
    </main>
  );
}
