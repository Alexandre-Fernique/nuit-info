import React from "react";

export default class Card {
  num: number;
  title: string;
  description: string;
  thumbnail: string
  ind: string;
  children: React.ReactNode;
  constructor(num: number, title: string, description: string, ind: string, children: React.ReactNode, thumbnail:string) {
    this.num = num;
    this.title = title;
    this.description = description;
    this.ind = ind;
    this.children = children;
    this.thumbnail = thumbnail
  }
}