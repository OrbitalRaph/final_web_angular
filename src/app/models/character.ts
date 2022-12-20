import { Constellation } from "./constellation";
import { Skills } from "./skills";

export class Character {
    constructor(
        public _id: string,
        public name: string,
        public title: string,
        public description: string,
        public weapon_type: string,
        public element: string,
        public affiliation: string,
        public region: string,
        public rarity: number,
        public birthday: string,
        public constellation: string,
        public constellations: Constellation[],
        public passives: string[],
        public skills: Skills[],
    ) {}
}
