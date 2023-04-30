import { useSelector } from "react-redux";
import Intro from "../components/Intro"

function HomePage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  
  return (
    <div className="w-full min-h-screen">
      {!showMenu && <Intro />}
    </div>
  )
}

export default HomePage