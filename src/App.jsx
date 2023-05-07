import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello World</h1>
    </GlobalProvider>
  );
}

export default App;
