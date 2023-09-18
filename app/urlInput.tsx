import styles from "./searchBar.module.css"

export default function UrlInput(props: { url: any }) {
  return (
    <div className={styles.searchBar}>
    <input
      type="text"
      id="url"
      ref={props.url}
      className={styles.input}
      placeholder="검색어를 입력하세요"
    />
  </div>
  )
}