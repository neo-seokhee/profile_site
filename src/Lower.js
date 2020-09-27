import React, {useState} from "react";
import "./Lower.css";


const cards = [
    {
        id: 1,
        category: "Coding/Design",
        title : "Personal Profile Site",
        summary : "React 기반 개인 프로필 사이트 디자인 및 개발",
        date : "2020.06"
    },
    {
        id: 2,
        category: "Coding",
        title : "Movie App (React)",
        summary : "React 기반 영화 정보 조회 서비스 개발",
        date : "2020.09"
    },
    {
        id: 3,
        category: "Coding",
        title : "My Words",
        summary : "Chrome Extension - Naver Dictionary 개발",
        date : "2020.06"
    }
];

function Card({ category, title, summary, date}){
    return (
        <div className="card-container">
            <div className="card-detail">
                <div className="card-category">{ category }</div>
                <div className="card-title">{ title }</div>
                <div className="card-summary">{ summary }</div>
                <div className="card-date">{ date }</div>
            </div>
        </div>
    );
};

function Lower(){
    return (
        <div className="lower-container">
            {cards.map(card => (
                <Card key={card.id} category={card.category} title={card.title} summary={card.summary} date={card.date} />
            ))}
            <div className="footer">
                Thank you
            </div>
        </div>
    )
}

export default Lower;


{/* <div className="lower-container">
        <p>This is the lower component</p>
        </div> */}