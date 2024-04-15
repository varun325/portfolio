import {
    BsLinkedin,
    BsMessenger,
    BsWhatsapp,
    BsTwitterX,
    BsTelegram,
    BsGithub,
} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { v4 as uuid } from "uuid";
const socialButtonsAriaLabels: Map<IconType, { title: string; url: string }> =
    new Map([
        [
            BsLinkedin,
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/varun-sharma325/",
            },
        ],
        [BsMessenger, { title: "Messenger", url: "#" }],
        [BsWhatsapp, { title: "Whatsapp", url: "#" }],
        [BsTwitterX, { title: "Twitter", url: "#" }],
        [BsTelegram, { title: "Telegram", url: "https://t.me/Iitaadorii" }],
        [BsGithub, { title: "Github", url: "https://github.com/varun325" }],
        [
            SiLeetcode,
            { title: "LeetCode", url: "https://leetcode.com/varun325" },
        ],
        [
            MdOutlineAlternateEmail,
            { title: "Email", url: "mailto:sharmavarun1300@gmail.com" },
        ],
    ]);
export default function Socials() {
    return (
        <>
            {[
                BsLinkedin,
                // BsMessenger,
                // BsWhatsapp,
                // BsTwitterX,
                BsGithub,
                SiLeetcode,
                BsTelegram,
                MdOutlineAlternateEmail,
            ].map((Icon) => (
                <a
                    href={socialButtonsAriaLabels.get(Icon)?.url}
                    key={uuid()}
                    target="_blank"
                >
                    <button
                        aria-label={socialButtonsAriaLabels.get(Icon)?.title}
                    >
                        <Icon className="w-8 h-8 text-white" />
                    </button>
                </a>
            ))}
        </>
    );
}
