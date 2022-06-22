import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
// tipando o objeto lesson
interface Lesson {
  id: string;
  title: string;
}

// dentro do data tem o objeto lesson em seguida o array de lesson
// <{ lessons: Lesson[] }>
function App() {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  // caso a entidade lesson da query não exista o data vai retornar undefined ai vai dar erro, então é preciso adicionar o ?
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
   
}

export default App