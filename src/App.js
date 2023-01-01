
import './App.css';
import Header from './components/Header';
import Question from './components/Question/Question';
import QuestionList from './components/Question/QuestionList';
import { QuestionContextProvider } from './context/QuestionContext';

function App() {
  return (
    <QuestionContextProvider>
      <Header />
      <Question />
      <QuestionList/>
    </QuestionContextProvider>
  );
}

export default App;
