import DetailBookAuthor from "../../atoms/DetailBookAuthor/DetailBookAuthor"
import DetailBookPublisher from "../../atoms/DetailBookPublisher/DetailBookPublisher"
import DetailBookName from "../../atoms/DetailBookName/DetailBookName"

export default function DetailTitle(){
  return(
  <div className="flex flex-col items-center gap-2 px-4 py-6">
    <DetailBookName />
    <DetailBookAuthor />
    <DetailBookPublisher />
  </div>)
  
}