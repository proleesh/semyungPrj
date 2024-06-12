import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function UpdateContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    const loadArticleById = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/articles/${id}`
        );
        setTitle(result.data.title);
        setContent(result.data.content);
      } catch (error) {
        console.error(error.message);
      }
    };
    loadArticleById();
  }, [id]);

  const updateArticleById = async (event) => {
    event.preventDefault();
    await axios.put(`${import.meta.env.VITE_API_URL}/api/articles/${id}`, {
      title: title,
      content: content,
    });
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <h2>글 수정</h2>
        <form onSubmit={(e) => updateArticleById(e)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              제목
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              내용
            </label>
            <textarea
              className="form-control"
              id="content"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            등록
          </button>
          &nbsp;
          <Link
            to={`/articles/${id}`}
            type="submit"
            className="btn btn-danger btn-sm"
          >
            취소
          </Link>
        </form>
      </div>
    </>
  );
}
