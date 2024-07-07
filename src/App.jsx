import Body from "./app/Body";
import Header from "./app/Header";
import { DataProvider } from "./contexts/DataContext";

export default function App() {
  return (
    <DataProvider>
      <Header />
      <Body />
    </DataProvider>
  );
}
