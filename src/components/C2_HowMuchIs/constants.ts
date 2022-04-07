import {svgIcons} from "../../assets/svg/svgIcons";

export interface ICard {
    title: string
    text: string
    price: number
    background: string
    icon: any
}

export const cards: ICard[]  = [
    {
        title: "Landing",
        text: 'A single-page site for the sale of one or more products. We will create a cool design, write "selling" texts, connect the payment system and prepare for the launch of advertising.',
        price: 200,
        background: "#0085FF",
        icon: svgIcons.howMuchIs0,
    },
    {
        title: "Corporate website",
        text: "Multi-page website about your business. We will create an impressive design, a modern structure, connect an engine for managing content and publishing news.",
        price: 270,
        background: "#00FFAF",
        icon: svgIcons.howMuchIs1,
    },
    {
        title: "Online store",
        text: "Large multi-page site for the sale of goods. We will create a convenient card design, connect it to your management system (for example, 1C) and integrate the payment system.",
        price: 380,
        background: "#F9C835",
        icon: svgIcons.howMuchIs2,
    },
];