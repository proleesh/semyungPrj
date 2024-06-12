import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import NewArticle from "./components/NewArticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";
// author: Sung-Hyuk Lee
// date: 2024.6.12
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/newArticle" element={<NewArticle />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/editArticle/:id" element={<EditArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
