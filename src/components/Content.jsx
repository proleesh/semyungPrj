import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// author: Sung-Hyuk Lee
// date: 2024.6.12
export default function Content() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Back-end에서 post메서드 api를 이용해서 json 데이터를 불러오기
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/articles`,
        {
          title: title.trim(),
          content: content.trim(),
        }
      );
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating article: ", error);
    }
  };
  return (
    <>
      <div className="container">
        <h2>글 등록</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">
            등록
          </button>
        </form>
      </div>
    </>
  );
}
