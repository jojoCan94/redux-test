import { useDispatch } from "react-redux"
import { getHomeDataRequestSaga } from "../../store/homee/saga/saga"

const Home = () => {
  const dispatch = useDispatch()

  const getHomeData = () => {
    dispatch(getHomeDataRequestSaga("asd"))
  }
  return (
    <div>
      <h1>Test Redux state</h1>
      <div className="getData"></div>
    </div>
  )
}

export default Home
