"use client";

import React, { useState } from "react";
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
import { IconType } from "react-icons";
import SocialModal from "./SocialModal";
import { Dialog, DialogTrigger } from "./ui/dialog";

interface SocialItem {
  icon: IconType;
  name: string;
}

const socialItems: SocialItem[] = [
  { icon: FaTelegram, name: "Telegram" },
  { icon: AiFillInstagram, name: "Instagram" },
  { icon: BsTwitterX, name: "X" },
  { icon: FaFacebook, name: "Facebook" },
  { icon: BsSpotify, name: "Spotify" },
  { icon: FaYoutube, name: "Youtube" },
  { icon: BsFillThreadsFill, name: "Thread" },
  { icon: AiFillTikTok, name: "TikTok" },
  { icon: FaLinkedin, name: "LinkedIn" },
  { icon: SiAudiomack, name: "AudioMack" },
  { icon: SiApplemusic, name: "Apple Music" },
  { icon: BsDiscord, name: "Discord" },
  { icon: FaTwitch, name: "Twitch" },
  { icon: GiWorld, name: "Website Traffic" },
  { icon: FaSoundcloud, name: "Sound Cloud" },
];

const SocialList = () => {
  const [selectedSocial, setSelectedSocial] = useState("");
  return (
    <Dialog>
      <SocialModal selectedSocial={selectedSocial} />
      <div className="grid md:grid-cols-4 grid-cols-3 gap-8 my-6">
        {socialItems.map((item, index) => (
          <DialogTrigger
            key={index}
            onClick={() => setSelectedSocial(item.name)}
          >
            <div className="flex-center flex-col text-center">
              <item.icon color="#f97316" size={50} />
              <h1>{item.name}</h1>
            </div>
          </DialogTrigger>
        ))}
      </div>
    </Dialog>
  );
};

export default SocialList;
