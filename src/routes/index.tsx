import { component$, useSignal } from "@qwik.dev/core";
import { Box } from "../box";

export default component$(() => {
  const count = useSignal(0);
  return (
    <main>
      <button onClick$={() => count.value++}>count: {count.value}</button>
      <Box />
    </main>
  );
});
