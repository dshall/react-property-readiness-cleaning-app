import { Link } from "react-router-dom";

export default function PageContentDisplay() {
  return(
    <div>
      <p>Content Display</p>
      <p><Link to="/current-cleans">go to Current Cleans</Link></p>
    </div>
  )
}