import React from "react";
// For a complete API docs see https://github.com/FormidableLabs/spectacle#tag-api
import {
  Slide,
  Appear,
  Layout,
  Fill,
  Fit,
  Heading,
  Text,
  Link,
  S,
  Markdown,
  List,
  ListItem,
  Table,
  TableItem,
  TableHeaderItem,
  TableRow,
  BlockQuote,
  Quote,
  Cite,
  Code,
  CodePane,
  Image
} from "spectacle";
import render, { Presentation } from "melodrama";
import "prismjs/components/prism-core";
import "prismjs/components/prism-javascript";
import stLogo from "./assets/ST Logo Stacked.png";
import composingTweet from "./assets/composing.png";
import questionDog from "./assets/cocked-head.jpg";

// --- THEME ---
// Import and create the theme you want to use.
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
  {
    primary: "#ffffff",
    secondary: "#273cb4",
    tertiary: "#b5226e",
    quarternary: "#ccd0d4"
  },
  {
    primary: { name: "Open Sans", googleFont: true, styles: ["400", "700i"] },
    secondary: "Helvetica"
  }
);

// --- SYNTAX HIGHLIGHTING ---
// --- IMAGES ---
// Import/require your images and add them to `images`
// for easy access and preloading.

const images = {
  stLogo,
  composingTweet,
  questionDog
};

// --- PRESENTATION ---
const Root = () => (
  <Presentation theme={theme} progress={"pacman"}>
    <Slide>
      <Heading>Context Without Constraint</Heading>
      <br />
      <CodePane lang="js" textSize={32} source={require("raw!./assets/context.example")} />
    </Slide>
    <Slide>
      <Heading>What's a context?</Heading>
      <List>
        <ListItem>To pass data down through the react render tree without passing props.</ListItem>
        <ListItem>
          You can build an API where the child components communite with their parents higher in the
          tree. Example: React Router
        </ListItem>
      </List>
      <Link href="https://reactjs.org/docs/context.html">React Docs</Link>
    </Slide>
    <Slide>
      <Heading>Some Examples</Heading>
      <List>
        <ListItem>Localization</ListItem>
        <ListItem>Color Theming</ListItem>
        <ListItem>Permissions and Flags</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Problems with The Old API</Heading>
      <BlockQuote>
        "If you want your application to be stable, don’t use context. It is an experimental API and
        it is likely to break in future releases of React."
      </BlockQuote>
      <BlockQuote>
        "Updating Context: Don’t do it. React has an API to update context, but it is fundamentally
        broken and you should not use it."
      </BlockQuote>
      <Link href="https://reactjs.org/docs/context.html#why-not-to-use-context">
        From the React Docs
      </Link>
    </Slide>
    <Slide>
      <Heading>Another Problem</Heading>
      <List>
        <ListItem>
          It doesn't necessarily play well with the React API (React.PureComponent and
          shouldComponentUpdate).
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>
        First demo:<br /> Old API
      </Heading>
    </Slide>
    <Slide>
      <Heading>The New API</Heading>
      <CodePane lang="js" textSize={16} source={require("raw!./assets/new-api.example")} />
    </Slide>
    <Slide>
      <Heading>
        Second and Third demo:<br /> New API
      </Heading>
    </Slide>
    <Slide>
      <Heading>Will it compose?</Heading>
      <Image width={"800px"} src={composingTweet} />
    </Slide>
    <Slide>
      <Heading>
        Fourth demo:<br /> Composing
      </Heading>
    </Slide>
    <Slide>
      <Heading>Verdict</Heading>
      <List>
        <ListItem>Solves the import problems with the old API.</ListItem>
        <ListItem>
          Great if you just need a couple data items to trickle down through the tree.
        </ListItem>
        <ListItem>Still a little too low level to make heavy use of the raw API.</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Library Support!</Heading>
      <List>
        <ListItem>
          <Link href="http://unstated.io">unstated</Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/drcmda/react-contextual">react-contextual</Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/jamiebuilds/create-react-context">
            create-react-context
          </Link>
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>
        Fifth demo:<br /> unstated
      </Heading>
    </Slide>
    <Slide>
      <Heading>When would you use unstated?</Heading>
      <List>
        <ListItem>You want to use context to manage a reasonable amount of global state.</ListItem>
        <ListItem>
          If you like the setState API and want to use it to manage all state in your app.
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>
        Sixth demo:<br /> react-contextual
      </Heading>
    </Slide>
    <Slide>
      <Heading>When would you use react-contextual?</Heading>
      <List>
        <ListItem>You want to use context to manage a reasonable amount of global state.</ListItem>
        <ListItem>If you like a more reduxy API.</ListItem>
        <ListItem>You're quite sure you won't need redux.</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
      <Image width={"800px"} src={questionDog} />
    </Slide>
    <Slide>
      <Image width={"600px"} src={stLogo} />
      <br />
      <BlockQuote>We're hiring!</BlockQuote>
      <Link href="https://jobs.socialtables.com">jobs.socialtables.com</Link>
    </Slide>
  </Presentation>
);

render(Root, { images });
