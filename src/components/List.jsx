import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// author: Sung-Hyuk Lee
// date: 2024.6.12
export default function List() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    loadArticles();
  }, []);
  const loadArticles = async () => {
    const result = await axios.get("/api/articles", {
      validateStatus: () => {
        return true;
      },
    });
    console.log("API response:", result);
    if (result.status === 200) setArticles(result.data);
  };
  return (
    <>
      <div className="container">
        <button
          type="button"
          id="create-btn"
          className="btn btn-success btn-sm mb-3"
          onClick={() => {
            navigate("/newArticle");
          }}
        >
          글 등록
        </button>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id}>
              <div className="card">
                <div className="card-header">{article.id}</div>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.content}</p>
                  <a
                    href={`/articles/${article.id}`}
                    className="btn btn-primary"
                  >
                    보러가기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
