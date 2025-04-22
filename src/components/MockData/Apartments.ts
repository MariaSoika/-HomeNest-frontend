interface Property {
    residentialComplexName: string;
    id: number;
    photo: string;
    title: string;
    price: number;
    area: number;
    rooms: number;
    floor: number;
    address: string;
    status: string;
    type: "Продаж" | "Оренда";
    category: string;
    verification: "Верифіковано" | "Очікує";
}

const apartments: Property[] = [
    {
        residentialComplexName: "Новий",
        id: 1,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Продаж",
        category: "Квартира",
        verification: "Верифіковано"
    },
    {
        residentialComplexName: "Новий",
        id: 2,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Оренда",
        category: "Квартира",
        verification: "Очікує"
    },
    {
        residentialComplexName: "Новий",
        id: 3,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Продаж",
        category: "Квартира",
        verification: "Очікує"
    },
    {
        residentialComplexName: "Новий",
        id: 4,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Оренда",
        category: "Квартира",
        verification: "Очікує"
    },
    {
        residentialComplexName: "Новий",
        id: 5,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Продаж",
        category: "Квартира",
        verification: "Очікує"
    }
];

export {apartments};
export type { Property };
