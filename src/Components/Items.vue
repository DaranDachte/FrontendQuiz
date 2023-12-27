<script setup lang="ts">
import { inject } from "vue";
import type { ItemProps } from "./Item.vue";
import HtmlSvg from "../assets/img/Html.svg";
import CssSvg from "../assets/img/Css.svg";
import JSSvg from "../assets/img//JS.svg";
import AccessibilitySvg from "../assets/img/Accessibility.svg";

import Item from "./Item.vue";
const state = inject("store");

const list: ItemProps[] = [
  {
    text: state.html.title,
    altText: "HTMLSvg",
    svgPath: HtmlSvg,
    routePass: "/html/step/1",
  },
  {
    text: state.css.title,
    altText: "CSS",
    svgPath: CssSvg,
    routePass: "/css/step/1",
  },
  {
    text: state.js.title,
    altText: "JS",
    svgPath: JSSvg,
    routePass: "/js/step/1",
  },
  {
    text: state.acc.title,
    altText: "AccessibilitySvg",
    svgPath: AccessibilitySvg,
    routePass: "/acc/step/1",
  },
];
</script>

<template>
  <div class="flex flex-col">
    <Item
      v-for="element in list"
      :svg-path="element.svgPath"
      :alt-text="element.altText"
      :text="element.text"
      :key="element.text"
      :route-pass="element.routePass"
    />
  </div>
</template>
