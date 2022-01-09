import './App.css';
import Header from "./components/Header";
import ArticleContent from "./components/ArticleContent";
import CustomDesign from "./components/CustomDesign";
import Music from "./components/Music";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleContent />
      <CustomDesign />
      <WelcomeScreen />
      <Music />
    </div>
  );
}

export default App;
