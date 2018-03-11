import React from 'react';
// For a complete API docs see https://github.com/FormidableLabs/spectacle#tag-api
import {
  Slide, Appear,
  Layout, Fill, Fit,
  Heading, Text, Link, S, Markdown,
  List, ListItem,
  Table,  TableItem, TableHeaderItem, TableRow,
  BlockQuote, Quote, Cite,
  Code, CodePane,
  Image
} from 'spectacle';
import render, { Presentation } from 'melodrama';

// --- THEME ---
// Import and create the theme you want to use.
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme({
  primary: "#b5226e",
  secondary: "#42b5b4",
  tertiary: "#FFFFFF",
  qauternary: "#E1E1E1"
}, {
  primary: "Geomanist",
  secondary: { name: "Open Sans", googleFont: true, styles: [ "400", "700i" ] }
});

// --- SYNTAX HIGHLIGHTING ---
//import 'prismjs/components/prism-core';
//import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

// --- IMAGES ---
// Import/require your images and add them to `images`
// for easy access and preloading.
import stLogo from "./assets/ST Logo Stacked.png";
const images = {
  stLogo
};

// --- PRESENTATION ---
const Root = () => (
  <Presentation theme={theme} progress={"pacman"}>
    <Slide>
      <Heading>Context Without Constraint</Heading>
      <CodePane
        lang="js"
        textSize={32}
        source={require('raw!./assets/context.example')}
      ></CodePane>
    </Slide>
    <Slide>
      <Image width={"600px"} src={stLogo}/><br/>
      <Text>We're hiring! ( jobs.socialtables.com )</Text>
    </Slide>
  </Presentation>
);

render(Root, { images });