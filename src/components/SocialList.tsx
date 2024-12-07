import React from "react";
import {
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaTwitch,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa6";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import {
  BsTwitterX,
  BsSpotify,
  BsFillThreadsFill,
  BsDiscord,
} from "react-icons/bs";
import { SiAudiomack, SiApplemusic } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
const SocialList = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-3 gap-8 my-6">
      <div className="flex-center flex-col text-center">
        <FaTelegram color="#f97316" size={50} />
        <h1>Telegram</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <AiFillInstagram color="#f97316" size={50} />
        <h1>Instagram</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <BsTwitterX color="#f97316" size={50} />
        <h1>X</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <FaFacebook color="#f97316" size={50} />
        <h1>Facebbok</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <BsSpotify color="#f97316" size={50} />
        <h1>Spotify</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <FaYoutube color="#f97316" size={50} />
        <h1>Youtube</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <BsFillThreadsFill color="#f97316" size={50} />
        <h1>Thread</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <AiFillTikTok color="#f97316" size={50} />
        <h1>TikTok</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <FaLinkedin color="#f97316" size={50} />
        <h1>LinkedIn</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <SiAudiomack color="#f97316" size={50} />
        <h1>AudioMack</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <SiApplemusic color="#f97316" size={50} />
        <h1>Apple Music</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <BsDiscord color="#f97316" size={50} />
        <h1>Discord</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <FaTwitch color="#f97316" size={50} />
        <h1>Twitch</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <GiWorld color="#f97316" size={50} />
        <h1>Website Traffic</h1>
      </div>
      <div className="flex-center flex-col text-center">
        <FaSoundcloud color="#f97316" size={50} />
        <h1>Sound Cloud</h1>
      </div>
    </div>
  );
};

export default SocialList;
