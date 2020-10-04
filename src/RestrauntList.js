import React from 'react';
import RestrauntCard from './RestrauntCard';


const RestrauntList = ({ list }) => {

    const renderedItems = list.map((list) => {

        return(

                <RestrauntCard
                    key = {list.restaurant.R.res_id}
                    image = {list.restaurant.featured_image}
                    title = {list.restaurant.name}
                    address = {list.restaurant.location.address}
                    cuisines = {list.restaurant.cuisines}
                    rating = {list.restaurant.user_rating.aggregate_rating}
                    status = {list.restaurant.is_delivering_now}
                    menu = {list.restaurant.menu_url}
                    order = {list.restaurant.url}

                />
        );
    });

return (
            <div className="ui four column centered grid">
                {renderedItems}
            </div>
    );
};


export default RestrauntList;