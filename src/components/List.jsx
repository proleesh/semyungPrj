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
    // Back-end에서 get메서드 api를 이용해서 json 데이터를 불러오기
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/articles`,
      {
        validateStatus: () => {
          return true;
        },
      }
    );
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
                  <button
                    type="button"
                    id="create-btn"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/articles/${article.id}`);
                    }}
                  >
                    보러가기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
