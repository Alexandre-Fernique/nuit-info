import React from "react";

export default class Card {
  num: number;
  title: string;
  description: string;
  ind: string;
  children: React.ReactNode;
  constructor(num: number, title: string, description: string, ind: string, children: React.ReactNode) {
    this.num = num;
    this.title = title;
    this.description = description;
    this.ind = ind;
    this.children = children;
  }
}