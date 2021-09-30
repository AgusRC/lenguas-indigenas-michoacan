import { ReferenceModel } from "./referenceModel";

export interface PurepechaWords {
    active: boolean;
    id: number;
    mainword: string;
    registeredAt: string;
    updatedAt: string;
    reference: ReferenceModel[];
}
