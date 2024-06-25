import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Product from "../../../componanent/Product";
import DiscoverOurStory from "../../../image/Group 15.png";
import Pic1 from "../../../image/ourMenuImg/download (3).jpeg";
import Pic3 from "../../../image/ourMenuImg/Beafourtony Espresso Cups and Saucers Unique craft Ceramic Cup.png";
import Pic2 from "../../../image/ourMenuImg/download (2).jpeg";
import Pic4 from "../../../image/ourMenuImg/Free PSD _ Mockup of a cup of takeaway coffee.png";
import OurProductPic1 from "../../../image/OurProductPic/Beafourtony Espresso Cups and Saucers Unique craft Ceramic Cup.png";
import OurProductPic2 from "../../../image/OurProductPic/Free PSD _ Mockup of a cup of takeaway coffee.png";
import OurProductPic3 from "../../../image/OurProductPic/Tea holic.png";

interface Product {
    img: string;
    title: string;
    description: string;
    price: string;
}

const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const testimonials = [
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    },
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    },
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    },
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    },
];

export const products: Record<string, Product[]> = {
    coffee: [
        {
            img: OurProductPic1,
            title: "Cappuccino Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic2,
            title: "Ice Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        
    ],
    juice: [
        {
            img: OurProductPic3,
            title: "Mango Juice",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic1,
            title: "Apple Juice",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic2,
            title: "Avacardo Juice",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },{
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
    ],
    desserts: [
        {
            img: OurProductPic1,
            title: "Polcake",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic2,
            title: "cheese cake",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "lava Cake",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },{
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
        {
            img: OurProductPic3,
            title: "Chai Coffee",
            description:
                "Indulge in warmth and spice with our Chai Coffee at [Your Coffee Shop's Name]. A perfect fusion of rich espresso and aromatic chai, it's a sip of pure delight. Discover your cozy moment in every cup!",
            price: "$2.89",
        },
    ],
};

interface FeatureCardProps {
    imgSrc: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    imgSrc,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col items-center text-center gap-4 p-5 bg-white rounded-lg shadow-lg max-w-xs">
            <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" />
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const Home = () => {
    const [selectedCategory, setSelectedCategory] =
        useState<keyof typeof products>("coffee");

    return (
        <>
            {/*//home photo*/}
            <div id="homePic" className="relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#AB8A5A]">
                        Welcome
                    </h1>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl">
                        Amazing Taste And Beautiful Place
                    </h1>
                </div>

                <div className="absolute inset-x-0 bottom-20 flex justify-center space-x-10">
                    <button className="px-8 md:px-10 lg:px-12 py-3 bg-[#AB8A5A] text-black border-2 font-bold">
                        <Link to="/menu">View Menu</Link>
                    </button>
                </div>
            </div>

            {/*//second eke podi kalu patiya*/}
            <div className="bg-black bg-opacity-90 py-16 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                <div className="flex gap-5 items-center justify-center">
                    <img
                        className="w-[30px] h-[30px]"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwUlEQVR4nO2Zy2sUQRCHf3G7JgmiF8UnCuLJx1EkRxG9KV5EQSEIPv4EwZNH8aaejP+Bgd2qSWJCJBANBCEeNIIvFBTBkzFBMclWr9DSG9FFsuz2LjPpYD7o48B8VHVNVQ2wxhorRzlNTinTlDJ9V6anNjU9WE24PpAK3bVCrvao0Nz8YPdOrAacYIMKDf8rUSPzALEzL907LJuX9SRqZHoRKy7FVivmbSOJqgjTrCtiO2LD9SNRoclmJP4cNiliw6bmWpDE3xQ7j5iwYj62KDLjhrANsaBMP1oR+Z1iRcSCZfOuZZGly38WMWDZFNsRsWzeIAYs05W2IiK0gBhwRWxRoZ9tpNYTxIIKjbURkd6oOl3bkoh57q5jHWLBOXRYNtOhIpW0cByxoSU6ExiNAcSIc+hQoYmAS34RsaIpHVAh26TI7GKpcy9iRYVuBqTXMzeK9YgRN4xO/4IB5XfMP4MYKUuyX5nmAyLDbhwGMaJCl4OqGJt7vmAgRnSZbUqDAnALEa+GHgXK3I4yMm5pMfE+OM36UUBsLAx07bZiPgXKiBtHF2JDi3RQhb4GpZnQ6HLfGR8tZbrgV7HKVLFsXvsWKTcZWzKH/S44MDLTtR1AJS0crfedUqFBvyjMRaYihWPKVA4sALO+N1OmoSaiOKNM5/Lc1AfJBB82kstGs8KFI8FpFnhUaM7vFDKXsWIOKdOXTCMj1dQcWeCuXZm3/pbN58xlhOZ8sclUZjHt3BP80WwtMlPIaa00kbHIt8xFqjL9SKxQX4bpNYk8UaZLYfMMNXUqpcIJ5E25lOwLmTRt42jcwUrhR2BlutHsQsPWvxsjUUyg1e0M0+PWRMwLN4yNiAU/bJUlOR2WbuaVn4cQI1UhTk4q08NqCy9178SEG8BmrAZcCZt8V2zF3Pc/jJZ+A5oPls1VP2av9Put8d/yC+WRhlhgFvr1AAAAAElFTkSuQmCC"
                    />
                    <h1 className="text-white text-lg">+9470 110 26 33</h1>
                </div>

                <div className="flex gap-5 items-center justify-center">
                    <img
                        className="w-[30px] h-[30px]"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVR4nO2Zz2sTQRTHn+a9lSi1/kLUevYX3vQmLXoVxGpRvHjpVRCEqkc9SPWggiLSXjx4TEnepC0Fbav4F9SDxXpRaj2Iv9Bq6s5UOzLJtgRNurOb/RGkXxgIZN9mPvN+zUwAVvSfyxXObsV4WQoaU4wvJdMPM7zPo4rxkltwdkGzSgk8KJnGlSBtMyqgdACaRbofSDLdk0wLthBLMEwLUtBd/RQwXYhh2CiZngQFqOUdzbAhTU9Yh5KFd57pHDiJg5hwigqiCuZOGokdOCdsckYlWQCiDKkaMKOJQLiDzp64IJQ3EukzptnZTQjfuux0aQEtZrjsdCrGKUvbi7GDlLuzBYTOwaZa5dp8ZxFej2MHUQJf+YYGO111F6LonPJdCMap2EEk06zfREwo1bPXI7DewiOz8YMImmsIJAetviCC5mIHUYzvLEKrs569LNBpmxyDuGW1t2KcMon9t60uwGYlcMbCI2NJgNy2Lb8msU1OmFHxhD+EqoDcjB3EZeeYHUj4Mc+Zo7GD6EewTjK5cUFIQXN6ENZCElKMhdg8wpiDpOQWnZNxgbhF53iihyrFOB09CM6Yd0OSUow9MYBcgKRVLqmCvkaW5EzfTNeHNCSZbkVYrW5AWiqJ7A7JVIoA4rsehm2QpiTTtQjC6iqkLS2gRTK9b8AbH0y+QTNICTzfQKU6B80inQNHMU4GhmB8EXvf0BpWKcbXy01knjOHF59XjO1B7rrMs/Mic2TJvoiHlrVnnDZzCgxiJma1olUX0ErgwwDeeLC0aDnIKIHPLWzaA4NIQX3eyvXa2ug8bJWCPlt446MehC3Wc2Hq9QpDX+CYl4I+lY3ztD+IrWQ6a1GpzgR5p1tw9noL8EWPwBp7Q3OZVqkoExD1Np+xGOqdAicC744V44D3oz1hflTnYXutECuHVMgOrhY3qYwDQTaDc1LQ71I+uxNCyhXOiSjPGiWzHRL0SzL9tPpTSArq9lZvHBqUEtRflRf3o/oXQArqjvZhH5mzd7lRMk5GcQ6XtotcGsq2mZAquy+is4GpOGZE8S6dg1Yzt3LYD2Xb6j5orvMDJVQKUjaFaLG7LnflmbZcv9bgCmdfqKaTsLRfs5ZM170K0w9NLuVVw3+2T+WdrsA34c8UKQ3GaX0FVlcRYkfqkwo9sCOFoFgR+OkPQBhKYHyKxwoAAAAASUVORK5CYII="
                    />
                    <h1 className="text-white max-w-[250px] text-lg text-center md:text-start">
                        No 3/6 , Bandaranayaka Road , Hettiwidiya , Weligama
                    </h1>
                </div>

                <div className="flex gap-5 items-center justify-center">
                    <img
                        className="w-[30px] h-[30px]"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfElEQVR4nO1bW4scRRQumHM6rrfgDbw9ary+qcQ3QcW7UaOioD9g8+blJUFBXYOEqIFoEDeb+OCTjmyf6k0ICInr5c2g+AeyiRohWfcSYxa7aqIlZ3Ym2Z2d6q6erpqd0fmgYejprnPpU+ecOnVKiAEGGGCAgDCTArSE9ZrgVS1hTEn8VhNMKcI5JVEriYp/N+59owl2awkv6wm4y1RFRfQjTFVEqYye0gSxIjytJZpOLiXxlCb4IpXRBjMqUPQ6TFVcpQi3KokznQqdoYxpRfimqYrLRa/BVMXFSuI2RXjGt+ArFEF4WkkcMRPiQtELSCl6Ukv4JbTgKy84Wosrj62a4GZSXKAId3Zf8BWK+NRUxVBXhV8YH7peS/ip4ByeVxIPKsIPtYThNoIM83+K8BA/W3BaHDbj4pquCJ9ORDdrCccchZ7l0FejyoOtXrz12aX/8bO1pPKQlrBncQwHRRBMpfuiG4MLryROOwg+oyVsZudoGytLAUvBY+gEtrhEFkV44q9kzQ3hzJ7g5xzB/1aE240Ul+SN56qAJnhMJfE9ppHjE46Y/eJqb4I3HV7unCc4Xksq94rAqFHlPqaVYwnfczLmjaiWOJo7B2PY5I1gHj8xbHKYDju9EEs5pXXzxDUl8XkRGEyDaTnw80+NKo+UImbYARVIcpixlKKnRSDw2C7CL40MpXIEJXFb1pxnU1zGEMFvaRytE4HAYzONpQqvT4cMn6AI3+qImInFFUrinzZvz86ozpSMnqmbP+GJNI5uEYHBsZ4FVhLPKokv8D0dwz226MBrB7NfXFaYkCLcmqHV7cuYSqKNRb980TC4jF4crWOaLfy+nxEa3yi8nleWxIPvu8T5kAqw8LzWljUqiScL1RPSJNqYoc3NwgN8K2BxTHjdxnehlaMmiC2anM1Kb1dbAfVskctr7T/cZ26DTApQhH9YPP9u4QkhFFAfl2Cv5ePNO9UYdQJ3Z5jRA72ugFpcedgeuvGOfMaIq7dtPf+cz8JkKAU0HPgpiwW/5MAY7LGY0EFfTIZUAENJnLTI8LHLy99ZXv6gbxRAuMsiw6QDY3DU4kWH+0UB7UtudRmO5L6sHEtQ5ZkMO57FAqZzB1IS1WooQBE+53M8iyNPe0gB8GsLc7UySvCpgJluKIA3VFrX9mWU4KiA33vGCTJYWJ9KyHWCBFM9EwabaNYTWmidVTG+KPyHwa9zX9YSxizmc0gEgm8llEqEtIRXLC/Ph9yj9zUdfKTC621OhLerRED4sISarDxaajFkspbDEsZEYJRVgib4xGrBri03mmA8dEGko+kwjreXKIh87mczJIEtPoQsbgn5hc2sklhK0eP+iqIHxKWiC2haAvcGOfC81vb1eQ1Q2IErwretGZXEd8uWxZ35SPA2x7L4Diu/DgrseGNEJdGz5zZGZHSr6ObGSMMx1mTl/oyNkTNmQlzZETFF+E6fbI2du9fmY410TNB8KS7Ka4r4T2+OMtIkeqIft8f54qTIF9GP+q5BwufizXCLDMGPOeZ2nJ2RCAymkTXnG9Z42BwQa7wSXtg3dJ29VnA+OvAurUue0PquY5zfwZ0fufM+VM9gKqObeKfVsT/wtaxdZFcF8Bic4dlT3GV0T4aMQudDUY4lLDFFPgewl7erWru2shTAz3J/Dy9sXARvfvngwjexIIeu1QQ/FO39V4RfLVZrrK2yuxrPWFajPdAq2wQ7md5olsZR7w6vCHiV5do77PUimPIW58uCDy80Toq0XTsEOTDR7Rb5AguoEa6//6+OzFgOTW3QBNWivf8tX3uOKzk8zfri0FQ7cB2Oj8DVj8JJHOXaPO/Scq5QPzK3eM027nE5e5Srt1rCnX17bG6AAQYQ/YJ/AZ6e3SDg8lfyAAAAAElFTkSuQmCC"
                    />
                    <h1 className="text-white text-lg pr-28">Open every day</h1>
                </div>
            </div>

            {/*// our story eke thiyn photo eki text eki*/}

            {/*//kahapata kotasa*/}
            <div className="bg-[#AB8B5A] py-16 px-4 md:px-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-around items-center">
                    <FeatureCard
                        imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkklEQVR4nO2VQQqAMBAD9x3z/3/qVRYpKGi0nQFPnpJs0ir5CcD2xa8UQj4FTKTsyOZpYUfGLLFa9TAo5IT0CeGD2Eg7j4k00s5jIo2085hII+08JtJIO4+JNK64Mvp3B95KZBoh2BEsO54WC5S9ZhGCq4WrhafFAmWvWYTgauFq4WmR7wOW/UDaeUykMU0iUhl22Ir/2HFFC4wAAAAASUVORK5CYII="
                        title="EASY TO ORDER"
                        description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                    />
                    <FeatureCard
                        imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMklEQVR4nO2Zz2oTURTGD1p1ZZXEhPt9M0lgyCrbbPUJBG0MPoToXt/AjeIDuBLduvYF/LfQurKtdtUWkUJ3FRQUR46cyhA6MzYzaWeG+8Hd3Jycb373nJu5l4h4eXl5eXkVEMn4mMcugIfD4fBc3UFiHQAeNAKE5G5TQGKpouhBShKb0lqsAEhO3FeSz8IwHJYKXuYiHDHPfhAEV2sHIibn3IDkc50D8APAlYU8zKJBTKcBPDGYL865jtQURLVE8qV9/kJETkkRnSCIkOwB2LPK3KstiEo3PMnfJH8CuCw1bK1/0tOzVWUHwKXagozH4zMA3lrsU/lfVQ1E1e12IwDftc0AjKWuICqSjyz+cWVbi+Q1yZFWQmMBbFYZJD7C+NUUkNiD0FeEvrXo9wib+av1EcD1drt9XgeAFZLriwABsO2cmya8JgA2ygBZi6LowuybVeeKwBwGAmA7DMPWrJfO6Wk3NZdeHfMMtRIZx4RJmSDOuWmaVxAEN1NybWmS+3mGWt605K1Wa7lMkPYcXn9vi6PR6KzCZFUmK7m117GARDNe2oYA7ube3wG8ti+spMU4525YzCspoITXJMNrOpcXgDtGv37YZh8MBhcBfLKYW1JAJG/bQ25kbPbPc3lp2wH4cGCgq6V9qkMrkYB4r7FFQMxr1bx2dGMnvKYJiHdzefV6PR7ApGy01U6n46QE9ft9ZHnpghXy0v/7tM3swv9NB4A32g5FK3GSXl5eXlI//QFNxRii1nWsDQAAAABJRU5ErkJggg=="
                        title="FAST DELIVERY"
                        description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                    />
                    <FeatureCard
                        imgSrc="data:image/png;base64,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"
                        title="QUALITY COFFEE"
                        description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                    />
                </div>
            </div>

            {/*//discover our menu kotasa*/}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 items-center py-10 md:py-20 px-5 md:px-10">
                <div className="flex flex-col items-end justify-center text-right max-w-lg lg:max-w-none">
                    <h1 className="text-2xl md:text-3xl text-[#AB8B5A]">Discover</h1>
                    <h1 className="text-4xl md:text-5xl text-white font-bold">
                        OUR MENU
                    </h1>
                    <p className="text-white mt-6 md:mt-8 max-w-md">
                        At Taste Coffee, each cup is a tale. From sourcing the finest beans
                        to crafting your brew, our story is woven into every sip. Join us in
                        a journey of flavor, warmth, and community. Welcome to a place where
                        coffee isn't just a drink; it's a story waiting to unfold.
                    </p>
                    <button className="text-white border-2 border-[#AB8B5A] px-5 py-2 mt-6 md:mt-8 transition hover:bg-[#AB8B5A]">
                        <Link to="/menu">View Menu</Link>
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <div className="flex flex-col gap-5">
                        <img
                            className="w-52 h-80 object-cover rounded-lg shadow-lg"
                            src={Pic1}
                            alt="Coffee Image 1"
                        />
                        <img
                            className="w-52 h-56 object-cover rounded-lg shadow-lg"
                            src={Pic3}
                            alt="Coffee Image 3"
                        />
                    </div>
                    <div className="flex flex-col gap-5 mt-10 sm:mt-0">
                        <img
                            className="w-52 h-56 object-cover rounded-lg shadow-lg"
                            src={Pic2}
                            alt="Coffee Image 2"
                        />
                        <img
                            className="w-52 h-80 object-cover rounded-lg shadow-lg"
                            src={Pic4}
                            alt="Coffee Image 4"
                        />
                    </div>
                </div>
            </div>

            {/*//wadakaran gana , shop pramanaya wisthara*/}
            {/* <div className=" flex justify-around items-center" id="bgPic">
                <div className="flex-col justify-center items-center flex gap-5 ">
                    <div className="border-4 border-[#AB8B5A] px-5 py-5">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII=" />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">100</h1>
                    <h2 className="text-white text-2xl">Coffe Branches</h2>
                </div>
                <div className="flex-col justify-center items-center flex gap-5">
                    <div className="border-4 border-[#AB8B5A] px-5 py-5">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII=" />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">85</h1>
                    <h2 className="text-white text-2xl">Number of Awards</h2>
                </div>
                <div className="flex-col justify-center items-center flex gap-5">
                    <div className="border-4 border-[#AB8B5A] px-5 py-5">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII=" />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">10567</h1>
                    <h2 className="text-white text-2xl">Happy Customer</h2>
                </div>
                <div className="flex-col justify-center items-center flex gap-5">
                    <div className="border-4 border-[#AB8B5A] px-5 py-5">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII=" />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">900</h1>
                    <h2 className="text-white text-2xl">Staff</h2>
                </div>
            </div> */}

            <div className="flex flex-wrap justify-around items-center p-10 gap-8 bg-gray-800">
                <div className="flex flex-col justify-center items-center gap-5 w-60">
                    <div className="border-4 border-[#AB8B5A] p-5 rounded-lg bg-gray-900 shadow-lg">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII="
                            alt="Coffee Branches"
                        />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">100</h1>
                    <h2 className="text-white text-2xl text-center">Coffee Branches</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 w-60">
                    <div className="border-4 border-[#AB8B5A] p-5 rounded-lg bg-gray-900 shadow-lg">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII="
                            alt="Coffee Branches"
                        />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">85</h1>
                    <h2 className="text-white text-2xl text-center">Number of Awards</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 w-60">
                    <div className="border-4 border-[#AB8B5A] p-5 rounded-lg bg-gray-900 shadow-lg">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII="
                            alt="Coffee Branches"
                        />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">1850</h1>
                    <h2 className="text-white text-2xl text-center">Happy Customer</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 w-60">
                    <div className="border-4 border-[#AB8B5A] p-5 rounded-lg bg-gray-900 shadow-lg">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1bS4gdRRS9oe/tmZFEMH4IioioqCsVP4girhTjZxB/Kw26VnClBJKNbkQFxZ1D/IO/h+m6bzJGEDSgoxs/wY2fSAyZOIpgNBBnpqs6WFLvRZyuV/2mu193vxrsA7WZOV1176lbt6pv1wNo0aJFixKIOZxWjEdMS6Jga1M8L6AYr5JMUjHpfsMjTfC8gN4HqAR+/5+xPYMX6uZ5AynowbSxpGVE99XN8wZS0Lw1Wy81wfMGkul4yuAIr2mC5w0k07FUuAr6Qwl8XM8A1cnzBoppxl6zPcOZPtcd2FgXzxvoDmyUTJ+5jDbO1MXzCnoGSDE+1gvX9Kz9WSfPO8QcXmwZfLwJnjdQjDtSISvwqwzezip5XiAW4R1SUGLt4dsHeBxOV8nzBkrgz1a4/ubK2lXzvIFiXFi1dydJN7ilCZ43SERwa99oPBRzeE8mLwq2Vslr0aJFi0aQcHCbvTX51WquHapegXLcTq4pQn2lM8l0YvwODm/GxjoFWPZeAEFLdQpwbPVgehbOKPK8bWwVNhkb7AhQjAfNybFXWhP4jRT0XByFl448mFp1NDUtng0vGbcAxrG8S0MyPa/3wkTpwRTj/lTHAm8YtwAqwhsLLpEPStcWpaAPUxHQDe8atwCyG95bIlE+W2owxbgr1VkXH8n7rN4Lp9qGmL+VMiRt06PWDM8n3eAm3YHNugNn9j+ypJeuyQ/xnvCiMoNtTzuBu/I5jjsl01HHTBw1/xtFCCXwZcumh23OEk+d7RDhmcKDxSK803Liy6F8U9FxOO4SwlSTSgrwtRWV17t4kukhS6j9hQdbFpPnWirGwxKKZPol99oUuFjUHt2BcPUXZCnob82wycVd2jN1jmX7X0XH60EK+tVS/FrIQFbIZy2JrH4y+xd4nSXij3lzkGRSRcfrQTG+ZXX0NGRgWNJzJUUoCJPNrbB+NdOWWbza4pa7byDttTRE9bUcHDkCGA+mtmUOp4fY/aJlN0PZo6dkUunO6MqmBbBn1Bx7dQemXFzJdIUUtGLlgAeKjJeCZHrfUvNtcCB3AiwjAOO7lg0dF0/upstMgrW4h0c6EidRcLOl/omV7sSFTQlgDjEDr+YCD8uI7jcR2tsdBF1uXoLS94z6O4XZzks7/y/MJyorqbw5WgElfyHDTsRFWqkDkAvmzo7dufku4Kjr5xABF/J+9Eii4PYRnH9Ka9gAVUB3IBg4hTEu6Dk4rZIB3GNuHhBU4OLahRo8ZE9OJZBmnVk7ghT0UR1XWU6u64+t3CONDXoOtkhBT0imTyXT7yev1BxQjO/EIry71qs1kunJAcUFvlJZqBnnNWwwhxzHzO6oaoxRZ2beIcJr5sLjyP33L02+PrCemT6pov9KoCM4XTH+4BCBs15OcvXLsEkJ7Dr6/c7kA/AJK9HEBQMvSv0w/bZMQdLUG82zDucXl9+bPA98xEp34vx+8im3Ta3ZBP5UqpLTJPQcbBncHkdvUtAXejecBesBeh9MSkEvVCcAvqFn4RRYb5BM2wZeRIqFvDnkbBu3Hy1aeH9PoOHfFCkv7wk0+JMa9X8XIMn9nt+c895fomzRogWsF/wDl14i0DScrikAAAAASUVORK5CYII="
                            alt="Coffee Branches"
                        />
                    </div>
                    <h1 className="text-[#AB8B5A] text-2xl">900</h1>
                    <h2 className="text-white text-2xl text-center">Staff</h2>
                </div>
            </div>

            {/*//Our Product*/}

            

            <Product data={products} viewButton={true}   sliceCount={2} />

            


            {/*//Customer Syas*/}
            <div className="bg-gradient-to-r from-[#535353] to-[#1B1B1B] flex flex-col  px-5 py-14">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-[#AB8B5A]">Testimony</h1>
                    <h1 className="text-4xl text-white">CUSTOMERS SAY</h1>
                    <p className="text-white text-center max-w-[700px]">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 pt-14">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#AB8A5A] p-8 rounded-lg shadow-lg max-w-md w-full"
                            initial="hidden"
                            animate="visible"
                            variants={testimonialVariants}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <p className="text-xl text-white">{testimonial.text}</p>
                            <h1 className="pt-5 text-white text-right font-semibold">
                                {testimonial.author}
                            </h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
