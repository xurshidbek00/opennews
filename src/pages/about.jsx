import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs"
function About() {
    return (
        <div className="flex justify-center items-start w-full h-[100vh] bg-none backdrop-blur-[8px] p-[20px_10px_0_10px] sm:flex">
            <div className="flex flex-col justify-start items-center w-[700px] h-[400px] bg-[#40393994]  rounded-[45px] shadow-[-99px 27px #9b9119, 9px -9px 27px #ffff33;] mt-[100px] border-[2px] border-white p-[40px_10px_0_10px] text-[#ffffff] text-[13px] text-center">
                <p className="mb-[10px] sm:text-[14px]">Get breaking news from Global News as it happens. We’ll notify you when there’s an important story you want to know about. The notifications will take you directly to the article at globalnews.ca.</p>
                <div className="flex h-[4px] w-full bg-[#b1aeae] rounded-full"></div>
                <p className="mt-[20px]">For feedback related to our News programming, please contact the below based on your local Global News station. In contacting us, you are consenting to receive a reply:</p>
                <div className="flex flex-col w-full h-[120px] sm:h-[240px] md:h-[200px] xl:h-[200px] 2xl:h-[200px] bg-[#0b0b0b5d] mt-[10px] rounded-[10px] items-center justify-center">
                    <p className="mb-[20px]">Contact Us</p>
                   <div className="grid grid-cols-3 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                    <button className="buttonb h-[30px]">
                        <span className="span">Telegram</span>
                        <span className="span"><BsTelegram/></span>
                    </button>
                    <button className="button1 h-[30px]">
                        <span className="span">Instagram</span>
                        <span className="span"><BsInstagram/></span>
                    </button>
                    <button className="button2 h-[30px]">
                        <span className="span">Facebook</span>
                        <span className="span"><BsFacebook/></span>
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default About;