// import { useSearchParams } from "react-router-dom"
import DetailBookAuthor from "../../atoms/DetailBookAuthor/DetailBookAuthor"
import DetailBookPublisher from "../../atoms/DetailBookPublisher/DetailBookPublisher"
import DetailBookName from "../../atoms/DetailBookName/DetailBookName"

export default function DetailTitle(){
  // const [title, author, publisher] = ["데일 카네기 어쩌구", "데일 카네기", "현대지성"]
  return(
  <div className="flex flex-col items-center gap-2 px-4 py-6">
    <DetailBookName />
    <DetailBookAuthor />
    <DetailBookPublisher />
  </div>)
  
}