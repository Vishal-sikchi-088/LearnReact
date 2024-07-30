import { CDN_URL } from "./utils/constant"
const RestraurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info
    return(
             <div className="res-card">
                <img alt="res-logo" className="res-logo" src= {CDN_URL +
                    cloudinaryImageId
                }>
                </img>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} star</h4>
                <h4>{sla.slaString}</h4>
            </div>       
    )
}

export default RestraurantCard