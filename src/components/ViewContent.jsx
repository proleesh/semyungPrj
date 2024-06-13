import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// author: Sung-Hyuk Lee
// date: 2024.6.12
export default function ViewContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Back-end에서 get메서드 api를 이용해서 json 데이터를 불러오기
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/articles/${id}`
        );
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        // 불러오기 실패 시 오류 메시지 호출
        setError(error.message);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>오류: {error}</h1>;
  }
  if (!article) {
    return <h1>죄송합니다. 찾지 못했습니다.</h1>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <article key={article.id}>
              <input type="hidden" id="article-id" value={article.id} />
              <header>
                <h1 className="fw-border mg-1">{article.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {new Date(article.createdAt).toLocaleString()}
                </div>
              </header>
              <section>
                <p className="fs-5 mb-5">{article.content}</p>
              </section>
              <button
                type="button"
                id="create-btn"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  navigate(`/editArticle/${article.id}`);
                }}
              >
                수정
              </button>
              &nbsp;
              <button
                type="button"
                id="delete-btn"
                onClick={async () => {
                  try {
                    await axios.delete(
                      `${import.meta.env.VITE_API_URL}/api/articles/${id}`
                    );
                    alert("삭제 성공");
                    location.replace("/");
                  } catch (error) {
                    console.error("Error deleting articles: ", error);
                  }
                }}
                className="btn btn-danger btn-sm"
              >
                삭제
              </button>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
