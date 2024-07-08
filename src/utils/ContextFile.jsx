import Body from "../app/Body"
import Header from "../app/Header"
import { DataProvider } from "../contexts/DataContext"

export default function ContextFile() {
  return (
    <DataProvider>
    <Header />
    <Body />
  </DataProvider>
  )
}
