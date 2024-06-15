import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./ArticleList";
import NewArticle from "./NewArticle";
import Article from "./Article";
import EditArticle from "./EditArticle";
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
