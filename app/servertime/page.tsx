import UrlInput from "./urlInput"
import SearchButton from "./searchButton"

export default function Home() {
  return (
    <div>
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</span>
      <div className="grid grid-cols-10 gap-6 mb-6">
        <div className="col-span-9">
          <UrlInput/>
        </div>
        <div>
          <SearchButton/>
        </div>
      </div>
    </div>
  )
}
