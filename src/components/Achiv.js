import React from 'react'
import "./AchivCardStyle.css"
import AchivCard from './AchivCard'
import AchivData from './AchivData'

const Achiv = () => {
    // return (
    //    <>
    //         {/* <ul className="list-group">
    //             <li class="list-group-item list-group-item-primary">Secured 166 rank in Global Coding Challenge 2022 by Credit Suisse.</li>
    //             <li class="list-group-item list-group-item-secondary">Qualified the Prestigious ACM-ICPC regionals in 2020 and Ranked 86 in Kanpur Regions</li>
    //             <li class="list-group-item list-group-item-success">Secured 1583 rank in Round G Google KickStart 2022 among 11k participants.</li>
    //             <li class="list-group-item list-group-item-danger">Secured 2561 Rank in Educational Codeforces Round 130 among 14k participants.</li>
    //             <li class="list-group-item list-group-item-warning">Highest rating of 1254 at Codeforces.</li>
    //             <li class="list-group-item list-group-item-info">Highest rating of 521 at Atcoder</li>
    //             <li class="list-group-item list-group-item-light">Highest Rating 1759 and Rated 3* at Codechef</li>
    //             <li class="list-group-item list-group-item-dark">Secured 4484 Rank in Round 1 Google Code Jam 2022</li>
    //         </ul> */}
    //     </>
    // )
    return (
        <div className="work-container">
            <h1 className="Achiv-heading">Achivement</h1>
            <div className="Achiv-container">
                {
                    AchivData.map((val,ind)=>{
                        return(
                            <AchivCard 
                            key={ind}
                            imgsrc={val.imgsrc}

                            text={val.text}
                            view={val.view}
                           
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Achiv

