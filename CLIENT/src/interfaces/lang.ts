import { LangCH } from "../translate/CH";
import { LangENG } from "../translate/ENG";
import { LangVN } from "../translate/VN";

export type ILangs = LangENG | LangVN | LangCH | undefined

export enum ELangs {
  ENG = "ENG",
  VN = "VN",
  CH = "CH",
}
