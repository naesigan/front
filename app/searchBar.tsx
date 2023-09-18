'use client';

import { useRef } from "react";
import UrlInput from "./urlInput";
import SearchButton from "./searchButton";
export default function searchBar() {
  const url = useRef("");

  function search() {

    console.log(url.current.value)
  }

  return (
    <>
    <UrlInput url={url}></UrlInput>
    <SearchButton search={search}></SearchButton>
    </>
  )
}