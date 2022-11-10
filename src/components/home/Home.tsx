import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHomeData } from "../../store/homee/actions"

const Home = () => {
  const dispatch = useDispatch()

  const { homeDataResponse } = useSelector((state: any) => ({
    homeDataResponse: state.homeReducer.homeDataResponse,
  }))

  useEffect(() => {
    console.log("STATE ", homeDataResponse)
  }, [homeDataResponse])

  const handleData = () => {
    dispatch(getHomeData())
  }

  return (
    <div>
      <h1>Test Redux state</h1>
      <div className="getData">
        {homeDataResponse ? (
          <div>
            {homeDataResponse.data.map((item: any, index: any) => (
              <div key={index}>
                <h4>Data:</h4>
                <li>{item.name}</li>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <button onClick={handleData}>click me!</button>
      </div>
    </div>
  )
}

export default Home
