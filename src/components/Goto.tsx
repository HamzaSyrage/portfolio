import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function GoTo(param: { to: string; children: ReactNode }) {
  return (
    <div className="view-all">
      <h2>
        <Link to={param!.to}>{param!.children}</Link>
      </h2>
    </div>
  );
}
