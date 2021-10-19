import { EspanolWords } from "./espanol-words";
import { PurepechaWords } from "./purepecha-words";

export interface ReferenceModel {
    id: number;
    reference: string;
    registeredAt: string;
    updatedAt: string;
    espanolw: EspanolWords;
    purepechaw: PurepechaWords;
}
