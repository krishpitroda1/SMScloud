import React from "react";
import styled, { keyframes, css } from "styled-components";

function Companies() {
  const row1 = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Bharti_Airtel_Logo.svg",
    "https://www.broadnet.me/wp-content/uploads/2020/06/BN-Logo@2x.png",
    "https://cdn.softwarereviews.com/production/logos/offering_score_snapshots/65959/original/68747470733a2f2f7564657369676e6373732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f30312f496e666f6269702d6c6f676f2d7472616e73706172656e742e706e67.png?1674905410",
    "https://upload.wikimedia.org/wikipedia/en/9/9a/Telin_company_logo.png",
    "https://www.mrmessaging.net/wp-content/uploads/2023/03/colour-landscape-for-white-background.svg",
    "https://www.gsma.com/get-involved/gsma-membership/wp-content/uploads/2020/10/Logo_DecisionTelecom_new_on_white-1.jpg",
    "https://www.nobelglobe.com/images/logoNobelGlobe.png",
    "https://www.zeroandone.me/svg/monty.svg",
    "https://www.thefastmode.com/media/k2/items/cache/dee28ad62abf908f66075848714e4dd5_XL.jpg?t=20200808_042815",
  ];

  const row2 = [ 
     "https://upload.wikimedia.org/wikipedia/commons/a/a0/Videocon_Telocom_Logo.png",
     "https://th.bing.com/th/id/OIP.cdjdH02NeaqaDSbenQo5LAAAAA?rs=1&pid=ImgDetMain",
     "https://th.bing.com/th/id/OIP.PXgLeawbUW0_rDG8eYAzTQHaCC?rs=1&pid=ImgDetMain",
     "https://th.bing.com/th/id/OIP.8Y-1Y_Z5HHC9zrOmNs-YfAHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
     "https://tubelightcommunications.com/static/media/tubelightLogo.719a8cd1a76eb3892b99.png",
     "https://i.vimeocdn.com/portrait/20170818_640x640",
     "https://media.licdn.com/dms/image/C510BAQGJz4lO--fDMw/company-logo_200_200/0/1545648884048?e=2147483647&v=beta&t=WCv3lA_ga7K1zYAjyUupaCdyMB-nbJYuubcv8BM6Bag",
     "https://virtuosonetsoft.com/assets/images/logos/logo.png"
  
    
  ];
  const row3=[
    "https://www.modicagroup.com/hubfs/Modica%20Logo%20-%20no%20copyright%20sv%20(1).svg",
    "https://www.cm.com/build/assets/cm-f4ffa018.svg",
    "https://assets-global.website-files.com/647ce2d8d3cfe3869a4e099e/647e00e214ff98f71af17ecc_SixFive_logo_S.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCtno5ncHLFueqKu6z-3saRQdaSpJ_a5wsnaWC4FqtQ&s",
    "https://www2.lexico-voip.com/wp-content/uploads/2017/08/Lexico_logo11_1.svg",
    "https://ml-eu.globenewswire.com/Resource/Download/288a0ed2-2895-4f1a-8107-0a4b8ce69c73",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtd-5kMVr9UL-6Vt06fVoU9Thn_2QcXc5PxuTHDp8oQ&s", 
    "https://www.paasoo.com/assets/images/logo.svg?v=3.15.2",
    "https://techalphagroup.com/wp-content/uploads/2023/05/logo_tag-e1702022019436.png",
  
  ];

  return (
    // <AppContainer className="pt-0 mt-0">
      <Wrapper className="pt-5">
        <p className="text-4xl p-5 text-gray-500 text-center font-bold">Those who love to work with us...</p>
        {/* <Text className="p-7 text-3xl  w-screen text-center ">Our Partners</Text> */}
        <div className="pt-5">

        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup> 
                <Image className="w-4" alt="Company Logo"  src={el}/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} alt='Company Logo'/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
         <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} alt='Company Logo'/>
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} alt="Company Logo"/>
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
        <Marquee>
          <MarqueeGroup>
            {row3.map((el) => (
              <ImageGroup> 
                <Image  src={el} alt="Company Logo "/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row3.map((el) => (
              <ImageGroup>
                <Image src={el} alt="Company Logo"/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        </div>
      </Wrapper> 
    // </AppContainer>
  );
}

export default Companies;

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   color: #000000;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// const Text = styled.div`
//   font-size: 35px;
//   font-weight: 500;
//   background-color:red;
//   margin-bottom: 10px;
//   color: #02203c;
// `;

// const Note = styled.div`
//   font-size: 18px;
//   font-weight: 200;
//   margin-bottom: 40px;
//   color: #7c8e9a;
// `;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 500px;
  padding: 10px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 300px;
  height: 80px;
  border-radius: 0.5rem;
  aspect-ratio: 21/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  alt:image;
`;