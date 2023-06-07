import { Provider } from "react-redux";
import { TodoForm } from "./components/TodoForm";
import { store } from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <TodoForm />
      </Provider>
    </div>
  );
}

export default App;
