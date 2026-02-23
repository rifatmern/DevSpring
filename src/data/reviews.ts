// data/reviews.ts

export interface Review {
    id: number;
    name: string;
    company: string;
    rating: number;
    message: string;
    image: string; // online avatar or public folder path
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Olivia Martinez",
        company: "PixelWave",
        rating: 5,
        message:
            "DevSpring crafted a responsive website that exceeded our expectations. The design and UX are top-notch!",
        image: "https://i.pravatar.cc/150?img=47",
    },
    {
        id: 2,
        name: "Liam Johnson",
        company: "NextGen Labs",
        rating: 5,
        message:
            "The frontend is lightning fast and beautifully structured. Communication was clear and professional.",
        image: "https://i.pravatar.cc/150?img=65",
    },
    {
        id: 3,
        name: "Sophia Lee",
        company: "Innovatech",
        rating: 5,
        message:
            "From Figma to a full React application, DevSpring handled everything with precision. Highly recommended!",
        image: "https://i.pravatar.cc/150?img=12",
    },
    {
        id: 4,
        name: "Ethan Brown",
        company: "CloudWorks",
        rating: 5,
        message:
            "The project was delivered ahead of schedule, with clean code and a smooth, modern UI. Fantastic experience.",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
        id: 5,
        name: "Ava Wilson",
        company: "BrightSide Digital",
        rating: 5,
        message:
            "Highly creative solutions and excellent attention to detail. Our website now looks premium and functions flawlessly.",
        image: "https://i.pravatar.cc/150?img=15",
    },
];

export default reviews;