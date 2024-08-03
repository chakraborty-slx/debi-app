export type Guest = {
    name: string;
    isPresent: boolean;
    adults: number;
    children: number;
    isStudent: boolean;
    isVeg: boolean;
    isCar: boolean;
    total: number;
    paid: boolean;
    day1: TicketType;
    day2: TicketType;
    day3: TicketType;
    day4: TicketType;
    day5: TicketType;
    all5days: boolean;
    message: string;
};

export type TicketType = "None" | "Full" | "Half" | "Visitor"

//https://github.com/IsaacThaJunior/react-hook-form-and-mui/blob/main/src/form-components/FormInputRadio.tsx