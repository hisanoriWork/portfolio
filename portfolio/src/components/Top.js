import React from 'react';
import './style.css';

import {WorkList} from "./Work"
import penguin_image from '../images/Penguin.jpg';
import penguin_game from "../downloadFiles/ペンギン大海戦.zip";
import aimtarget_image from '../images/AimTarget.jpg';
import aimtarget_game from "../downloadFiles/AimTarget.zip";
import eyeswipe_image from '../images/eyeswipe.jpg';
import nigetabi_image from '../images/逃げ旅メーカー.jpg';

const Top = () => {
    const data = [
        {
            id : 1,
            title: "ペンギン大海戦",
            image: penguin_image,
            message: <>海賊船にペンギンを配置して<br />相手をやっつけろ!</>,
            width: 320,
            height: 180,
            url: "https://hisanoriwork.github.io/penguin/",
            youtube:"https://youtu.be/jcBHCMp6fyQ",
            download: penguin_game,
            github: "https://github.com/hisanoriWork/TowerDefence",
        },{
            id : 2,
            title: "Aim Target",
            image:  aimtarget_image,
            message: <>球を狙って高得点を目指せ！！</>,
            width: 320,
            height: 180,
            url: "https://hisanoriwork.github.io/aimtarget",
            youtube:"https://youtu.be/QuD1I11uses",
            download: aimtarget_game,
            github: "https://github.com/hisanoriWork/AimTargets",
        },{
            id : 3,
            title: "研究テーマ",
            image:  eyeswipe_image,
            message: <>EyeSwipe:視線での単語予測入力</>,
            width: 320,
            height: 180,
            url: "https://youtu.be/rhgRdHkNQIY",
            youtube:"https://youtu.be/rhgRdHkNQIY",
        },{
            id : 4,
            title: "逃げ旅メーカー",
            image:  nigetabi_image,
            message: <>ランダム旅先提案Webサービス</>,
            width: 320,
            height: 180,
            url: "https://youtu.be/gsbx6fiQXAM",
            youtube:"https://youtu.be/gsbx6fiQXAM",
            github:"https://github.com/welshonion/team-project-l",
        },
    ]

    return (
        <>
            <div className = "App">
                <h1 className="title">作品紹介</h1>
                <WorkList data = {data} />
            </div>
        </>
    );
}
export default Top;