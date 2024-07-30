import RestraurantCard from "./RestraurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./utils/Shimmer";
 

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTextValue, setSearchTextValue] = useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const topRatedRestro = () =>{  
        const topRated = listOfRestaurants.filter(restro => restro.info.avgRating > 4.2)
        setFilteredRestaurants(topRated);
    
    }
    const resetRestaurants = () => {
        fetchData()
    }

    const searchValue = () => {
        if(searchTextValue){
            const searchedRestro = listOfRestaurants.filter(restro => restro.info.name.toLowerCase().includes(searchTextValue.toLowerCase()))
            setFilteredRestaurants(searchedRestro);
        } else {
            fetchData()
        }
        
    }

    return listOfRestaurants.length === 0 ?  <Shimmer></Shimmer> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-input" value={searchTextValue} onChange={(e) => {
                        setSearchTextValue(e.target.value)
                        // searchValue()
                    }}></input>
                    <button className="filter-btn" onClick={searchValue}>Search</button>
                </div>
                <button className="filter-btn" onClick={topRatedRestro} >Top Rated Restaurant</button>
                <button className="filter-btn" onClick={resetRestaurants}>Reset</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <RestraurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                } 
            </div>
        </div>
    )
     
}





export default Body