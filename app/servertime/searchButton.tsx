'use client';

function search() {
  console.log("search")
}

export default function SearchButton() {
  return (
    <button onClick={ search } className="w-full font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700">검색</button>
  )
}