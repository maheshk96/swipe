import React from "react";
import "./Main.css";

export default function Header(props) {
    console.log(props);
    console.log(props.profile)
    return (
        <div className="main">
            {/*<h1>{props.message}</h1>*/}
            <div className="card">
                <div className="header">
                    <p className="app-name">{props.title}</p>
                    <p className="user-name">{props.profile.firstName} {props.profile.lastName}</p>
                </div>
                <div className="header-image">
                    <img src={props.matches[0].jobTitle.imageUrl}/>
                </div>
                <div className="job-details">
                    <div className="distance-info">
                        <div className="dist-label">
                            Distance
                        </div>
                        <div className="dist-value">
                            {props.matches[1].milesToTravel}
                        </div>
                    </div>
                    <div className="hour-rate">
                        <div className="hour-label">
                            Hourly Rate (in cents)
                        </div>
                        <div className="hour-value">
                            {props.matches[1].wagePerHourInCents}
                        </div>
                    </div>
                </div>
                <div className="shift-dates">
                    <div className="shift-label">
                        <b>Shift dates</b>
                    </div>
                    <div className="date-values">
                        <li>{props.matches[0].shifts[0].startDate}</li>
                        <li>{props.matches[0].shifts[0].endDate}</li>
                    </div>
                </div>

                <div className="location">
                    <div className="location-lable">
                        <b>Location</b>
                    </div>
                    <div className="location-val">
                        Sydney
                    </div>
                </div>
                <div className="requirement">
                    <p>
                        <b>Requirements</b>
                    </p>
                    <p>
                        -Safety Vest
                    </p>
                    <p>
                        -Hard Hat
                    </p>
                </div>
                <div className="report-to">
                <p>
                    <b>Report to</b>
                </p>
                    <p>
                        {props.matches[0].company.reportTo.name} - {props.matches[0].company.reportTo.phone}
                    </p>
                </div>
            </div>
        </div>
    );
}