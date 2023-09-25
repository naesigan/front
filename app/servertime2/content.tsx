'use client';

import { useRef } from "react";
import UrlInput from "./urlInput"
import SearchButton from "./searchButton"

export default function Content() {
  const url = useRef("");

  function search() {
    console.log(url.current.value)
  }

  return (
    <div>
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</span>
      <div className="grid grid-cols-10 gap-6 mb-6">
        <div className="col-span-9">
          <UrlInput url={url}/>
        </div>
        <div>
          <SearchButton search={search}/>
        </div>
        { true && <div>test</div> }
      </div>
    </div>
  )
}