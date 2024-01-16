import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { IconButton } from "@material-tailwind/react"
import React from "react";
import { TfiReload } from 'react-icons/tfi'

function Currency() {
    const [News, setNews] = useState([]);
    const [News1, setNews1] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        setIsLoad(false);
        axios(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`).then(({ data: { feed } }) => {
            setIsLoad(true);
            setNews(feed?.slice(0, 1));
        })
    }, [refresh]);
    useEffect(() => {
        setIsLoad(false);
        axios(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`).then(({ data: { feed } }) => {
            setIsLoad(true);
            setNews1(feed?.slice(0, 8));
        })
    }, [refresh]);

    // comment

    return (
        <div className="flex items-center justify-start flex-col w-full h-[100%] pt-[10px] backdrop-blur-[5px]">
            <div className="flex items-center justify-end w-[90%] h-[50px]">
                <IconButton className="rounded-full text-[20px] mt-[180px] text-[#fff] bg-[#051b2b]" onClick={() => setRefresh(!refresh)}>
                    <TfiReload className="pool" />
                </IconButton>
            </div>
            {!isLoad &&
                <div className="flex items-center justify-center w-[100%] h-[50vh] flex-col mt-[100px]">
                    <div className="hourglassBackground">
                        <div className="hourglassContainer">
                            <div className="hourglassCurves"></div>
                            <div className="hourglassCapTop"></div>
                            <div className="hourglassGlassTop"></div>
                            <div className="hourglassSand"></div>
                            <div className="hourglassSandStream"></div>
                            <div className="hourglassCapBottom"></div>
                            <div className="hourglassGlass"></div>
                        </div>
                    </div>
                    <p className="text-white mt-[10px]">Please wait</p>
                </div>
            }
            {isLoad && !News[0] &&
                <div className="flex items-center justify-center w-[100%] h-[50vh] flex-col">
                    <div className="box-of-star1">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div className="box-of-star2">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div className="box-of-star3">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div className="box-of-star4">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div data-js="astro" className="astronaut">
                        <div className="head"></div>
                        <div className="arm arm-left"></div>
                        <div className="arm arm-right"></div>
                        <div className="body">
                            <div className="panel"></div>
                        </div>
                        <div className="leg leg-left"></div>
                        <div className="leg leg-right"></div>
                        <div className="schoolbag"></div>
                    </div>
                </div>
            }
            {isLoad && !News1[0] &&
                <div className="flex items-center justify-center w-[100%] h-[50vh] flex-col">
                    <div className="box-of-star1">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div className="box-of-star2">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div className="box-of-star3">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div className="box-of-star4">
                        <div className="star star-position1"></div>
                        <div className="star star-position2"></div>
                        <div className="star star-position3"></div>
                        <div className="star star-position4"></div>
                        <div className="star star-position5"></div>
                        <div className="star star-position6"></div>
                        <div className="star star-position7"></div>
                    </div>
                    <div data-js="astro" className="astronaut">
                        <div className="head"></div>
                        <div className="arm arm-left"></div>
                        <div className="arm arm-right"></div>
                        <div className="body">
                            <div className="panel"></div>
                        </div>
                        <div className="leg leg-left"></div>
                        <div className="leg leg-right"></div>
                        <div className="schoolbag"></div>
                    </div>
                </div>
            }

            {/* menu 1 */}

            <div className="flex items-center justify-center w-full">
                {News?.map((i, key) => {
                    return (
                        <div key={key} className="flex flex-col items-center justify-center w-full h-[100px] bg-[#757070]">
                            <div className="flex justify-center items-center">
                                <marquee behavior="" direction="" className="w-[95%]">
                                    <p className="text-[12px] sm:text-[16px] text-white w-full">"Could Apple Replace Google With Its Own Search Engine… It Maybe A Matter Of 'When,' Says Mark Gurman - Microsoft  <b>( NASDAQ:MSFT )</b> , Alphabet  <b>( NASDAQ:GOOG )</b> , Alphabet  <b>( NASDAQ:GOOGL )</b>" "Popular tech analyst Mark Gurman has suggested the possibility of Apple Inc. AAPL developing its own search engine, potentially replacing Alphabet Inc.'s GOOG GOOGL Google. \"it may be closer than you think.\" "New iPhones Feeling The Heat? Apple Blames Software And Apps, Assures Solutions - Apple  <b>( NASDAQ:AAPL )</b> " "Apple Inc. AAPL is addressing concerns regarding its latest iPhone 15 devices becoming unusually warm. What Happened: The company identified software issues and specific third-party applications as the primary causes and assured users that corrective measures are in progress, reported Bloomberg." "iPhone 15 Surprises, Apple Defends Google Deal, MacBook Air Bargain, Overheating Concerns And More: This Week In Appleverse - Alphabet  <b>( NASDAQ:GOOG )</b> , Alphabet  <b>( NASDAQ:GOOGL )</b> "The week has been abuzz with tech news, particularly dominated by Apple Inc. AAPL. From a former Windows head being astonished at the desktop-like capabilities of the latest iPhone 15 series to the company's defense of its $19 billion deal with Google GOOG GOOGL, there's been much to dissect.</p>
                                </marquee>
                            </div>
                            <div className="w-full h-[80px] flex justify-center items-center text-[20px] font-bold font-sans uppercase bg-[#4e454595]">
                                <p className="text-[#f8792f]">Breaking News</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center w-full my-[20px] 2xl:grid-cols-4">
                {News1?.map((c, i) => {
                    return (
                        <div key={i} className="flex justify-center items-center w-full">
                            <a href={c?.url} className="w-[400px]">
                            <div  className="flex flex-col items-center justify-start w-[400px] text-[#ffffff] bg-[#807575a3] rounded shadow-sm border mt-[50px] hover:border-t-[#ffd606] border-t-[8px] cursor-pointer hover:bg-[#fff] hover:text-[#6a6767] duration-[.4s] sm:flex">
                                <div className="flex items-center justify-center flex-col  w-[400px] sm:flex">
                                    <img src={c?.banner_image} alt="picture" className="w-[400px] sm:flex" />
                                </div>
                                <div className="items-start justify-center flex-col sm:flex w-[400px] h-[150px] mt-[40px] p-[10px]">
                                    <p className="text-[15px] sm:text-[15px]">{c?.title}</p>
                                </div>  
                            </div>
                            </a>
                        </div>

                    )
                })}
            </div>

        </div>

    );
}
export default Currency;