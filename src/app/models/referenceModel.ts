import { EspanolWords } from "./espanol-words";

export interface ReferenceModel {
    id: number;
    reference: string;
    registeredAt: string;
    updatedAt: string;
    espanolw: EspanolWords;
}
