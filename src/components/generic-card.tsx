import { Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function GenericCard(props:{
  children: React.ReactNode,
  title: string
  description:string
}){
  const { children, title , description} = props;
  return (
    <Paper elevation={1}>
      <Stack direction='column'>
        <Stack direction='row' width='100'>{title}</Stack>
      </Stack>
      {children}
    </Paper>
  )
}