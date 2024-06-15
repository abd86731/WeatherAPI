import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="Header">
      <div className="link">
        <Link to="/">Weather API</Link>
      </div>
      <SearchInput />
    </div>
  );
}
