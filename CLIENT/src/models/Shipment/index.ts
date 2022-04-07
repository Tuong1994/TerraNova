export enum EWard {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6,
    seven = 7,
    eight = 8,
    nine = 9,
    ten = 10,
    eleven = 11,
    twelve = 12,
    thirteen = 13,
    fourteen = 14,
}

export enum EDistrict {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6,
    seven = 7,
    eight = 8,
    nine = 9,
    ten = 10,
    eleven = 11,
    twelve = 12,
}

export enum EProvince {
    HCM = 1,
    HN = 2,
}

export interface IShipment {
    userId?: string;
    userName?: string;
    phone?: string;
    email?: string;
    address?: string;
    ward?: string;
    district?: string;
    province?: string;
}