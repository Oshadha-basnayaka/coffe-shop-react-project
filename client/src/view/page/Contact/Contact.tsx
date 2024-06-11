import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <>


                {/*//conatct photo*/}
                <div id="Contactpic">
                    <div className={"flex text-white  font-bold  justify-center items-center flex-col pt-[50px]"}>
                        <h1 className={"text-[40px] "}>The Best Coffe tast Experiance </h1>
                        <h1 className={"text-[62px] "}>Contac</h1>
                    </div>
                </div>



                {/*//second eke podi kalu patiya*/}
                <div className="bg-black bg-opacity-90   py-16 flex  justify-around items-center">

                    <div className={"flex gap-5 items-center justify-center "}>
                        <img  className="w-[30px] h-[30px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwUlEQVR4nO2Zy2sUQRCHf3G7JgmiF8UnCuLJx1EkRxG9KV5EQSEIPv4EwZNH8aaejP+Bgd2qSWJCJBANBCEeNIIvFBTBkzFBMclWr9DSG9FFsuz2LjPpYD7o48B8VHVNVQ2wxhorRzlNTinTlDJ9V6anNjU9WE24PpAK3bVCrvao0Nz8YPdOrAacYIMKDf8rUSPzALEzL907LJuX9SRqZHoRKy7FVivmbSOJqgjTrCtiO2LD9SNRoclmJP4cNiliw6bmWpDE3xQ7j5iwYj62KDLjhrANsaBMP1oR+Z1iRcSCZfOuZZGly38WMWDZFNsRsWzeIAYs05W2IiK0gBhwRWxRoZ9tpNYTxIIKjbURkd6oOl3bkoh57q5jHWLBOXRYNtOhIpW0cByxoSU6ExiNAcSIc+hQoYmAS34RsaIpHVAh26TI7GKpcy9iRYVuBqTXMzeK9YgRN4xO/4IB5XfMP4MYKUuyX5nmAyLDbhwGMaJCl4OqGJt7vmAgRnSZbUqDAnALEa+GHgXK3I4yMm5pMfE+OM36UUBsLAx07bZiPgXKiBtHF2JDi3RQhb4GpZnQ6HLfGR8tZbrgV7HKVLFsXvsWKTcZWzKH/S44MDLTtR1AJS0crfedUqFBvyjMRaYihWPKVA4sALO+N1OmoSaiOKNM5/Lc1AfJBB82kstGs8KFI8FpFnhUaM7vFDKXsWIOKdOXTCMj1dQcWeCuXZm3/pbN58xlhOZ8sclUZjHt3BP80WwtMlPIaa00kbHIt8xFqjL9SKxQX4bpNYk8UaZLYfMMNXUqpcIJ5E25lOwLmTRt42jcwUrhR2BlutHsQsPWvxsjUUyg1e0M0+PWRMwLN4yNiAU/bJUlOR2WbuaVn4cQI1UhTk4q08NqCy9178SEG8BmrAZcCZt8V2zF3Pc/jJZ+A5oPls1VP2av9Put8d/yC+WRhlhgFvr1AAAAAElFTkSuQmCC"/>
                        <h1 className="text-white  ">+9470 110 26 33</h1>
                    </div>

                    <div className={"flex gap-5 items-center justify-center"}>
                        <img  className="w-[30px] h-[30px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVR4nO2Zz2sTQRTHn+a9lSi1/kLUevYX3vQmLXoVxGpRvHjpVRCEqkc9SPWggiLSXjx4TEnepC0Fbav4F9SDxXpRaj2Iv9Bq6s5UOzLJtgRNurOb/RGkXxgIZN9mPvN+zUwAVvSfyxXObsV4WQoaU4wvJdMPM7zPo4rxkltwdkGzSgk8KJnGlSBtMyqgdACaRbofSDLdk0wLthBLMEwLUtBd/RQwXYhh2CiZngQFqOUdzbAhTU9Yh5KFd57pHDiJg5hwigqiCuZOGokdOCdsckYlWQCiDKkaMKOJQLiDzp64IJQ3EukzptnZTQjfuux0aQEtZrjsdCrGKUvbi7GDlLuzBYTOwaZa5dp8ZxFej2MHUQJf+YYGO111F6LonPJdCMap2EEk06zfREwo1bPXI7DewiOz8YMImmsIJAetviCC5mIHUYzvLEKrs569LNBpmxyDuGW1t2KcMon9t60uwGYlcMbCI2NJgNy2Lb8msU1OmFHxhD+EqoDcjB3EZeeYHUj4Mc+Zo7GD6EewTjK5cUFIQXN6ENZCElKMhdg8wpiDpOQWnZNxgbhF53iihyrFOB09CM6Yd0OSUow9MYBcgKRVLqmCvkaW5EzfTNeHNCSZbkVYrW5AWiqJ7A7JVIoA4rsehm2QpiTTtQjC6iqkLS2gRTK9b8AbH0y+QTNICTzfQKU6B80inQNHMU4GhmB8EXvf0BpWKcbXy01knjOHF59XjO1B7rrMs/Mic2TJvoiHlrVnnDZzCgxiJma1olUX0ErgwwDeeLC0aDnIKIHPLWzaA4NIQX3eyvXa2ug8bJWCPlt446MehC3Wc2Hq9QpDX+CYl4I+lY3ztD+IrWQ6a1GpzgR5p1tw9noL8EWPwBp7Q3OZVqkoExD1Np+xGOqdAicC744V44D3oz1hflTnYXutECuHVMgOrhY3qYwDQTaDc1LQ71I+uxNCyhXOiSjPGiWzHRL0SzL9tPpTSArq9lZvHBqUEtRflRf3o/oXQArqjvZhH5mzd7lRMk5GcQ6XtotcGsq2mZAquy+is4GpOGZE8S6dg1Yzt3LYD2Xb6j5orvMDJVQKUjaFaLG7LnflmbZcv9bgCmdfqKaTsLRfs5ZM170K0w9NLuVVw3+2T+WdrsA34c8UKQ3GaX0FVlcRYkfqkwo9sCOFoFgR+OkPQBhKYHyKxwoAAAAASUVORK5CYII="/>
                        <h1 className="text-white max-w-[250px] text-start pl-3">No 3/6 , bandaranayaka road , hettiwidiya , weligama</h1>
                    </div>

                    <div className={"flex gap-5 items-center justify-center"}>
                        <img  className="w-[30px] h-[30px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfElEQVR4nO1bW4scRRQumHM6rrfgDbw9ary+qcQ3QcW7UaOioD9g8+blJUFBXYOEqIFoEDeb+OCTjmyf6k0ICInr5c2g+AeyiRohWfcSYxa7aqIlZ3Ym2Z2d6q6erpqd0fmgYejprnPpU+ecOnVKiAEGGGCAgDCTArSE9ZrgVS1hTEn8VhNMKcI5JVEriYp/N+59owl2awkv6wm4y1RFRfQjTFVEqYye0gSxIjytJZpOLiXxlCb4IpXRBjMqUPQ6TFVcpQi3KokznQqdoYxpRfimqYrLRa/BVMXFSuI2RXjGt+ArFEF4WkkcMRPiQtELSCl6Ukv4JbTgKy84Wosrj62a4GZSXKAId3Zf8BWK+NRUxVBXhV8YH7peS/ip4ByeVxIPKsIPtYThNoIM83+K8BA/W3BaHDbj4pquCJ9ORDdrCccchZ7l0FejyoOtXrz12aX/8bO1pPKQlrBncQwHRRBMpfuiG4MLryROOwg+oyVsZudoGytLAUvBY+gEtrhEFkV44q9kzQ3hzJ7g5xzB/1aE240Ul+SN56qAJnhMJfE9ppHjE46Y/eJqb4I3HV7unCc4Xksq94rAqFHlPqaVYwnfczLmjaiWOJo7B2PY5I1gHj8xbHKYDju9EEs5pXXzxDUl8XkRGEyDaTnw80+NKo+UImbYARVIcpixlKKnRSDw2C7CL40MpXIEJXFb1pxnU1zGEMFvaRytE4HAYzONpQqvT4cMn6AI3+qImInFFUrinzZvz86ozpSMnqmbP+GJNI5uEYHBsZ4FVhLPKokv8D0dwz226MBrB7NfXFaYkCLcmqHV7cuYSqKNRb980TC4jF4crWOaLfy+nxEa3yi8nleWxIPvu8T5kAqw8LzWljUqiScL1RPSJNqYoc3NwgN8K2BxTHjdxnehlaMmiC2anM1Kb1dbAfVskctr7T/cZ26DTApQhH9YPP9u4QkhFFAfl2Cv5ePNO9UYdQJ3Z5jRA72ugFpcedgeuvGOfMaIq7dtPf+cz8JkKAU0HPgpiwW/5MAY7LGY0EFfTIZUAENJnLTI8LHLy99ZXv6gbxRAuMsiw6QDY3DU4kWH+0UB7UtudRmO5L6sHEtQ5ZkMO57FAqZzB1IS1WooQBE+53M8iyNPe0gB8GsLc7UySvCpgJluKIA3VFrX9mWU4KiA33vGCTJYWJ9KyHWCBFM9EwabaNYTWmidVTG+KPyHwa9zX9YSxizmc0gEgm8llEqEtIRXLC/Ph9yj9zUdfKTC621OhLerRED4sISarDxaajFkspbDEsZEYJRVgib4xGrBri03mmA8dEGko+kwjreXKIh87mczJIEtPoQsbgn5hc2sklhK0eP+iqIHxKWiC2haAvcGOfC81vb1eQ1Q2IErwretGZXEd8uWxZ35SPA2x7L4Diu/DgrseGNEJdGz5zZGZHSr6ObGSMMx1mTl/oyNkTNmQlzZETFF+E6fbI2du9fmY410TNB8KS7Ka4r4T2+OMtIkeqIft8f54qTIF9GP+q5BwufizXCLDMGPOeZ2nJ2RCAymkTXnG9Z42BwQa7wSXtg3dJ29VnA+OvAurUue0PquY5zfwZ0fufM+VM9gKqObeKfVsT/wtaxdZFcF8Bic4dlT3GV0T4aMQudDUY4lLDFFPgewl7erWru2shTAz3J/Dy9sXARvfvngwjexIIeu1QQ/FO39V4RfLVZrrK2yuxrPWFajPdAq2wQ7md5olsZR7w6vCHiV5do77PUimPIW58uCDy80Toq0XTsEOTDR7Rb5AguoEa6//6+OzFgOTW3QBNWivf8tX3uOKzk8zfri0FQ7cB2Oj8DVj8JJHOXaPO/Scq5QPzK3eM027nE5e5Srt1rCnX17bG6AAQYQ/YJ/AZ6e3SDg8lfyAAAAAElFTkSuQmCC"/>
                        <h1 className="text-white pr-28">open every days</h1>
                    </div>


                </div>






                {/*<div className=" bg-gradient-to-r from-[#1B1B1B] to-[#535353] max-h-screen">*/}
                {/*    <div>*/}
                {/*        <h1 className="text-2xl text-center pt-10 text-[#AB8B5A]">Contact</h1>*/}
                {/*        <h1 className="text-4xl text-center text-white pb-28">OUR DETAILS</h1>*/}
                {/*    </div>*/}

                {/*    <div className="flex justify-between pt-20">*/}
                {/*        <div>*/}
                {/*            <h1 className="pl-32 text-white pb-12" >About</h1>*/}

                {/*            <p className="text-white pl-32">*/}
                {/*                Far far away, behind <br/>*/}
                {/*                the word mountains, far from<br/>*/}
                {/*                the countries Vokalia and Consonantia,<br/>*/}
                {/*                there live the blind texts*/}
                {/*            </p>*/}
                {/*        </div>*/}

                {/*        <div>*/}
                {/*            <h1 className="text-white pb-12">Contac</h1>*/}

                {/*            <h2 className="text-white">+94 70 110 26 33</h2>*/}
                {/*            <h2 className="text-white">No 3/6 , bandaranayaka road , hettiwidiya , weligama</h2>*/}
                {/*            <h2 className="text-white">open every days</h2>*/}

                {/*        </div>*/}

                {/*        <div className="w-[30%]">*/}
                {/*            <h1 className="pr-80 text-white pb-12" >Book A Table</h1>*/}

                {/*            <h1 className="pr-80 text-white">Full Name</h1>*/}
                {/*            <input className="w-80 h-5"></input>*/}
                {/*            <h1 className="pr-80 text-white">Phone</h1>*/}
                {/*            <input className="w-40 h-5"></input>*/}
                {/*            <h1 className="pr-80 text-white">Message</h1>*/}
                {/*            <textarea className="w-80 h-20"></textarea>*/}

                {/*        </div>*/}

                {/*    </div>*/}

                {/*    /!*<div>*!/*/}
                {/*    /!*    <h1 className={"text-white text-center pt-20"}>Copyright ©2024 All rights reserved | Made by Oshadha Basnayaka</h1>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}

            </>
        );
    }
}
