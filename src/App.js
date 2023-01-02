
import './App.css';
import Header from './components/Header';
import Question from './components/Question/Question';
import QuestionList from './components/Question/QuestionList';
import { QuestionContextProvider } from './context/QuestionContext';

function App() {
  return (
   <div className='App'>
     <QuestionContextProvider>
      <Header />
      <Question />
      <QuestionList/>
    </QuestionContextProvider>
   </div>
  );
}

export default App;
