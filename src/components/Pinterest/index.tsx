const Nav = () => {
    return (
        <div className="bg-indigo-500 flex-[0.1] flex">
            <input className="m-auto w-[80%] rounded-lg h-[50px]"></input>
        </div>
    );
};
const SideBar = () => {
    return <div className="bg-[#243c5a] flex-[0.1]  h-screen"></div>;
};

const Main = () => {
    let heights = [
        "h-[169px]",
        "h-[110px]",
        "h-[125px]",
        "h-[117px]",
        "h-[113px]",
        "h-[198px]",
        "h-[159px]",
        "h-[199px]",
        "h-[109px]",
        "h-[156px]",
        "h-[164px]",
        "h-[191px]",
        "h-[145px]",
        "h-[118px]",
        "h-[139px]",
        "h-[145px]",
        "h-[100px]",
        "h-[135px]",
        "h-[105px]",
        "h-[150px]",
        "h-[176px]",
        "h-[138px]",
        "h-[129px]",
        "h-[118px]",
        "h-[133px]",
        "h-[109px]",
        "h-[123px]",
        "h-[109px]",
        "h-[112px]",
        "h-[114px]",
        "h-[174px]",
        "h-[147px]",
        "h-[101px]",
        "h-[109px]",
        "h-[131px]",
        "h-[183px]",
        "h-[122px]",
        "h-[133px]",
        "h-[186px]",
        "h-[149px]",
        "h-[119px]",
        "h-[192px]",
        "h-[106px]",
        "h-[160px]",
        "h-[114px]",
        "h-[172px]",
        "h-[172px]",
        "h-[172px]",
        "h-[193px]",
        "h-[165px]",
        "h-[142px]",
        "h-[118px]",
        "h-[115px]",
        "h-[143px]",
        "h-[141px]",
        "h-[120px]",
        "h-[119px]",
        "h-[146px]",
        "h-[194px]",
        "h-[122px]",
        "h-[118px]",
        "h-[162px]",
        "h-[148px]",
        "h-[109px]",
        "h-[191px]",
        "h-[182px]",
        "h-[121px]",
        "h-[158px]",
        "h-[143px]",
        "h-[189px]",
        "h-[180px]",
        "h-[185px]",
        "h-[173px]",
        "h-[170px]",
        "h-[100px]",
        "h-[191px]",
        "h-[104px]",
        "h-[194px]",
        "h-[101px]",
        "h-[104px]",
        "h-[184px]",
        "h-[197px]",
        "h-[139px]",
        "h-[148px]",
        "h-[177px]",
        "h-[195px]",
        "h-[125px]",
        "h-[108px]",
        "h-[128px]",
        "h-[171px]",
        "h-[127px]",
        "h-[169px]",
        "h-[110px]",
        "h-[132px]",
        "h-[193px]",
        "h-[132px]",
        "h-[177px]",
        "h-[177px]",
        "h-[152px]",
        "h-[176px]"
    ];

    console.log(heights);
    return (
        <div className="bg-[#50d71e] flex-1 h-[100%] overflow-y-scroll grid grid-cols-pins gap-x-[10px] justify-center overflow-x-hidden">
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg small`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg md`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg lg`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg small`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg md`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg lg`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg small`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg md`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg lg`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg small`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg md`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg lg`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg lg`}
            ></div>
            <div
                className={`m-[5px] bg-[#241c5a] w-[300px] m-2 rounded-lg md`}
            ></div>
        </div>
    );
};

const Pinterest = () => {
    return (
        <div className="flex w-screen">
            <SideBar />

            <div className="flex flex-col h-screen flex-1">
                <Nav />
                <Main />
            </div>
        </div>
    );
};
export default Pinterest;
