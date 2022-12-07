export const user = {
    username: "1",
    password: "1"
}

export const userDetails = {
    username: "felix.martinez",
    firstName: "Felix",
    lastName: "Martinez C",
    email: "felix.martinezcasadiego@gmail.com"
}

export interface UserDetails {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface User {
    username: string;
    password: string;
}