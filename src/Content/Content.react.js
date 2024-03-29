import React from 'react';
// import ShowDonor from '../ShowDonor/ShowDonor.react'
import Search from '../Search/Search.react'
import Blog from '../Blog/Blog.react'
import FetchDonors from '../FetchDonors/FetchDonors.react';
import AddDonor from '../AddDonor/AddDonor.react'
import LifeCycle from '../LifeCycle/LifeCycle.react';

const Content = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <h3>{props.request.location}</h3>
            <ol>
                <li>{props.request.bloodGroup}</li>
                <li><span><img src={props.request.imgRef} alt="O+ve"></img></span></li>
                <li>{props.request.requiredUnit}</li>
            </ol>
            {/* <ShowDonor title={'Star Donors'}/> */}
            <AddDonor></AddDonor>
            <FetchDonors></FetchDonors>
            <Search />
            <Blog> </Blog>
            <LifeCycle></LifeCycle>
        </div>
    );

}

export default Content;