// 'use client';

import React, { useEffect, useState } from 'react';

export default async function Page() {
  // Initiate both requests in parallel
  const artistData = await getArtist()
  console.log(artistData.headers.get('Date')?.toString())
 
  // Wait for the promises to resolve
  // const posts = await Promise.all([artistData])
  // console.log(posts)
 
  return (
    <>
      {/* {posts.map((data)=> 
        <span>{data.title}</span>
      )} */}
    </>
  )
}

async function getArtist() {
  const res = await fetch(`https://www.naver.com/`)
  return res
}
