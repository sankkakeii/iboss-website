






















































import React, { useEffect } from 'react';
import './scroll.css';
import gsap from 'gsap'; // Import GSAP library

const SkillBased = () => {
    useEffect(() => {
        // Your JavaScript code here
        var $tickerWrapper = document.querySelector(".tickerwrapper");
        var $list = $tickerWrapper.querySelector("ul.list");
        var $clonedList = $list.cloneNode(true);
        var listWidth = 10;

        $list.querySelectorAll("li").forEach(function (item) {
            listWidth += item.offsetWidth;
        });

        var endPos = $tickerWrapper.offsetWidth - listWidth;

        $list.style.width = listWidth + "px";
        $clonedList.classList.add("cloned");
        $tickerWrapper.appendChild($clonedList);

        var infinite = new gsap.timeline({
            repeat: -1,
            paused: true,
        });
        var time = 40;

        infinite
            .fromTo(
                $list,
                time,
                { rotation: 0.01, x: 0 },
                { force3D: true, x: -listWidth, ease: gsap.Linear.easeNone },
                0
            )
            .fromTo(
                $clonedList,
                time,
                { rotation: 0.01, x: listWidth },
                { force3D: true, x: 0, ease: gsap.Linear.easeNone },
                0
            )
            .set($list, { force3D: true, rotation: 0.01, x: listWidth })
            .to(
                $clonedList,
                time,
                { force3D: true, rotation: 0.01, x: -listWidth, ease: gsap.Linear.easeNone },
                time
            )
            .to($list, time, { force3D: true, rotation: 0.01, x: 0, ease: gsap.Linear.easeNone }, time)
            .progress(1)
            .progress(0)
            .play();

        // Pause/Play
        $tickerWrapper.addEventListener("mouseenter", function () {
            infinite.pause();
        });
        $tickerWrapper.addEventListener("mouseleave", function () {
            infinite.play();
        });
    }, []); // Empty dependency array to run the effect only once after the initial render

    return (
        <div className="tickerwrapper">
            <ul className="list">
                <li className="listitem">
                    <span>Python</span>
                </li>
                <li className="listitem">
                    <span>React.Js</span>
                </li>
                <li className="listitem">
                    <span>Node.Js</span>
                </li>
                <li className="listitem">
                    <span>Ruby on Rails</span>
                </li>
                <li className="listitem">
                    <span>Dynamic 365</span>
                </li>
                <li className="listitem">
                    <span>Flutter</span>
                </li>
                <li className="listitem">
                    <span>Angular</span>
                </li>
                <li className="listitem">
                    <span>Swift</span>
                </li>
                <li className="listitem">
                    <span>Python</span>
                </li>
                <li className="listitem">
                    <span>React.Js</span>
                </li>
                <li className="listitem">
                    <span>Node.Js</span>
                </li>
                <li className="listitem">
                    <span>Ruby on Rails</span>
                </li>
                <li className="listitem">
                    <span>Dynamic 365</span>
                </li>
                <li className="listitem">
                    <span>Flutter</span>
                </li>
                <li className="listitem">
                    <span>Angular</span>
                </li>
                <li className="listitem">
                    <span>Swift</span>
                </li>
                <li className="listitem">
                    <span>Python</span>
                </li>
                <li className="listitem">
                    <span>React.Js</span>
                </li>
                <li className="listitem">
                    <span>Node.Js</span>
                </li>
                <li className="listitem">
                    <span>Ruby on Rails</span>
                </li>
                <li className="listitem">
                    <span>Dynamic 365</span>
                </li>
                <li className="listitem">
                    <span>Flutter</span>
                </li>
                <li className="listitem">
                    <span>Angular</span>
                </li>
                <li className="listitem">
                    <span>Swift</span>
                </li>
            </ul>
        </div>
    );
};

export default SkillBased;