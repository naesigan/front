import SearchBar from './searchBar'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-full p-24'>
        <SearchBar></SearchBar>
      </div>
    </main>
  )
}
