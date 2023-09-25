'use client';

import { useState, useRef } from "react";
import styles from "./searchBar.module.css"

export default function searchBar() {

  const inputUrlRef = useRef<HTMLInputElement>(null);
  const [servertime, setServertime] = useState('')

  async function getInputUrl() {
    const inputUrl = inputUrlRef.current!.value
    console.log('inputUrl=' + inputUrl)

    const data = {url: inputUrl}
    const res = await fetch('/servertime?url=' + inputUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    
    console.log(res.headers.get('Date')?.toString())
    const resDate = res.headers.get('Date')
    if (resDate == null) {
      setServertime('')
    }
    else {
      setServertime(resDate.toString())
    }
  }

  return (
    <>
    <div className={styles.searchBar}>
    <input
      type="text"
      id="url"
      ref={inputUrlRef}
      className={styles.input}
      placeholder="검색어를 입력하세요"
    />
    </div>
    <button onClick={getInputUrl} className={styles.button}>
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
    <div>
      {servertime}
    </div>
    </>
  )
}