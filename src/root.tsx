import { component$ } from "@qwik.dev/core";
import { QwikRouterProvider, RouterOutlet } from "@qwik.dev/router";

export default component$(() => (
  <QwikRouterProvider>
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      <RouterOutlet />
    </body>
  </QwikRouterProvider>
));
