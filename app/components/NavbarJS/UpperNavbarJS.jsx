"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "./logo-no-background.png";
import logo2 from "./logo-transparent.png";
import Image from "next/image";
import { GlobalContext } from "../../context/GlobalContext";
import { useSession, signOut, signIn } from "next-auth/react";

const UpperNavbarJS = ({ state, setState }) => {
  const { data: session } = useSession();
  const [loginState, setLoginState] = useState(false);
  const profileImage = session?.user?.image;
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { links } = useContext(GlobalContext);
  return (
    <div className="mb-upper-navbar-container">
      <div className="mb-upper-navbar">
        <Link href={"/"}>
          <Image className="" src={logo} alt="" width={150} height={150} />
        </Link>
        <div
          className="mb-menu-bar-container"
          onClick={() => {
            setState(!state);
          }}
        >
          <div
            className={
              state ? " mb-bar bar-upper menu-active" : " mb-bar bar-upper"
            }
          ></div>
          <div
            className={
              state ? " mb-bar bar-middle menu-active" : " mb-bar bar-middle"
            }
          ></div>
          <div
            className={
              state ? " mb-bar bar-lower menu-active" : " mb-bar bar-lower"
            }
          ></div>
        </div>
        {loginState ? (
          <>
            {" "}
            <div className="mb-avatar-container">
              <img
                src="https://lh3.googleusercontent.com/fife/ALs6j_FtGROf6oK1LX8JigFwE11Fyz9rqxQHBz7Z_yRDmCBAigvg2vxXEZRLmGaqn0EBWuBaIjZ5VNUcGDAyft0tnT830cuUB_K_-YGaqBeF4juDmMYxIyL9zZPVqLe0fuDS2d26_08hPqDPMd5ARXzyW0VBKQfzyV78Rrd3MzM_snOF4SZuPmL5EnyNBSrtCTRgzDIlAPf2yGpHRdd6NMBbck8-5IH8oL7-VJKBOeqNft8F6dEU8jTzixwQmjZ-tv9aS3ig9sv7BbkvRLZufu5s-7NA-KQLUtUVg_8z33WCiX9hDoGwH6sXlSMKF70tZrx3r0ThifeRiLlwkb1-8M6LYaw8e3oZHQTKc1OGp84yO6uWoaVOsld3rauftGw3_D3Va9AmzCViLY3-_dvKJquoU4uo3yX4aCNhtu647zYnUCiEEacZL3sCU3zWOtJ8VAhigq7FE-r_kmlpuqpYQDJdh0v0fD1srjqj_wlcxklkFYizNFz_TCarV4dWctnoPE23EkHAJROFbDQ4LXR7M3Rp1Ml5MCozl8_BLcj17pFpbI6QDWyC85Nsd-rEXeNw1RmP1XyMwZvNj4xitdp_MJKUzVCifrG6_XEk3qW3Ws34qN7geaCCq1N4wV3QRv_QayslT0sLox95ajpSX6FHh8u3LYEu5oueDrCwwO8-B59rLFRnf6HRxdRhnS8H9uBwZHh1Ajnt6y0ixMILaI7_LR8XUkJVWuSkTadNJRTI79Kr394uAWg6amy8pA-GLS4WpbN-tbtCrzBjGtu6EtoJ78ZvMTG7No9bpgDAtQZUx8q6tKIGW3gYOPqeKpehQLlajz7ttz_77mze8vVP_2fjhA-N06mvJ2xofb0rIeCJe3DcrrS_h_cFdbUlh7uohFRsvZONDoTN7jV2PbuK2PdH-tyh8wxZI5uhgLXj7Lp-e2Ybr8PtLv36I6O4zFYu39s4Cb8zsCBHG23F2dFu2WfMdCdGbOG2T5733KiRq6eKQ-PP4rlH8lWNVskAeSdNo8z7toLOHfQ2gMxJNPmVsAs0v_H663jxwml7TOs40vSn9o7U69JsGoRwwJSrleqIBhAn-NFDxS3-vGHUMKI0ivsXBXg_M-fjQ9BEKcAcDptVB2DkGfZMOGU58V75D8puppBGL-2KFxKLtN0N4p-v4HnoK97KT7MTjrxQVeMF7oaadEDB3Ot852rpSzFK1NgVmFMXobndGDYy67HfqOrAdBFmRnADr-VO9O2UKuMD8K0sWA3arn3FF56WbCPq390hM6RXZ__pUoUTevl4ow6DYeCeXoVm_uLB9Qzoni-Bw8kNoeAYpTiwAGLIX91xIrBXwcWk8e6dFxTm5fjkGjscANo4fLcwMp91FznKGSCIbyzswWEz35hda1jguP5dlagfCnH3va3ioQ=s32-c"
                alt=""
              />
            </div>
          </>
        ) : (
          <div className="mb-navbar-login-container">
            {/* <Link className="btn" href={"/login"}>
              Login
            </Link> */}
            {/* <div className="btn">Login</div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpperNavbarJS;
