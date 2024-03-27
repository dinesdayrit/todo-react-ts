import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';


function App() {

  return (
    <div>
      <TodosContextProvider>
      <NewTodo/>
     <Todos/>
     </TodosContextProvider>
    </div>
  );
}

export default App;
