//import { AppWithRoutes } from "./components/6Router/AppWithRoutes"
import { SimplePost } from "./components/1Simple/SimplePost";

function App() {
  // comment
  return (
    <>
      <SimplePost
        content="The sky is blue"
        user="Alex"
        likesBy={["John", "Mary"]}
      />
    </>
  );
}

export default App;
