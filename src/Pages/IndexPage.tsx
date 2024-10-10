import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/portfolio");
  }, 1);
  return <h1 style={{ color: "#fff" }}>loading...</h1>;
}
