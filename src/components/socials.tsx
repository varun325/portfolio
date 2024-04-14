import {
    BsLinkedin,
    BsMessenger,
    BsWhatsapp,
    BsTwitterX,
    BsTelegram,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { v4 as uuid } from "uuid";
const socialButtonsAriaLabels: Map<IconType, string> = new Map([
    [BsLinkedin, "LinkedIn"],
    [BsMessenger, "Messenger"],
    [BsWhatsapp, "Whatsapp"],
    [BsTwitterX, "Twitter"],
    [BsTelegram, "Telegram"],
    [MdOutlineAlternateEmail, "Email"],
]);
export default function Socials() {
    return (
        <>
            {[
                BsLinkedin,
                BsMessenger,
                BsWhatsapp,
                BsTwitterX,
                BsTelegram,
                MdOutlineAlternateEmail,
            ].map((Icon) => (
                <button
                    key={uuid()}
                    aria-label={socialButtonsAriaLabels.get(Icon)}
                >
                    <Icon className="w-8 h-8 text-white" />
                </button>
            ))}
        </>
    );
}
