<script setup lang="ts">
import type { ItemProps } from "./Item.vue";

import HtmlSvg from "../assets/img/Html.svg";
import CssSvg from "../assets/img/Css.svg";
import JSSvg from "../assets/img//JS.svg";
import AccessibilitySvg from "../assets/img/Accessibility.svg";

import Item from "./Item.vue";
const list: ItemProps[] = [
  {
    text: "HTML",
    altText: "HTMLSvg",
    svgPath: HtmlSvg,
  },
  {
    text: "CSS",
    altText: "CSS",
    svgPath: CssSvg,
  },
  {
    text: "JavaScript",
    altText: "JS",
    svgPath: JSSvg,
  },
  {
    text: "Accessibility",
    altText: "AccessibilitySvg",
    svgPath: AccessibilitySvg,
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
    />
  </div>
</template>
