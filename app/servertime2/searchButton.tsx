export default function SearchButton(props: { search: any }) {
  return (
    <button onClick={ props.search } className="w-full font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700">검색</button>
  )
}