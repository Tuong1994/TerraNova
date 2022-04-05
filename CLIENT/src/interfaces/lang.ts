import { LangENG } from "../translate/ENG";
import { LangVN } from "../translate/VN";

export type ILangs = LangENG | LangVN | undefined

export enum ELangs {
  ENG = "ENG",
  VN = "VN",
}
