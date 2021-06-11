export interface ProfileData{
    image_loc: string;
    gradient: string[];
    href: string;
}

export interface Institution{
    name: string;
    logo: string;
    location: string;
    education: string;
    time: string;
    marks: string;
    alt: string;
    status: number;
}

export interface Company{
    name: string;
    logo: string;
    location: string;
    designation: string;
    time: string;
    alt: string;
    status: number;
    description: string[];
}

export interface Skill{
    skill: string;
    logo: string;
    alt: string;
    score: number;
}

export interface Certificate{
    course: string;
    providers: {
        name: string;
        image: string;
    }[];
    doi: string;
    cred_id: string;
    verify_link: string;
    view_link: string;
    status: number;
}